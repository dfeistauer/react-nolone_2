import PropTypes from 'prop-types'

const Input = (color, text, type, defaultDF, name) => {
  return (
      <>
        <label>{text}</label>
        <input 
          type= {type} 
          name = {name}/>
      </>
    
  )
}

Input.defaultProps = {
    label: '',
    color: 'black',
    type: 'text',
    defaultDF: '',
    name: '',
}

Input.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    defaultDF: PropTypes.string,
    name: PropTypes.string,
}


export default Input
