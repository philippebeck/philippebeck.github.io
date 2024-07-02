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
  const { logo, links, contact } = nav;

  return (
    <nav className="navbar">
      <Button link={logo} />

      <List
        array={links.map((item) =>
          <Button link={item} />
        )}
      />

      <Button link={contact} />
    </nav>
  )
}

export default Navbar
