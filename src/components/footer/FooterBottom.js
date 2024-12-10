import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi'; // Import mail icon

const FooterBottom = () => {
  // Replace with your actual LinkedIn profile URL and email
  const linkedinUrl = 'https://www.linkedin.com/in/sushma-indrani/';
  const email = 'sushmaindrani2425@gmail.com';

  return (
    <div className="w-full py-3 flex flex-col items-center justify-center">
      <div className="flex gap-4">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={`mailto:${email}`}
          className="bannerIcon"
        >
          <HiMail />
        </a>
      </div>
      <br />
      <p className="text-center text-purple-300 text-base">
        © 2024. All rights reserved by Dangeti Sushma Indrani
      </p>
    </div>
  );
};

export default FooterBottom;
