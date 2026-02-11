import { useContext, useState } from 'react';
import { Eye, EyeOff, LogIn, Music, Sailboat } from 'lucide-react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

  const {signInUser, googleSignIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // setIsSubmitting(true);
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   alert('Login successful! (demo)');
    // }, 1200);
  
    try{
      await signInUser(email,password)
        .then(result => {
          const user = result.user;
          setIsSubmitting(false);
          toast.success("Login Successful.");
          navigate('/');
          console.log(user);
        })
        .catch((err)=>{
          const error = err.message;
          toast.error(error);
          console.log(error);
        })

    }catch(err) {
      const error = err.message;
      toast.error(error);
    }


  };

  const handleGoogleLogin = async () => {
    try{
      const data = await googleSignIn();
      toast.success("Login Successful.");
      navigate('/');
      console.log(data);
    } catch(err){
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a0f1a] via-[#1a0f1a] to-[#180d18] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#9B1D64]/15 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        <div className="backdrop-blur-xl bg-black/30 border border-[#D4A017]/20 rounded-2xl shadow-2xl shadow-[#9B1D64]/40 overflow-hidden">
          <div className="px-8 pt-10 pb-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#9B1D64] to-[#D4A017] mb-5 shadow-lg shadow-[#9B1D64]/50 relative">
              <Sailboat size={36} className="text-white absolute top-3" />
              <Music size={24} className="text-white absolute bottom-3 right-3" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#D4A017] via-[#F5D76E] to-[#D4A017] bg-clip-text text-transparent">
              Surer Tori
            </h1>
            <p className="mt-2 text-[#D4A017]/80 font-medium">
              Begin your musical journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 pb-10 space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#D4A017] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3.5 bg-black/40 border ${
                  emailError ? 'border-red-500' : 'border-[#D4A017]/30'
                } rounded-xl text-white placeholder-gray-500 
                focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30
                transition-all duration-300`}
                placeholder="your.email@example.com"
              />
              {emailError && <p className="mt-1.5 text-red-400 text-sm">{emailError}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#D4A017] mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3.5 bg-black/40 border ${
                    passwordError ? 'border-red-500' : 'border-[#D4A017]/30'
                  } rounded-xl text-white placeholder-gray-500 
                  focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30
                  transition-all duration-300 pr-11`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D4A017]/70 hover:text-[#D4A017] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {passwordError && <p className="mt-1.5 text-red-400 text-sm">{passwordError}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-[#D4A017]/40 bg-black/40 text-[#D4A017] focus:ring-[#D4A017]/50 mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-[#D4A017] hover:text-[#F5D76E] transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-gradient-to-r from-[#9B1D64] to-[#D4A017] 
                       hover:from-[#7a1650] hover:to-[#c48f14]
                       text-white font-semibold rounded-xl
                       shadow-lg shadow-[#9B1D64]/40
                       transform hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300 flex items-center justify-center gap-2
                       disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
              <LogIn size={18} />
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-4 bg-white/10 border border-[#D4A017]/30 
                       hover:bg-white/15 text-white font-medium rounded-xl
                       transition-all duration-300 flex items-center justify-center gap-3"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>

            <p className="text-center text-gray-400 text-sm">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-[#D4A017] hover:text-[#F5D76E] font-medium transition-colors"
              >
                Sign up now
              </button>
            </p>
          </form>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          © 2026 Surer Tori • Secure Access
        </p>
      </div>
    </div>
  );
};

export default Login;