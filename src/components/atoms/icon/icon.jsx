import './icon.css'

const Icon = ({cat, name}) => {

  return (
    <i className={`fa-${cat} fa-${name} fa-fw fa-lg`}></i>
  )
}

export default Icon
