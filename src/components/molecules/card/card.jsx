import Image from '../../atoms/image/image'

import './card.scss'

/**
 * ? CARD COMPONENT
 * * Renders a card component with
 * * an image & a caption.
 *
 * @param {Object} props
 *  The properties for the Card component.
 *
 * @param {Object} props.image
 *  The image object of the card.
 * @param {string} props.image.url
 *  The URL of the image.
 * @param {string} props.image.alt
 *  The alternative text for the image.
 *
 * @param {ReactNode} props.caption
 *  The caption of the image.
 *
 * @return {JSX.Element}
 *  The rendered card component.
 */
const Card = ({ image, caption }) => {
  return (

    <figure className="card">
      <Image url={image.url} alt={image.alt} />

      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Card
