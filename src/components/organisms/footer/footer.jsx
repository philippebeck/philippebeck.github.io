import { footer } from '../../../assets/data.json'
import Button from '../../molecules/button/button'
import List from '../../atoms/list/list'
import './footer.scss'

/**
 * ? FOOTER ORGANISMS
 * * Renders the Footer Organisms that displays a list of social links
 *
 * @return {JSX.Element} - The rendered Footer Organisms.
 */
const Footer = () => {

  return (
    <footer className="footer">
      <List
        array={footer.map((item) =>
          <Button link={item} />
        )}
      />
    </footer>
  )
}

export default Footer
