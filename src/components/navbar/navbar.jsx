import { List } from 'reactoms'
import { nav } from '../../assets/data.json'
import Button from '../button/button'
import './navbar.scss'

/**
 * ? NAVBAR ORGANISMS
 * * Renders the Navbar Organisms that displays the navigation links
 *
 * @return {JSX.Element} - The rendered Navbar Organisms.
 */
const Navbar = () => {

  return (
    <nav className="navbar">
      <List
        array={nav.map((item) =>
          <Button link={item} />
        )}
      />
    </nav>
  )
}

export default Navbar
