"use client";

import { useState } from "react";
import { SignUpForm } from "@/types/auth";
import Input from "@/components/shared/inputs/Input";
import PrimaryButton from "../shared/buttons/PrimaryButton";

const SignUp = () => {
    const [formDetails, setFormDetails] = useState<SignUpForm>({
        name: "",
        email: "",
        password: "",
    });

    const handleValueChange = (name: string, value: any) => {
        setFormDetails({ ...formDetails, [name]: value });
    };

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSignUp}
            className="w-full h-full flex flex-col items-center justify-center p-[40px]"
        >
            <h1 className="font-roboto font-bold text-[40px] text-[#212121] mb-[20px]">Sign Up</h1>
            <div className="w-full flex flex-col gap-[20px]">
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formDetails.name}
                    onChange={handleValueChange}
                />
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
                <PrimaryButton type="submit" text="Sign Up" />
            </div>
        </form>
    );
};

export default SignUp;
