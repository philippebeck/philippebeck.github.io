import { List, Title } from 'reactoms'
import { header } from '../../assets/data.json'
import './header.scss'

/**
 * ? HEADER COMPONENT
 * * Renders the Header Component that displays the main information
 *
 * @return {JSX.Element} - The rendered Header Component.
 */
const Header = () => {
  const { title, data } = header;

  return (
    <header id="home">
      <Title
        txt={title.txt}
        lvl={title.lvl}
        sub={title.sub}
        ico={title.ico}
      />

      <List
        array={data.map((item) =>
          <>{item}</>
        )}
      />
    </header>
  )
}

export default Header
