import { nav } from '../../../assets/data.json'

import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'
import List from '../../atoms/list/list'

import './navbar.scss'

/**
 * ? NAVBAR MOLECULE
 * * Renders the Navbar Molecule
 * * that displays the navigation links
 *
 * @return {JSX.Element}
 *  The rendered Navbar Molecule.
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

      <List
        array={links.map((item) =>

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
        )}
      />

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