import './link.scss'

/**
 * ? LINK ATOM
 * * Renders the Link Atom with the content,
 * * the URL, a Design class, a Label & a Title.
 *
 * @param {Object} props - The Properties for the Link Atom.
 * @param {HTMLElement|string} props.content - The Content of the Link.
 * @param {string} props.url - The URL of the Link.
 * @param {string} [props.design="link"] - The Design Class of the Link.
 * @param {string} [props.label=""] - The Label of the Link.
 * @param {string} [props.title=""] - The Title of the Link.
 *
 * @return {JSX.Element} - The rendered Link Atom.
 */
const Link = ({ content, url, design = "link", label = "", title = "" }) => {
  const isExternal = url.startsWith('https');

  return (
    <a
      className={`${design}`}
      href={url}
      {...(label ? { 'aria-label': label } : {})}
      {...(title ? { 'title': title } : {})}
      {...(isExternal ? { 'rel': 'noopener noreferrer' } : {})}
      {...(isExternal ? { 'target': '_blank' } : {})}
    >
      {content}
    </a>
  )
}

export default Link
