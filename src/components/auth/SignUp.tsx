"use client";

import { useState } from "react";
import { AuthMode, SignUpForm } from "@/types/auth";
import Input from "@/components/shared/inputs/Input";
import Password from "../shared/inputs/Password";
import PrimaryButton from "../shared/buttons/PrimaryButton";

type SignUpProps = {
    mode: AuthMode;
};

const SignUp = (props: SignUpProps) => {
    const { mode } = props;

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
            className={`w-full h-full transition-all duration-700 ease-in-out ${
                mode === "login" ? "translate-x-[100%]" : "translate-x-[0%] z-[100]"
            } flex flex-col items-center justify-center p-[40px]`}
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
                <div className="relative">
                    <Password
                        name="password"
                        placeholder="Password"
                        value={formDetails.password}
                        onChange={handleValueChange}
                    />
                </div>
                <PrimaryButton type="submit" text="Sign Up" />
            </div>
        </form>
    );
};

export default SignUp;
