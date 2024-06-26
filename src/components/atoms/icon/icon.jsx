import './icon.scss'

/**
 * ? ICON ATOM
 * * Renders the Icon Atom
 * * with the specified Name, 
 * * Category, Option, Visibility & Event.
 *
 * @param {Object} props
 *  The Properties for the Icon Atom.
 *
 * @param {string} props.name
 *  The Name of the Icon.
 *
 * @param {string} [props.cat="brands"]
 *  The Category of the Icon.
 *  Defaults to "brands".
 *
 * @param {string} [props.option="2x"]
 *  The Option of the Icon.
 *  Defaults to size "2x".
 *
 * @param {boolean} [props.isHidden=true]
 *  Whether the Icon is aria-hidden or not.
 *  Defaults to true.
 *
 * @return {JSX.Element}
 *  The rendered Icon Atom.
 */
const Icon = ({ name, cat = "brands", option = "2x", isHidden = true }) => {

  return (
    <i
      className={`fa-${cat} fa-${name} fa-${option} fa-fw`}
      aria-hidden={isHidden}
    ></i>
  )
}

export default Icon
