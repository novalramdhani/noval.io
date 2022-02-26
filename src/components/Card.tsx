import Badge from "./Badge";

type CardProps = {
    link?: string,
    title: string,
    description?: string
    status?: string
    source?: string
}

export default function Card(
  {link, title, description, status, source}: CardProps
) {
  return (
    <a href={link} rel="noreferrer" target="_blank" className="flex flex-col mt-5 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 items-center leading-normal">
          <Badge status={status}/>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <a href={source} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Source Code 
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
    </a>
  )
}