import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft, ShieldCheck, Info } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { LoginScene } from '@/components/three/Scenes';
import { useToast } from '@/state/toast';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { push } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      push('Signed in (demo). No real authentication backend is configured.', 'info');
      navigate('/admin');
    }, 800);
  };

  const demoLogin = () => {
    setEmail('admin@vikashpack.com');
    setPassword('demo1234');
    push('Demo credentials filled in. Press Sign in to continue.', 'info');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute -left-32 top-0 h-[460px] w-[460px] rounded-full bg-pale-blue blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-lavender blur-3xl opacity-60" />

      <div className="relative grid min-h-screen lg:grid-cols-2">
        {/* Left — brand + 3D */}
        <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
          <Logo />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="my-10 lg:my-0"
          >
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl">
              Welcome Back.
            </h1>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
              Sign in to manage products, enquiries, and business settings.
            </p>
            <div className="relative mt-8 h-[280px] lg:h-[340px]">
              <LoginScene className="h-full w-full" />
            </div>
          </motion.div>

          <Link to="/" className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-cobalt">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Return to Home
          </Link>
        </div>

        {/* Right — login panel */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-md rounded-xl2 border border-navy/5 bg-white p-8 shadow-lift sm:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-navy">Sign in</h2>
            <p className="mt-1.5 text-sm text-muted">Access the Vikash Pack admin dashboard.</p>

            <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@vikashpack.com"
                    className="input-field pl-10"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="block text-sm font-medium text-navy">Password</label>
                  <button type="button" className="text-xs font-medium text-cobalt hover:underline">
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
                  <input
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="input-field pl-10 pr-10"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-light hover:text-navy"
                    aria-label={show ? 'Hide password' : 'Show password'}
                  >
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 px-3 py-2.5 text-xs font-medium text-red-600">
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <button
              onClick={demoLogin}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-cobalt/30 bg-pale-blue/50 px-4 py-3 text-xs font-medium text-cobalt transition-colors hover:bg-pale-blue"
            >
              <Info className="h-3.5 w-3.5" />
              Use demo credentials
            </button>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-soft-mint/50 px-4 py-3 text-xs text-teal-dark">
              <ShieldCheck className="h-3.5 w-3.5" />
              Demo sign-in. Production access requires a secure authentication backend.
            </div>

            <p className="mt-5 text-center text-xs text-muted-light">
              Administrator entry continues to{' '}
              <Link to="/admin" className="font-semibold text-cobalt hover:underline">/admin</Link>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
