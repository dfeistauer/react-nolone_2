import PropTypes from 'prop-types'


const Header = (promps) => {
  return (
    <header>
      <h1>{promps.title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'noLone',
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
