"use client";

import { useState } from "react";
import { SignInForm } from "@/types/auth";
import Input from "@/components/shared/inputs/Input";
import PrimaryButton from "../shared/buttons/PrimaryButton";

const SignIn = () => {
    const [formDetails, setFormDetails] = useState<SignInForm>({
        email: "",
        password: "",
    });

    const handleValueChange = (name: string, value: any) => {
        setFormDetails({ ...formDetails, [name]: value });
    };

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSignIn}
            className="w-full h-full flex flex-col items-center justify-center p-[40px]"
        >
            <h1 className="font-roboto font-bold text-[40px] text-[#212121] mb-[20px]">Sign In</h1>
            <div className="w-full flex flex-col gap-[20px]">
                <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formDetails.email}
                    onChange={handleValueChange}
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={formDetails.password}
                    onChange={handleValueChange}
                />
                <PrimaryButton type="submit" text="Sign In" />
            </div>
        </form>
    );
};

export default SignIn;
