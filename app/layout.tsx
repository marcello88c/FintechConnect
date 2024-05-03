import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "FintechConnect",
    description: "FintechConnect - Financial Company Website",
    icons: {
        icon: "./favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="description"
                    content="FintechConnect - Financial Website"
                />
                <meta
                    name="product-name"
                    content="FintechConnect - Financial Website"
                />
            </head>
            <body
                className={`${inter.variable} font-sans bg-color-1 text-base font-medium text-color-2 antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
