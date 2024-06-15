import { content, nav } from '../../../assets/data.json'
import logo from '../../../assets/logo.webp'

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

  return (

    <nav id="navbar">
      <Link
        url={nav.logo.url}
        label={nav.logo.text}
        content={
          <Icon 
            name={nav.logo.iconName}
            cat={nav.logo.iconCat}
          />
        }
      />

      <ul>
        { nav.links.map((item, index) =>
          <li key={index}>

            <Link
              url={item.url}
              label={item.text}
              content={

                <>
                  <Icon 
                    cat={item.iconCat}
                    isHidden="false"
                    name={item.iconName}
                  />
                  <b>{item.text}</b>
                </>
              }
            />
          </li>
        )}
      </ul>

      <Link
        url={nav.contact.url}
        label={nav.contact.text}
        content={
          <Icon 
            name={nav.contact.iconName}
            cat={nav.contact.iconCat}
          />
        }
      />
    </nav>
  )
}

export default Navbar
