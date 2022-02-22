type CardProps = {
    link?: string,
    title: string,
    description?: string
}

export default function Card({link, title, description}: CardProps) {
  return (
    <div>Card</div>
  )
}