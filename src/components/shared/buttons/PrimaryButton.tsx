import Image from "next/image";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    text: string;
    leftIcon?: any;
    rightIcon?: any;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
};

const PrimaryButton = (props: ButtonProps) => {
    const { text, leftIcon, rightIcon, onClick, disabled, loading, type } = props;

    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            className="flex items-center justify-center gap-[20px] bg-black border-black text-white font-nunito font-bold rounded-[12px] text-[16px] py-[10px] px-[20px]"
        >
            {leftIcon && <Image src={leftIcon} alt="icon" width={16} height={16} />}
            {text}
            {rightIcon && <Image src={rightIcon} alt="icon" width={16} height={16} />}
        </button>
    );
};

export default PrimaryButton;
