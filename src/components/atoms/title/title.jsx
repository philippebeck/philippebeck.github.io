import "./title.scss"

/**
 * ? TITLE COMPONENT
 * * Renders a title component with the specified
 * * heading, prefix & subtitle.
 *
 * @param {Object} props
 *  The properties for the Title component.
 *
 * @param {Object} props.heading
 *  The heading object of the title.
 * @param {string} props.heading.level
 *  The level of the heading.
 * @param {string} props.heading.text
 *  The text of the heading.
 *
 * @param {any} [props.prefix=""]
 *  The prefix of the title.
 * @param {any} [props.subtitle=""]
 *  The subtitle of the title.
 *
 * @return {JSX.Element}
 *  The rendered title component.
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
