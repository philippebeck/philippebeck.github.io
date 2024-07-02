import { header } from '../../../assets/data.json'
import Heading from '../../molecules/heading/heading'
import List from '../../atoms/list/list'
import './header.scss'

/**
 * ? HEADER ORGANISMS
 * * Renders the Header Organisms that displays the main information
 *
 * @return {JSX.Element} - The rendered Header Organisms.
 */
const Header = () => {
  const { title, data } = header;

  return (
    <header id="header">
      <Heading title={title} />

      <List
        array={data.map((item) =>
          <>{item}</>
        )}
      />
    </header>
  )
}

export default Header
