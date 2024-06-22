import './card.scss'

/**
 * ? CARD ATOM
 * * Renders the Card Atom
 * * with a Content & an optional Caption.
 *
 * @param {Object} props
 *  The Properties for the Card Atom.
 *
 * @param {HTMLElement} props.content
 *  The main Content of the Card.
 *
 * @param {HTMLElement|string} [props.caption=""]
 *  The optional Caption of the Card.
 *
 * @return {JSX.Element}
 *  The rendered Card Atom.
 */
const Card = ({ content, caption = "" }) => {

  return (
    <figure className="card">
      {content}
      {
        caption && <figcaption>{caption}</figcaption>
      }
    </figure>
  )
}

export default Card
