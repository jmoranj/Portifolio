'use client';

import React from 'react';
import Image from 'next/image';
import { ContentSection } from '../contentContainer/ContentContainer';

const PersonalInfo: React.FC = () => {
  return (
    <ContentSection id="about" title="João Morandim">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Personal Introduction</h3>
          <p className="text-gray-700">
            A brief professional summary about yourself, 
            highlighting your skills, experience, and passion.
          </p>
          <div className="space-y-2">
            <h4 className="font-bold">Key Highlights:</h4>
            <ul className="list-disc list-inside">
              <li>Professional expertise</li>
              <li>Technical skills</li>
              <li>Career objectives</li>
            </ul>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex justify-center">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
            <Image 
              src="/path/to/your/professional/photo.jpg" 
              alt="Your Professional Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default PersonalInfo;
