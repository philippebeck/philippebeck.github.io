import {Icon, Link } from 'reactoms'
import './button.scss'

/**
 *  ? BUTTON MOLECULE
 * * Renders the Button Molecule that displays a Link with an Icon.
 *
 * @param {Object} props - The Properties of the Button Molecule.
 * @param {Object} props.link - The Link object.
 * @param {string} props.link.url - The URL of the Link.
 * @param {string} props.link.label - The Label of the Link.
 * @param {string} props.link.text - The Text of the Link.
 * @param {Object} props.link.icon - The Icon object.
 * @param {string} props.link.icon.cat - The Icon Category of the Link.
 * @param {string} props.link.icon.name - The Icon Name of the Link.
 * @param {string} props.link.icon.option - The Icon Option of the Link.
 *
 * @return {JSX.Element} - The rendered Button Molecule.
 */
const Button = ({ link }) => {
  const { url, label, text, icon } = link;
  const { cat, name, option } = icon;

  return (
    <Link
      url={url}
      label={label}
      design="link button"
      content={

        <>
          <Icon
            name={name}
            cat={cat}
            option={option}
            isHidden="false"
          />
          {text && <b>{text}</b>}
        </>
      }
    />
  )
}

export default Button
