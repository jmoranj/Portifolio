'use client';

import React, { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ 
  id, 
  title, 
  children 
}) => {
  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export const ContentContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-12">
      {children}
    </div>
  );
};
