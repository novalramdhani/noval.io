import type { CardProps } from "@/types/CardProps";

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
                    <a href={previewUrl} className="btn btn-sm btn-primary">
                        Live Preview
                    </a>
                    <a href={sourceCodeUrl} className="btn btn-sm text-white">
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}
