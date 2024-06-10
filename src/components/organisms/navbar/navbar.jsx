import { nav } from '../../../assets/data.json'
import logo from '../../../assets/logo.webp'

import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
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
        url="#intro"
        label="Logo"
        content={<Image url={logo} alt="Logo" />}
      />

      <ul>
        { nav.map((item, index) =>
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
                    option="2x"
                  />
                  <b>{item.text}</b>
                </>
              }
            />
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
