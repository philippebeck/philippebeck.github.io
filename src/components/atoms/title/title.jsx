import "./title.scss"

/**
 * ? TITLE ATOM
 * * Renders the Title Atom
 * * with the specified heading,
 * * level, an optional prefix &
 * * an optional subtitle.
 *
 * @param {Object} props
 *  The Properties for the Title Atom.
 *
 * @param {string} props.heading
 *  The text of the Title.
 *
 * @param {number} [props.level=4]
 *  The Level of the Title.
 *  Defaults to 4.
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
