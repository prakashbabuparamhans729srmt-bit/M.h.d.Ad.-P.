'use client';
import {
  Auth, // Import Auth type for type hinting
  signInAnonymously,
  createUserWithEmailAndPassword,
  // Assume getAuth and app are initialized elsewhere
} from 'firebase/auth';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  // CRITICAL: Call signInAnonymously directly. Do NOT use 'await signInAnonymously(...)'.
  signInAnonymously(authInstance).catch(error => {
    // Although anonymous sign-in rarely fails, we catch potential errors.
    console.error('Anonymous sign-in error:', error);
    // Optionally, emit a global error if needed for UI feedback
  });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): void {
  // CRITICAL: Call createUserWithEmailAndPassword directly. Do NOT use 'await createUserWithEmailAndPassword(...)'.
  createUserWithEmailAndPassword(authInstance, email, password).catch(error => {
    // This can fail if the email is already in use, password is weak, etc.
    console.error('Email sign-up error:', error);
    // You might want to emit an error to show in the UI, e.g., using a toast.
    // For this app, we let the user try again.
  });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}
