import { forwardRef, useState } from "react";
import Image from "next/image";
import eyeVisible from "@/../public/icons/eye-visible.png";
import eyeInVisible from "@/../public/icons/eye-invisible.png";

type InputProps = {
    name: string;
    value: any;
    error?: boolean;
    placeholder?: string;
    onChange: (name: string, value: any) => void;
};

const Password = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { name, value, error, placeholder, onChange } = props;
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(name, e.target.value);
    };

    return (
        <div className="w-full relative">
            <input
                ref={ref}
                type={showPassword ? "text" : "password"}
                name={name}
                value={value}
                spellCheck={false}
                placeholder={placeholder}
                onChange={handleValueChange}
                autoComplete="off"
                className={`w-full border font-nunito font-semibold placeholder:font-medium text-[15px] text-black ${
                    error ? "border-error" : "border-border"
                }  focus:outline-none focus:border-black p-[10px] pr-[35px] rounded-[12px] bg-[#FAFAFA]`}
            />
            <button
                onClick={() => {
                    setShowPassword(!showPassword);
                }}
            >
                <Image
                    width={14}
                    height={10}
                    src={showPassword ? eyeInVisible : eyeVisible}
                    alt="icon"
                    className="absolute right-[10px] top-[50%] translate-y-[-50%]"
                />
            </button>
        </div>
    );
});

export default Password;
