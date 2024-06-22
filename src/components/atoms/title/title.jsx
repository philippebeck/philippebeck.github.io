import "./title.scss"

/**
 * ? TITLE ATOM
 * * Renders the Title Atom
 * * with the specified heading,
 * * an optional prefix &
 * * an optional subtitle.
 *
 * @param {Object} props
 *  The Properties for the Title Atom.
 *
 * @param {Object} props.heading
 *  The Heading object of the Title.
 *
 * @param {string} props.heading.level
 *  The Level of the Title.
 *
 * @param {string} props.heading.text
 *  The Text of the Title.
 *
 * @param {any} [props.prefix=""]
 *  The optional Prefix of the Title.
 *  Defaults to an empty string.
 *
 * @param {any} [props.subtitle=""]
 *  The optional Subtitle of the Title.
 *  Defaults to an empty string.
 *
 * @return {JSX.Element}
 *  The rendered Title Atom.
 */
const Title = ({ heading, prefix="", subtitle="" }) => {
  return (

    <hgroup>
      {
        prefix && <p>{prefix}</p>
      }
      {
        heading.level === "1" ? <h1>{heading.text}</h1> :
        heading.level === "2" ? <h2>{heading.text}</h2> :
        <h3>{heading.text}</h3>
      }
      {
        subtitle && <p>{subtitle}</p>
      }
    </hgroup>
  )
}

export default Title
