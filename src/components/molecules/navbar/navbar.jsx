import { nav } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'

import './navbar.scss'

/**
 * ? NAVBAR COMPONENT
 * * Renders the Navbar component.
 *
 * @return {JSX.Element}
 *  The rendered Navbar component.
 */
const Navbar = () => {
  const { logo, links, contact } = nav;

  return (
    <nav className="navbar">

      <Link
        url={logo.url}
        label={logo.text}
        content={
          <Icon 
            name={logo.icon.name}
            cat={logo.icon.cat}
            isHidden="false"
          />
        }
      />

      <ul>
        { links.map((item, index) =>
          <li key={index}>

            <Link
              url={item.url}
              label={item.text}
              content={
                <>
                  <Icon 
                    cat={item.icon.cat}
                    name={item.icon.name}
                    isHidden="false"
                  />
                  <b>{item.text}</b>
                </>
              }
            />
          </li>
        )}
      </ul>

      <Link
        url={contact.url}
        label={contact.text}
        content={
          <Icon 
            name={contact.icon.name}
            cat={contact.icon.cat}
            isHidden="false"
          />
        }
      />
    </nav>
  )
}

export default Navbar
