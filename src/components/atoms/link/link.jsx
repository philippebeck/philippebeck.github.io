import './link.scss'

/**
 * ? LINK ATOM
 * * Renders the Link Atom
 * * with the specified URL,
 * * content, design & optional Label.
 *
 * @param {Object} props
 *  The Properties for the Link Atom.
 *
 * @param {HTMLElement|string} props.content
 *  The Content of the Link.
 *
 * @param {string} props.url
 *  The URL of the Link.
 *
 * @param {string} [props.design="link"]
 *  The Design Class of the Link.
 *  Defaults to "link".
 *
 * @param {string} [props.label=""]
 *  The optional Label of the Link.
 *  Defaults to an empty string.
 *
 * @return {JSX.Element}
 *  The rendered Link Atom.
 */
const Link = ({ content, url, design = "link", label = "" }) => {
  const isExternalLink = url.startsWith('https');

  return (
    <a
      className={`${design}`}
      href={url}
      {...(label ? { 'aria-label': label } : {})}
      {...(label ? { 'title': label } : {})}
      {...(isExternalLink ? { 'rel': 'noopener noreferrer' } : {})}
      {...(isExternalLink ? { 'target': '_blank' } : {})}
    >
      {content}
    </a>
  )
}

export default Link
