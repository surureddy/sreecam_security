// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import '../styles/layout.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"><img src="/images/logo2.png" alt="logo" /></div>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Products</Link>
          {/* <Link href="/admin/login">Admin</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
