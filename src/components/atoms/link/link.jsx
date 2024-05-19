import './link.css'

const Link = ({url, content, title, label='', design=''}) => {
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
