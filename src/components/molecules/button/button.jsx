import Link from '../../atoms/link/link'
import Icon from '../../atoms/icon/icon'

import './button.scss'

/**
 *  ? BUTTON MOLECULE
 * * Renders the Button Molecule
 * * that displays a link with an icon.
 *
 * @param {Object} props
 *  The properties object.
 *
 * @param {Object} props.link
 *  The link object.
 *
 * @param {string} props.link.url
 *  The URL of the link.
 * @param {string} props.link.text
 *  The text of the link.
 * @param {Object} props.link.icon
 *  The icon object.
 *
 * @param {string} props.link.icon.name
 *  The name of the icon.
 * @param {string} props.link.icon.cat
 *  The category of the icon.
 * @param {string} props.link.icon.option
 *  The option of the icon.
 *
 * @return {JSX.Element}
 *  The rendered Button component.
 */
const Button = ({ link }) => {
  const { url, label, icon, text } = link;
  const { name, cat, option } = icon;

  return (
    <Link
      url={url}
      label={label}
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
