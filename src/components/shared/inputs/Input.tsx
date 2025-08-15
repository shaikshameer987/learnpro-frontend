import { forwardRef } from "react";

type InputProps = {
    name: string;
    type: string;
    value: any;
    error?: boolean;
    placeholder?: string;
    onChange: (name: string, value: any) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { name, type, value, error, placeholder, onChange } = props;

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(name, e.target.value);
    };

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            spellCheck={false}
            placeholder={placeholder}
            onChange={handleValueChange}
            className={`w-full border font-nunito font-semibold placeholder:font-medium text-[15px] text-black ${
                error ? "border-error" : "border-border"
            }  focus:outline-none focus:border-black p-[10px] rounded-[12px] bg-[#FAFAFA]`}
        />
    );
});

export default Input;
