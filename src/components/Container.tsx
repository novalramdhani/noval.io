type ContainerProps = {
    children: any
}

export default function Container({children}: ContainerProps) {
    return (
        <div className="max-w-xl mx-auto flex flex-col justify-center text-center px-4">
            {children}
        </div>
    );
}