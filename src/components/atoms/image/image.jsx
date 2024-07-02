import './image.scss'

/**
 * ? IMAGE ATOM
 * * Renders the Image Atom with the specified URL & the alternative text.
 *
 * @param {Object} props - The Properties for the Image Atom.
 * @param {string} props.url - The URL of the Image.
 * @param {string} props.alt - The Alternative Text for the Image.
 * 
 * @return {JSX.Element} - The rendered Image Atom.
 */
const Image = ({ url, alt }) => {

  return (
    <img
      className="image"
      src={url}
      alt={alt}
      loading="lazy"
    />
  )
}

export default Image
