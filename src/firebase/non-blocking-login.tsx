'use client';
import {
  Auth, // Import Auth type for type hinting
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // Assume getAuth and app are initialized elsewhere
} from 'firebase/auth';
import { errorEmitter } from './error-emitter';
import { FirestorePermissionError } from './errors';

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

/**
 * Initiate email/password sign-in (non-blocking).
 * Implements a "sign-in or sign-up" flow.
 */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): void {
  // CRITICAL: Call signInWithEmailAndPassword directly. Do NOT use 'await signInWithEmailAndPassword(...)'.
  signInWithEmailAndPassword(authInstance, email, password).catch(error => {
    // If the error is 'auth/invalid-credential', it means the user doesn't exist or password is wrong.
    // In this specific flow, we'll treat it as a new user and attempt to sign them up.
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
      // CRITICAL: This is also non-blocking.
      initiateEmailSignUp(authInstance, email, password);
    } else {
      // For other errors (network issues, etc.), log them.
      console.error('Email sign-in error:', error);
    }
  });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}
