'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth, useUser, useAdmin, useFirestore, setDocumentNonBlocking } from '@/firebase';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Github, HelpCircle, Network } from 'lucide-react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc } from 'firebase/firestore';

const registerSchema = z.object({
  firstName: z.string().min(2, { message: 'पहला नाम आवश्यक है।' }),
  lastName: z.string().min(2, { message: 'अंतिम नाम आवश्यक है।' }),
  email: z.string().email({ message: 'अमान्य ईमेल पता।' }),
  password: z.string().min(8, { message: 'कम से कम 8 अक्षर का होना चाहिए।' }),
  phone: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email({ message: 'अमान्य ईमेल पता।' }),
  password: z.string().min(1, { message: 'पासवर्ड आवश्यक है।' }),
});


const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 1.79-.22 2.5-.58" />
        <path d="M22 12h-4" />
        <path d="M12.55 21.55c-1.68-.43-3.1-1.33-4.2-2.55" />
        <path d="M4 12H2" />
        <path d="M12 2v2" />
        <path d="M5.25 5.25l1.42 1.42" />
        <path d="M18.75 5.25l-1.42 1.42" />
        <path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5" />
        <path d="M17 12c0 2.76-2.24 5-5 5" />
    </svg>
);

function AuthPageComponent() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');
  
  const [isLoginView, setIsLoginView] = useState(view !== 'signup');
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const { isAdmin, isAdminLoading } = useAdmin();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const currentSchema = isLoginView ? loginSchema : registerSchema;
  type FormInputs = z.infer<typeof currentSchema>;

  const form = useForm<FormInputs>({
    resolver: zodResolver(currentSchema),
    defaultValues: {
      email: '',
      password: '',
      ...(isLoginView ? {} : { firstName: '', lastName: '', phone: '' }),
    },
  });
  
  // Effect to switch form view based on URL parameter
  useEffect(() => {
    setIsLoginView(view !== 'signup');
  }, [view]);

  useEffect(() => {
    form.reset();
    setAuthError(null);
  }, [isLoginView, form]);
  
  useEffect(() => {
    if (!isUserLoading && !isAdminLoading && user) {
        router.push(isAdmin ? '/admin/dashboard' : '/client/dashboard');
    }
  }, [user, isUserLoading, isAdmin, isAdminLoading, router]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    setAuthError(null);
    try {
      if (isLoginView) {
        const { email, password } = data as z.infer<typeof loginSchema>;
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const { email, password, firstName, lastName, phone } = data as z.infer<typeof registerSchema>;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // After creating the user in Auth, create their profile in Firestore.
        if (userCredential.user && firestore) {
            const newUserProfile = {
                id: userCredential.user.uid,
                firstName,
                lastName,
                email: userCredential.user.email,
                phone: phone || null,
                role: 'Client' // Assign a default role
            };
            const userDocRef = doc(firestore, 'users', userCredential.user.uid);
            // This is a non-blocking write operation that includes our custom error handling
            setDocumentNonBlocking(userDocRef, newUserProfile, {});
        }
      }
    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          setAuthError('इस ईमेल के लिए कोई उपयोगकर्ता नहीं मिला।');
          break;
        case 'auth/wrong-password':
          setAuthError('गलत पासवर्ड। कृपया पुनः प्रयास करें।');
          break;
        case 'auth/email-already-in-use':
          setAuthError('यह ईमेल पहले से पंजीकृत है। कृपया लॉग इन करें।');
          break;
        default:
          setAuthError('एक त्रुटि हुई। कृपया पुनः प्रयास करें।');
          console.error('Authentication Error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isUserLoading || isAdminLoading || user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4">Authenticating...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#070707] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Column */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-[#07F1D6] via-[#161C21] to-[#070707] text-white">
            <div className="flex items-center gap-3 mb-6">
                <Network className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold font-headline">Hajaro Grahako</span>
            </div>
            <h1 className="font-headline text-4xl font-bold leading-tight">Get Started with Us</h1>
            <p className="mt-2 text-white/80">Complete these easy steps to register your account.</p>

            <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white text-black shadow-lg">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-bold">1</div>
                    <span className="font-semibold">Sign up your account</span>
                </div>
                 <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white font-bold">2</div>
                    <span className="font-semibold text-white/70">Set up your workspace</span>
                </div>
                 <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white font-bold">3</div>
                    <span className="font-semibold text-white/70">Set up your profile</span>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center p-8 sm:p-12 relative">
           <div className="mx-auto w-full max-w-md">
            <h2 className="text-3xl font-bold font-headline text-white">{isLoginView ? 'लॉग इन करें' : 'एक खाता बनाएं'}</h2>
            <p className="mt-2 text-gray-400">{isLoginView ? 'जारी रखने के लिए लॉग इन करें।' : 'शुरू करने के लिए नीचे अपना विवरण दर्ज करें'}</p>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <Button variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800 text-white">
                    <GoogleIcon />
                    Google
                </Button>
                <Button variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800 text-white">
                    <Github />
                    GitHub
                </Button>
            </div>

            <div className="flex items-center my-6">
                <hr className="w-full border-gray-700" />
                <span className="px-4 text-gray-400 text-sm">या</span>
                <hr className="w-full border-gray-700" />
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {!isLoginView && (
                      <div className="grid grid-cols-2 gap-4">
                         <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-gray-400">पहला नाम</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text" 
                                        placeholder="उदा. राहुल" 
                                        className="bg-gray-900 border-gray-700 text-white" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-gray-400">अंतिम नाम</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text" 
                                        placeholder="उदा. कुमार" 
                                        className="bg-gray-900 border-gray-700 text-white" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    )}

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-gray-400">ईमेल</FormLabel>
                            <FormControl>
                                <Input 
                                    type="email" 
                                    placeholder="m@example.com" 
                                    className="bg-gray-900 border-gray-700 text-white" 
                                    {...field} 
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                     {!isLoginView && (
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-gray-400">फ़ोन नंबर (वैकल्पिक)</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="tel" 
                                        placeholder="+91-XXXXXXXXXX" 
                                        className="bg-gray-900 border-gray-700 text-white" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                     )}

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-400">पासवर्ड</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="password" 
                                        className="bg-gray-900 border-gray-700 text-white" 
                                        {...field} 
                                    />
                                </FormControl>
                                {!isLoginView && <p className="text-xs text-gray-500 mt-1">कम से कम 8 अक्षर का होना चाहिए।</p>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    {authError && <p className="text-sm font-medium text-destructive">{authError}</p>}

                    <Button 
                        type="submit" 
                        className="w-full h-12 text-base bg-primary text-primary-foreground font-bold hover:bg-primary/90" 
                        disabled={isSubmitting}
                    >
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isLoginView ? 'लॉग इन करें' : 'खाता बनाएं'}
                    </Button>
                </form>
            </Form>

            <div className="mt-6 text-center text-sm">
                <p className="text-gray-400">{isLoginView ? 'अभी तक कोई खाता नहीं है? ' : 'पहले से ही एक खाता है? '}
                    <button 
                        onClick={() => {
                            const newView = !isLoginView;
                            setIsLoginView(newView);
                            const newPath = `/login?view=${newView ? 'login' : 'signup'}`;
                            window.history.pushState({}, '', newPath);
                        }} 
                        className="font-semibold text-primary hover:underline focus:outline-none"
                    >
                      {isLoginView ? 'साइन अप करें' : 'लॉग इन करें'}
                    </button>
                </p>
            </div>
           </div>
           <div className="absolute bottom-6 right-6">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/10 text-primary hover:bg-white/20">
                    <HelpCircle className="h-6 w-6"/>
                </Button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense>
      <AuthPageComponent />
    </Suspense>
  )
}

    