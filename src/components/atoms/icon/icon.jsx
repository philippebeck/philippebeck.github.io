import './icon.scss'

const Icon = ({name, cat="brands", size="2"}) => {
  return (
    <i className={`fa-${cat} fa-${name} fa-${size}x fa-fw`}></i>
  )
}

export default Icon
