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
  admin.initializeApp();
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

// This is an internal administrative flow and doesn't need to be exposed to the client directly
// It's designed to be triggered by another server-side event, like a user creation trigger.
// For simplicity in this context, we are creating a flow that can be called.

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


// Although we don't have a direct `onCreate` trigger in Genkit like in Cloud Functions,
// we can simulate the logic. In a real app, you would call this flow from a secure admin interface
// or have a separate process that watches for new users.

// For the purpose of this project, we assume an admin user might be created manually
// and this flow could be triggered to elevate their privileges.

// A simple exported function to be potentially used by other server-side components.
export async function assignAdminClaim(input: AssignAdminClaimInput): Promise<AssignAdminClaimOutput> {
    // We only want to assign admin claim if the email is the designated admin email.
    if (input.email === 'admin@example.com') {
        return await assignAdminClaimFlow(input);
    } else {
        return { success: false, message: 'Email is not a designated admin email.' };
    }
}

/**
 * We can also export a flow that is triggered on user creation for a more automated approach,
 * though direct triggers are more of a Cloud Functions pattern.
 * This is a conceptual representation.
 */
ai.defineFlow(
  {
    name: 'onUserCreateSetAdmin',
    inputSchema: z.object({ email: z.string().email(), uid: z.string() }),
    outputSchema: z.void(),
  },
  async ({ email, uid }) => {
    if (email === 'admin@example.com') {
      console.log(`New user matches admin email. Assigning admin claim to ${uid}.`);
      await admin.auth().setCustomUserClaims(uid, { admin: true });
      console.log(`Admin claim set for ${uid}.`);
    }
  }
);
