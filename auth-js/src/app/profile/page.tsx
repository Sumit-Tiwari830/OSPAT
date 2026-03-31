"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { User, LogOut, Shield, Zap, Trophy, LayoutDashboard, Loader2 } from "lucide-react";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Securely logged out');
            router.push('/login');
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    const getUserDetails = async () => {
        try {
            setLoading(true);
            const res = await axios.get('/api/users/me');
            setData(res.data.data);
            toast.success("Profile synchronized");
        } catch (error: any) {
            toast.error("Failed to fetch user data");
        } finally {
            setLoading(false);
        }
    };

    // Auto-fetch details on load for better UX
    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white p-4 sm:p-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header Section */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                            <LayoutDashboard size={24} />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">User Dashboard</h1>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-all border border-red-500/20 text-sm font-medium"
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Left Column: Profile Card */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                            <div className="inline-flex p-4 rounded-full bg-zinc-900 border border-white/10 mb-4 shadow-2xl">
                                <User size={48} className="text-zinc-400" />
                            </div>

                            <h2 className="text-xl font-bold">{data?.username || "Competitor"}</h2>
                            <p className="text-zinc-500 text-sm mb-6">{data?.email || "syncing..."}</p>

                            {data ? (
                                <Link
                                    href={`/profile/${data._id}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-zinc-200 transition-all"
                                >
                                    <Shield size={14} /> Public OSPAT ID: {data._id.substring(0, 8)}...
                                </Link>
                            ) : (
                                <div className="text-xs text-zinc-700 italic">No User ID Linked</div>
                            )}
                        </div>

                        <button
                            onClick={getUserDetails}
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/5 rounded-2xl text-sm font-semibold transition-all active:scale-95"
                        >
                            {loading ? <Loader2 className="animate-spin" size={18} /> : <Zap size={18} className="text-yellow-500" />}
                            Sync Data
                        </button>
                    </div>

                    {/* Right Column: Platform Stats (OSPAT Specific) */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl">
                                <Trophy className="text-blue-500 mb-3" size={20} />
                                <div className="text-2xl font-bold italic">1500</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Rating</div>
                            </div>
                            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl">
                                <Code className="text-emerald-500 mb-3" size={20} />
                                <div className="text-2xl font-bold italic">42</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Problems Solved</div>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Recent Activity</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-black/50 border border-white/5 rounded-2xl">
                                    <span className="text-sm font-medium">Round #42: Division 2</span>
                                    <span className="text-xs text-blue-400 font-mono">+15 Rating</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/50 border border-white/5 rounded-2xl">
                                    <span className="text-sm font-medium">Problem: Graph Theory Q1</span>
                                    <span className="text-xs text-emerald-400 font-mono">Accepted</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}