import React from "react";

type LayoutProps = {
    children: React.ReactChild;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="w-full antialiased font-sans min-h-screen tracking-tighter bg-gray-900 text-white flex justify-center items-center">
            {children}
        </div>
    );
}
