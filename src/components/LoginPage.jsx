import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { useToast } from './ui/use-toast';
import { ArrowLeft, Shield, Users, TrendingUp } from 'lucide-react';

const LoginPage = ({ onLogin, onBackToPublic }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Demo users for testing
  const demoUsers = [
    { id: 1, email: 'admin@fundraise.com', password: 'admin123', role: 'Super Admin' },
    { id: 2, email: 'manager@fundraise.com', password: 'manager123', role: 'Campaign Manager' },
    { id: 3, email: 'staff@fundraise.com', password: 'staff123', role: 'Staff' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = demoUsers.find(u => u.email === email && u.password === password);
      if (user) {
        onLogin(user);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Try demo credentials!",
          variant: "destructive"
        });
      }
      setLoading(false);
    }, 1000);
  };

  // Add missing loginWithDemo function
  const loginWithDemo = (user) => {
    setEmail(user.email);
    setPassword(user.password);
    setLoading(true);
    setTimeout(() => {
      onLogin(user);
      setLoading(false);
    }, 1000);
  };

  return (
  <section className="content" style={{ marginTop: '150px', marginBottom: '50px' }}>
        <div className="min-h-screen flex items-center justify-center bg-black/80 backdrop-blur-lg">
          <div className="book-table container" style={{ maxWidth: 480, width: '100%', margin: '0 auto', background: '#000', borderRadius: 16, boxShadow: '0 8px 32px rgba(33,47,160,0.12)', padding: '2.5rem 2rem', border: '2px solid #ff2c55', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="the-title text-center" style={{ marginBottom: 24 }}>
              <h5 className="head-title-2" style={{ color: '#ff2c55', fontWeight: 700 }}>LOGIN</h5>
              <h2 className="head-title-1" style={{ color: '#ffffffff', fontWeight: 700 }}>AUTHEN ACCESS<span className="title-end">.</span></h2>
              <p className="dugem-text" style={{ color: '#ffffffff' }}>Sign in to access system.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form-style w-full" style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Email"
                style={{ marginBottom: 12, maxWidth: 320 }} />
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Password"
                style={{ marginBottom: 12, maxWidth: 320 }} />
              <Button type="submit" className="button-basic-1 w-full" style={{ fontWeight: 700, fontSize: '1.1rem', maxWidth: 320 }} disabled={loading}>
                LOGIN
              </Button>
            </form>
            <div style={{ marginTop: 32, width: '100%' }}>
            </div>
                {/* Demo account section hidden as requested */}
          </div>
        </div>
      </section>
  // ...existing code...
  );
};

export default LoginPage;