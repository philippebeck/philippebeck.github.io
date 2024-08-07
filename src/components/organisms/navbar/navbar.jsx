import { nav } from '../../../assets/data.json'
import Button from '../../molecules/button/button'
import List from '../../atoms/list/list'
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
