type CardProps = {
    title: string,
    description?: string
    previewUrl?: string
    sourceCodeUrl?: string
}

export default function Card(
  {title, description, previewUrl, sourceCodeUrl}: CardProps
) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5 text-black">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-left">{description}</p>
            <div className="card-actions justify-end mt-5">
                <a href={previewUrl} className="btn btn-primary">Live Preview</a>
                <a href={sourceCodeUrl} className="btn">Source Code</a>
            </div>
        </div>
    </div>
  )
}