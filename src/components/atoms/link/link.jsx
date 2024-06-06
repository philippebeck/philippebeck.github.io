import './link.scss'

/**
 * ? LINK COMPONENT
 * * Renders a link component with the specified
 * * URL, content, title, label & design.
 *
 * @param {Object} props
 *  The properties for the Link component.
 *
 * @param {ReactNode} props.content
 *  The content of the link.
 *
 * @param {string} props.url
 *  The URL of the link.
 *
 * @param {string} [props.design=""]
 *  The design class for the link.
 *
 * @param {string} [props.label=""]
 *  The label for the link.
 *
 * @param {string} [props.title=""]
 *  The title of the link.
 *
 * @return {JSX.Element}
 *  The rendered link component.
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
