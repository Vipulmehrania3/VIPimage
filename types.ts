// FIX: Add import for React to resolve 'React.ReactNode' type.
import React from 'react';

export interface Scenario {
  id: string;
  title: string;
  description: string;
  requiredImages: number;
  prompt: string;
  icon: React.ReactNode;
}
