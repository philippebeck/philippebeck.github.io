import './card.scss'

/**
 * ? CARD COMPONENT
 * * Renders a card component with
 * * a content & a caption.
 *
 * @param {Object} props
 *  The properties for the Card component.
 *
 * @param {Object} props.content
 *  The main content of the card.
 *
 * @param {ReactNode} props.caption
 *  The caption of the card.
 *
 * @return {JSX.Element}
 *  The rendered card component.
 */
const Card = ({ content, caption }) => {
  return (

    <figure className="card">
      { content }

      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Card
