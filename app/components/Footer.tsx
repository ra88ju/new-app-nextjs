import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-black text-white py-6 rounded-lg">
      <div className="container mx-auto px-4">
              {/* Copyright Section */}
              <div className="text-center mt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
              </div>
            </div>
          </footer>
        );
      }
export default Footer;
