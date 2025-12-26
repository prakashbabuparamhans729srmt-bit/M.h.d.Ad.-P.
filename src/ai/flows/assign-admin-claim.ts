'use server';
/**
 * @fileOverview A flow to assign admin custom claims to a user.
 * This is a server-side administrative task.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK if it hasn't been already
if (!admin.apps.length) {
  try {
    admin.initializeApp();
  } catch (e) {
    console.error('Firebase admin initialization error', e);
  }
}

const AssignAdminClaimInputSchema = z.object({
  email: z.string().email().describe('The email of the user to make an admin.'),
});
export type AssignAdminClaimInput = z.infer<typeof AssignAdminClaimInputSchema>;

const AssignAdminClaimOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type AssignAdminClaimOutput = z.infer<typeof AssignAdminClaimOutputSchema>;

/**
 * Manually assigns an admin claim to a user. This can be called from a secure environment.
 */
export async function assignAdminClaim(input: AssignAdminClaimInput): Promise<AssignAdminClaimOutput> {
    try {
      const user = await admin.auth().getUserByEmail(input.email);
      if (user) {
        await admin.auth().setCustomUserClaims(user.uid, { admin: true });
        const message = `Successfully set admin claim for ${input.email}`;
        console.log(message);
        return { success: true, message };
      } else {
        const message = `User with email ${input.email} not found.`;
        console.log(message);
        return { success: false, message };
      }
    } catch (error: any) {
      console.error('Error setting custom claim:', error);
      return { success: false, message: error.message };
    }
}

/**
 * This flow is designed to be triggered on user creation via a Firebase Function.
 * In a real Firebase project, you would deploy this logic as a Cloud Function
 * listening to the `functions.auth.user().onCreate()` trigger.
 * It automatically assigns an admin role to a specific email address upon account creation.
 */
ai.defineFlow(
  {
    name: 'onUserCreateSetAdmin',
    inputSchema: z.object({ email: z.string().email(), uid: z.string() }),
    outputSchema: z.void(),
  },
  async ({ email, uid }) => {
    // Automatically grant admin privileges to the specified email on creation.
    if (email === 'admin@example.com') {
      try {
        await admin.auth().setCustomUserClaims(uid, { admin: true });
        console.log(`✅ Admin role automatically assigned to ${email} (UID: ${uid})`);
      } catch (error) {
        console.error(`Error auto-assigning admin role to ${email}:`, error);
      }
    }
  }
);
