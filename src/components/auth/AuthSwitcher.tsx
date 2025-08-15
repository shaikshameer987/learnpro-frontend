import { AuthMode } from "@/types/auth";
import SecondaryButton from "../shared/buttons/SecondaryButton";
import { useRouter } from "next/navigation";

type Props = {
    mode: AuthMode;
    setMode: React.Dispatch<React.SetStateAction<AuthMode>>;
};

const AuthSwitcher = (props: Props) => {
    const { mode, setMode } = props;
    const router = useRouter();

    const handleSignInSwitch = () => {
        setMode("login");
        router.push(`/auth?mode=login`);
    };

    const handleSignUpSwitch = () => {
        setMode("signup");
        router.push(`/auth?mode=signup`);
    };

    return (
        <div
            id="copy-container"
            className={`absolute flex top-[0vw] left-[0vw] overflow-hidden transition-all duration-700 ease-in-out ${
                mode === "signup" ? "translate-x-[100%]" : "translate-x-[0%]"
            } w-[50%] h-full bg-black rounded-[50px]`}
        >
            <div
                className={`min-w-full h-full transition-all duration-700 ease-in-out ${
                    mode === "signup" ? "translate-x-[0%]" : "translate-x-[-100%]"
                } flex flex-col items-center justify-center p-[50px]`}
            >
                <h1 className="font-roboto font-bold text-[40px] text-white mb-[40px]">
                    Welcome, User
                </h1>
                <p className="font-nunito font-medium text-[16px] text-white mb-[30px]">
                    If you already have an account
                </p>
                <div className="w-full px-[40px]">
                    <SecondaryButton text="SignIn" fullWidth={true} onClick={handleSignInSwitch} />
                </div>
            </div>
            <div
                className={`min-w-full h-full  transition-all duration-700 ease-in-out ${
                    mode === "signup" ? "translate-x-[0%]" : "translate-x-[-100%]"
                } flex flex-col items-center justify-center p-[50px]`}
            >
                <h1 className="font-roboto font-bold text-[40px] text-white mb-[40px]">
                    Hello, User
                </h1>
                <p className="font-nunito font-medium text-[16px] text-white mb-[30px]">
                    If you don't have an account
                </p>
                <div className="w-full px-[40px]">
                    <SecondaryButton text="SignUp" fullWidth={true} onClick={handleSignUpSwitch} />
                </div>
            </div>
        </div>
    );
};

export default AuthSwitcher;
