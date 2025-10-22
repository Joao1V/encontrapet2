'use client';

import { useRouter } from 'next/navigation';
import type React from 'react';
import { useEffect } from 'react';
import { isAuthenticated } from '@/lib/auth';

export function AuthGuard({ children }: { children: React.ReactNode }) {
   const router = useRouter();

   useEffect(() => {
      if (!isAuthenticated()) {
         router.push('/login');
      }
   }, [router]);

   if (!isAuthenticated()) {
      return null;
   }

   return <>{children}</>;
}
