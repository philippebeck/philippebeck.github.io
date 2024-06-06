import Image from '../../atoms/image/image'

import './card.scss'

/**
 * ? CARD COMPONENT
 * * Renders a card component with
 * * an image & a legend.
 *
 * @param {Object} props
 *  The properties for the Card component.
 *
 * @param {string} props.url
 *  The URL of the image.
 *
 * @param {string} props.alt
 *  The alternative text for the image.
 *
 * @param {ReactNode} props.content
 *  The content of the caption.
 *
 * @return {JSX.Element}
 *  The rendered card component.
 */
const Card = ({ url, alt, content }) => {
  return (

    <figure className="card">
      <Image url={url} alt={alt} />

      <figcaption>{content}</figcaption>
    </figure>
  )
}

export default Card
