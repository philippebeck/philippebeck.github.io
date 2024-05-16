import './link.css'

const Link = ({url, content, label="", design=''}) => {
  const isExternalLink = url.startsWith('https');

  return (
    isExternalLink
    ?
    <a
      href={url}
      className={design}
      aria-label={label}
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </a>
    :
    <a href={url} className={design} aria-label={label}>{content}</a>
  )
}

export default Link
