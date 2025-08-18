"use client";

import { Space_Grotesk, Nunito_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Authenticator from "@/components/shared/Authenticator";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sgrotesk" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable} ${nunito.variable} ${roboto.variable}`}>
                <Provider store={store}>
                    <Authenticator />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
