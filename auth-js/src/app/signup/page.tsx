"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Code2, Terminal, UserPlus, Github, Mail } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            toast.success("Account created successfully!");
            router.push("/login");
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex min-h-screen bg-[#0a0a0a] text-white">
            {/* LEFT SIDE: Visual/Branding Section */}
            <div className="hidden lg:flex w-1/2 relative bg-blue-600 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
                        alt="Coding Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-900/90" />
                </div>

                <div className="relative z-10 p-12 text-center max-w-lg">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl inline-block mb-6 border border-white/20">
                        <Code2 size={48} className="text-blue-200" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">Level Up Your Code.</h2>
                    <p className="text-blue-100 text-lg">
                        Join OSPAT to compete in global rounds, track your rating, and solve 1000+ algorithmic challenges.
                    </p>
                    <div className="mt-12 grid grid-cols-2 gap-4 text-left">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <Terminal size={20} className="mb-2 text-blue-300" />
                            <h4 className="font-semibold text-sm">Real-time Judge</h4>
                            <p className="text-xs text-blue-200/70">Sub-second execution feedback.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <UserPlus size={20} className="mb-2 text-blue-300" />
                            <h4 className="font-semibold text-sm">Rating System</h4>
                            <p className="text-xs text-blue-200/70">ELO-based global rankings.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                        <p className="text-zinc-400">Join the OSPAT developer community.</p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Handle (Username)</label>
                            <input
                                className="w-full p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-700"
                                type="text"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                placeholder="sumit_tiwari"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Email Address</label>
                            <input
                                className="w-full p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-700"
                                type="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder="sumit@ospat.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ml-1">Password</label>
                            <input
                                className="w-full p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-700"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            onClick={onSignup}
                            disabled={buttonDisabled || loading}
                            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all mt-4 
                                ${buttonDisabled || loading
                                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]"}`}
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
                        </button>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-800"></span></div>
                            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0a0a0a] px-4 text-zinc-500">Already a member?</span></div>
                        </div>

                        <Link
                            href="/login"
                            className="w-full block text-center py-3.5 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-all font-medium text-sm"
                        >
                            Log In to OSPAT
                        </Link>
                    </div>

                    <p className="mt-8 text-center text-xs text-zinc-600">
                        By signing up, you agree to our Terms of Service <br /> and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
}