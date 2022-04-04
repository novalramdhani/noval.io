type CardProps = {
    title: string;
    description?: string;
    previewUrl?: string;
    sourceCodeUrl?: string;
};

export default function Card({
    title,
    description,
    previewUrl,
    sourceCodeUrl,
}: CardProps) {
    return (
        <div className="card custom-card-width bg-white shadow-xl text-black">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-left">{description}</p>
                <div className="card-actions justify-end mt-5">
                    <a href={previewUrl} className="btn btn-primary">
                        Live Preview
                    </a>
                    <a href={sourceCodeUrl} className="btn text-white">
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}
