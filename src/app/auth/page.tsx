"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthMode } from "@/types/auth";
import SignUp from "@/components/auth/SignUp";
import SignIn from "@/components/auth/SignIn";
import AuthSwitcher from "@/components/auth/AuthSwitcher";

const Authentication = () => {
    const searchParams = useSearchParams();
    const urlMode = searchParams.get("mode");
    const initialMode = urlMode === "signup" || urlMode === "login" ? urlMode : "login";

    const [mode, setMode] = useState<AuthMode>(initialMode);

    useEffect(() => {
        const currentMode = searchParams.get("mode");
        if (currentMode === "login" || currentMode === "signup") setMode(currentMode);
        else setMode("login");
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
            <div className="w-[800px] h-[450px] flex relative bg-white rounded-[50px] overflow-hidden shadow-[5px_5px_10px_1px_rgba(0,0,0,0.1)]">
                <div className="w-[50%] overflow-hidden flex h-full rounded-[50px]">
                    <SignUp />
                </div>
                <div className="w-[50%] overflow-hidden flex h-full rounded-[50px]">
                    <SignIn />
                </div>
                <AuthSwitcher mode={mode} setMode={setMode} />
            </div>
        </div>
    );
};

export default Authentication;
