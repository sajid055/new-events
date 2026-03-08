"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          >
            <button
              onClick={onClose}
              aria-label="Close login modal"
              className="absolute right-5 top-5 text-gray-300 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <div
              className="w-full max-w-[540px] rounded-3xl bg-white p-7 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a]">
                Welcome Back
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                Sign in to your TrueEvents account
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-[15px] font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-14 w-full rounded-xl border border-gray-300 px-4 text-lg text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/25"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[15px] font-semibold text-slate-700">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-14 w-full rounded-xl border border-gray-300 px-4 pr-12 text-lg text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/25"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-400" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="font-semibold text-violet-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="mt-1 h-14 w-full rounded-xl bg-black text-lg font-semibold text-white transition hover:opacity-90"
                >
                  Sign In
                </button>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="h-[1px] flex-1 bg-gray-200" />
                  Or continue with
                  <div className="h-[1px] flex-1 bg-gray-200" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="h-12 rounded-xl border border-gray-300 font-semibold text-slate-700 transition hover:bg-gray-50"
                  >
                    Google
                  </button>

                  <button
                    type="button"
                    className="h-12 rounded-xl border border-gray-300 font-semibold text-slate-700 transition hover:bg-gray-50"
                  >
                    GitHub
                  </button>
                </div>

                <p className="pt-1 text-center text-sm text-gray-500">
                  Don&apos;t have an account?{" "}
                  <span className="cursor-pointer font-semibold text-violet-600">
                    Sign up here
                  </span>
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
