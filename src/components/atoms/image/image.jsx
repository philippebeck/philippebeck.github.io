import './image.css'

const Image = ({ url, alt }) => {

  return (
    <img src={url} alt={alt} loading="lazy" />
  )
}

export default Image
