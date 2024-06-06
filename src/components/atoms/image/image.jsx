import './image.scss'

/**
 * ? IMAGE COMPONENT
 * * Renders an image component with the specified
 * * URL & alternative text.
 *
 * @param {Object} props
 *  The properties for the Image component.
 *
 * @param {string} props.url
 *  The URL of the image.
 *
 * @param {string} props.alt
 *  The alternative text for the image.
 * 
 * @return {JSX.Element}
 *  The rendered image component.
 */
const Image = ({ url, alt }) => {

  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
    />
  )
}

export default Image
