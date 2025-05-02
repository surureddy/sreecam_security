// src/pages/admin/login.tsx
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ CORRECT for App Router


const correctPassword = "admin123"; // Hardcoded password for now

const Login = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      // Set JWT token in cookies (can use `js-cookie` or `next-cookies`)
      localStorage.setItem('admin-token', 'your-jwt-token');  // You can replace it with actual JWT logic
      router.push('/admin/dashboard');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Admin Password" 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
