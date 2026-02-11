import { useContext, useState } from 'react';
import { Eye, EyeOff, UserPlus, Music, Sailboat } from 'lucide-react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {

  const {createUser, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePassword = (pwd) => {
    if (pwd.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(pwd)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(pwd)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/\d/.test(pwd)) {
      return 'Password must contain at least one number';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      return 'Password must contain at least one special character';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   alert('Registration successful! You can now sign in.');
    //   navigate('/login');
    // }, 1400);

    try{
      await createUser(formData.email, formData.password)
        .then((result) =>{
            const user = result.user;
            setIsSubmitting(false);
            toast.success("Registration Successful.");
            navigate('/login');
            console.log(user)
        }).catch((err)=>{
            const errorMessage =  err.message;
            toast.error(errorMessage);
            console.log(errorMessage);
        }) 
    } 
    catch(err){
      toast.error(err.message);
    }

    console.log(formData)
  };

  const handleGoogleSignup = async () => {
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
              Join Surer Tori
            </h1>
            <p className="mt-2 text-[#D4A017]/80 font-medium">
              Create your account and start your musical journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 pb-10 space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#D4A017] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-black/40 border ${
                  errors.fullName ? 'border-red-500' : 'border-[#D4A017]/30'
                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30 transition-all duration-300`}
                placeholder="Your full name"
              />
              {errors.fullName && <p className="mt-1.5 text-red-400 text-sm">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#D4A017] mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-black/40 border ${
                  errors.email ? 'border-red-500' : 'border-[#D4A017]/30'
                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30 transition-all duration-300`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1.5 text-red-400 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#D4A017] mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-black/40 border ${
                    errors.password ? 'border-red-500' : 'border-[#D4A017]/30'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30 transition-all duration-300 pr-11`}
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
              {errors.password && <p className="mt-1.5 text-red-400 text-sm">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#D4A017] mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 bg-black/40 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-[#D4A017]/30'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/30 transition-all duration-300 pr-11`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D4A017]/70 hover:text-[#D4A017] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-red-400 text-sm">{errors.confirmPassword}</p>
              )}
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
                       disabled:opacity-60 disabled:cursor-not-allowed mt-2`}
            >
              {isSubmitting ? 'Creating account...' : 'Create Account'}
              <UserPlus size={18} />
            </button>

            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full py-4 bg-white/10 border border-[#D4A017]/30 
                       hover:bg-white/15 text-white font-medium rounded-xl
                       transition-all duration-300 flex items-center justify-center gap-3"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Sign up with Google
            </button>

            <p className="text-center text-gray-400 text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-[#D4A017] hover:text-[#F5D76E] font-medium transition-colors"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          © 2026 Surer Tori • Secure Registration
        </p>
      </div>
    </div>
  );
};

export default Register;