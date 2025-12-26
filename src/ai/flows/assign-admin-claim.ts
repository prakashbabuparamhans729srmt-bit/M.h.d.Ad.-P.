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

const assignAdminClaimFlow = ai.defineFlow(
  {
    name: 'assignAdminClaimFlow',
    inputSchema: AssignAdminClaimInputSchema,
    outputSchema: AssignAdminClaimOutputSchema,
  },
  async ({ email }) => {
    try {
      const user = await admin.auth().getUserByEmail(email);
      if (user) {
        // Set custom user claims
        await admin.auth().setCustomUserClaims(user.uid, { admin: true });
        const message = `Successfully set admin claim for ${email}`;
        console.log(message);
        return { success: true, message };
      } else {
        const message = `User with email ${email} not found.`;
        console.log(message);
        return { success: false, message };
      }
    } catch (error: any) {
      console.error('Error setting custom claim:', error);
      return { success: false, message: error.message };
    }
  }
);

export async function assignAdminClaim(input: AssignAdminClaimInput): Promise<AssignAdminClaimOutput> {
  // We only want to assign admin claim if the email is the designated admin email.
  if (input.email === 'admin@example.com') {
    return await assignAdminClaimFlow(input);
  } else {
    return { success: false, message: 'Email is not a designated admin email.' };
  }
}

/**
 * This flow is triggered on user creation (conceptually).
 * In a real Firebase project, you would set up a Cloud Function trigger.
 * Here, we define the logic that would run inside that trigger.
 * It automatically assigns an admin role to a specific email address.
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
