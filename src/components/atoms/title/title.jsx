import "./title.scss"

/**
 * ? TITLE ATOM
 * * Renders the Title Atom with the specified heading,
 * * a level, an prefix & an subtitle.
 *
 * @param {Object} props - The Properties for the Title Atom.
 * @param {string} props.heading - The text of the Title.
 * @param {number} [props.level=4] - The Level of the Title.
 * @param {any} [props.prefix=""] - The Prefix of the Title.
 * @param {any} [props.subtitle=""] - The Subtitle of the Title.
 *
 * @return {JSX.Element} - The rendered Title Atom.
 */
const Title = ({ heading, level = 4, prefix = "", subtitle = "" }) => {
  level = parseInt(level);
  if (level < 1 || level > 3) level = 4;
  const HeadingLevel = `h${level}`;

  return (
    <hgroup className="title">
      {prefix && <p>{prefix}</p>}
      <HeadingLevel>{heading}</HeadingLevel>
      {subtitle && <p>{subtitle}</p>}
    </hgroup>
  )
}

export default Title
