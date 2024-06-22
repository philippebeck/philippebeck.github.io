import './link.scss'

/**
 * ? LINK ATOM
 * * Renders the Link Atom
 * * with the specified URL,
 * * content, title, label & design.
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
 * @param {string} [props.design=""]
 *  The optional Design Class of the Link.
 *
 * @param {string} [props.label=""]
 *  The optional Label of the Link.
 *
 * @param {string} [props.title=""]
 *  The optional Title of the Link.
 *
 * @return {JSX.Element}
 *  The rendered Link Atom.
 */
const Link = ({content, url, design="", label="", title=""}) => {
  const isExternalLink = url.startsWith('https');

  return (
    isExternalLink
    ?
    <a
      href={url}
      className={design}
      aria-label={label}
      title={title}
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </a>
    :
    <a 
      href={url} 
      className={design} 
      aria-label={label}
      title={title}
    >
      {content}
    </a>
  )
}

export default Link
