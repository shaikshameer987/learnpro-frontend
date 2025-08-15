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

const SecondaryButton = (props: ButtonProps) => {
    const { text, leftIcon, rightIcon, onClick, disabled, loading, type, fullWidth } = props;

    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            style={{ width: fullWidth ? "100%" : "auto" }}
            className="flex items-center justify-center gap-[20px] bg-white text-black border-white border font-nunito font-bold rounded-[12px] text-[16px] py-[10px] px-[20px]"
        >
            {leftIcon && <Image src={leftIcon} alt="icon" width={16} height={16} />}
            {text}
            {rightIcon && <Image src={rightIcon} alt="icon" width={16} height={16} />}
        </button>
    );
};

export default SecondaryButton;
