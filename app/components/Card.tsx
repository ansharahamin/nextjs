type CardProps={
    title:String,
    content: String
}
const Card = ({title,content}:CardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Card
