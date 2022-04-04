import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    customMaxWidth?: string;
};

export default function Container({ children, customMaxWidth }: ContainerProps) {
    return (
        <div className={`w-full mx-auto flex flex-col justify-center text-center px-4 ${customMaxWidth || "max-w-xl"}`}>
            {children}
        </div>
    );
}
