type CardProps = {
    link?: string,
    title: string,
    description?: string
}

export default function Card({link, title, description}: CardProps) {
  return (
    <a href={link} rel="noreferrer" target="_blank" className="flex flex-col mt-5 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
    </a>
  )
}