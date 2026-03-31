"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Terminal, ShieldCheck, Zap, Code, ArrowRight, Loader2 } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            toast.success("Verification email sent! Check your inbox.");
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed", error.message);
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
        <div className="flex min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
            {/* Left Decor Section: Feature Highlights */}
            <div className="hidden lg:flex w-[45%] bg-[#0a0a0a] border-r border-white/5 flex-col justify-between p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]" />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-blue-500 font-bold text-2xl tracking-tighter mb-16">
                        <div className="p-2 bg-blue-500 rounded-lg text-black">
                            <Code size={24} />
                        </div>
                        OSPAT
                    </div>

                    <h2 className="text-5xl font-bold leading-tight tracking-tight mb-8">
                        Join the next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            generation
                        </span> of coders.
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="mt-1 p-2 h-fit bg-zinc-900 border border-white/10 rounded-lg text-blue-400">
                                <Zap size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-100">Fast Adjudication</h4>
                                <p className="text-sm text-zinc-500">Industry-leading judge execution speeds.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 p-2 h-fit bg-zinc-900 border border-white/10 rounded-lg text-emerald-400">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-100">Secure Vault</h4>
                                <p className="text-sm text-zinc-500">Bcryptjs encryption for your credentials.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 pt-10 border-t border-white/5 flex items-center gap-3 text-zinc-500 text-sm italic">
                    <Terminal size={16} />
                    Ready to push your limits, Sumit?
                </div>
            </div>

            {/* Right Section: The Signup Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 sm:p-20">
                <div className="w-full max-w-md space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Create OSPAT ID</h1>
                        <p className="text-zinc-500 text-sm">Join 10,000+ competitors worldwide.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">Username</label>
                            <input
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-700"
                                type="text"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                placeholder="ospat_coder"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">Email</label>
                            <input
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-700"
                                type="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder="sumit@tiwari.com"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-1">Password</label>
                            <input
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-700"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            onClick={onSignup}
                            disabled={buttonDisabled || loading}
                            className={`group relative w-full py-4 rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 
                                ${buttonDisabled || loading
                                    ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-[0.98]"}`}
                        >
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Deploying Profile...
                                    </>
                                ) : (
                                    <>
                                        Get Started
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </div>
                        </button>
                    </div>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-900"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#050505] px-4 text-zinc-600 tracking-widest">Connect with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center py-3 px-4 rounded-xl border border-zinc-800 hover:bg-white hover:text-black transition-all font-medium text-xs">
                            GitHub
                        </button>
                        <button className="flex items-center justify-center py-3 px-4 rounded-xl border border-zinc-800 hover:bg-white hover:text-black transition-all font-medium text-xs">
                            Google
                        </button>
                    </div>

                    <p className="text-center text-sm text-zinc-500 pt-6">
                        Already have an ID? <Link href="/login" className="text-blue-500 hover:text-blue-400 font-medium ml-1">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}