import React, {Component} from 'react'
import FieldContext from './FieldContext.js'

class Field extends Component {
  static contextType = FieldContext
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.cancelRegister =  this.context.registerField(this)
  }

  componentWillUnmount() {
    if (this.cancelRegister) {
      this.cancelRegister()
    }
  }

  onStoreChange =() => {
    // console.log('stroe change');
    this.forceUpdate();
  }

  getControlled = () => {
    const { getFieldValue, getFieldsValue, setFieldsValue} = this.context;
    const {name} = this.props;
    return {
      value: getFieldValue(name) || '',
      onChange: (event) => {
        const newValue = event.target.value
        // console.log(name, newValue, '---set fields value');
        setFieldsValue({[name]: newValue})
      }
    }
  }
  render() {
    const {children} = this.props
    const returnChildNode = React.cloneElement(children, this.getControlled())
    // console.log('field render');
    return returnChildNode
  }
}
export default Field