// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import '../styles/layout.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo"><img src="/images/logo1.png" alt="" />SreeCam Security</div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Products</Link>

        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} SreeCam Security.
      </div>
    </footer>
  );
};

export default Footer;
