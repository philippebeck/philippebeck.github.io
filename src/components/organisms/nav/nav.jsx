import { nav } from '../../../assets/data.json'
import logo from '../../../assets/logo.webp'
import Icon from '../../atoms/icon/icon'
import Image from '../../atoms/image/image'
import Link from '../../atoms/link/link'
import './nav.css'

const Nav = () => {

  return (
    <nav id="nav">
      <ul>
        { nav.out.map((item, index) =>
          <li key={index}>
            <Link
              url={item.url}
              label={item.text}
              content={
                <>
                  <Icon cat={item.iconCat} name={item.iconName} />
                  <b>{item.text}</b>
                </>
              }
            />
          </li>
        )}
      </ul>

      <Link
        url="#intro"
        label="Logo"
        content={<Image url={logo} alt="Logo" />}
      />

      <ul>
        { nav.in.map((item, index) =>
          <li key={index}>
            <Link
              url={item.url}
              label={item.text}
              content={
                <>
                  <Icon cat={item.iconCat} name={item.iconName} />
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

export default Nav
