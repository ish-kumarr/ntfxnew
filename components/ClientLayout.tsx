'use client';

import React from 'react';
import { PageTransition } from './PageTransition';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
