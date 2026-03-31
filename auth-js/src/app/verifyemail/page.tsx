"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { CheckCircle2, XCircle, Loader2, MailCheck } from "lucide-react"; // npm install lucide-react

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const verifyUserEmail = useCallback(async () => {
        try {
            setLoading(true);
            await axios.post('/api/users/verifyemail', { token });
            setVerified(true);
            setError(false);
        } catch (err: any) {
            setError(true);
            console.error("Verification error:", err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        // More robust way to get the token
        const urlParams = new URLSearchParams(window.location.search);
        const urlToken = urlParams.get("token");
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token, verifyUserEmail]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white px-6">
            <div className="w-full max-w-md bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl text-center">

                {/* Header Icon */}
                <div className="inline-flex p-4 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-6 text-blue-500">
                    <MailCheck size={40} />
                </div>

                <h1 className="text-3xl font-bold tracking-tight mb-2">Account Verification</h1>
                <p className="text-zinc-500 text-sm mb-8">
                    {token ? "Finalizing your OSPAT registration..." : "Waiting for verification token..."}
                </p>

                {/* Progress State */}
                {loading && (
                    <div className="flex flex-col items-center gap-4 py-4">
                        <Loader2 className="animate-spin text-blue-500" size={32} />
                        <p className="text-sm font-mono text-zinc-400">Validating credentials...</p>
                    </div>
                )}

                {/* Success State */}
                {verified && (
                    <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                        <div className="flex flex-col items-center gap-2 text-emerald-500">
                            <CheckCircle2 size={48} />
                            <h2 className="text-xl font-semibold">Email Verified!</h2>
                        </div>
                        <p className="text-zinc-400 text-sm">
                            Your OSPAT account is now active. You are ready to compete.
                        </p>
                        <Link
                            href="/login"
                            className="block w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20"
                        >
                            Go to Login
                        </Link>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="flex flex-col items-center gap-2 text-red-500">
                            <XCircle size={48} />
                            <h2 className="text-xl font-semibold">Verification Failed</h2>
                        </div>
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <p className="text-xs text-red-400 font-mono break-all">
                                Invalid or expired token: {token || "Missing"}
                            </p>
                        </div>
                        <Link
                            href="/signup"
                            className="block w-full py-4 bg-zinc-900 border border-white/10 hover:bg-zinc-800 rounded-2xl font-bold text-sm transition-all"
                        >
                            Try Signing Up Again
                        </Link>
                    </div>
                )}

                {/* Token Display (Subtle) */}
                {!verified && !error && !loading && !token && (
                    <div className="mt-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs">
                        No token found in URL. Please check your email link.
                    </div>
                )}
            </div>

            <footer className="mt-8 text-zinc-600 text-xs font-mono">
                OSPAT IDENTITY SYSTEM v1.0
            </footer>
        </div>
    );
}