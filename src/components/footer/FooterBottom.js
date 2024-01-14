import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterBottom = () => {
  // Replace 'your_linkedin_profile_url' with your actual LinkedIn profile URL
  const linkedinUrl = 'https://www.linkedin.com/in/sushma-indrani/';

  return (
    <div className="w-full py-3 flex flex-col items-center justify-center">
      <div className="flex gap-4">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bannerIcon">
          <FaLinkedinIn />
        </a>
      </div>
      <br></br>
      <p className="text-center text-purple-300 text-base">
        © 2024. All rights reserved by Dangeti Sushma Indrani
      </p>
    </div>
  );
}

export default FooterBottom;
