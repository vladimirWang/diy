import React from 'react'
import _Form from './Form.jsx'
import Field from './Field.jsx'
import useForm from './useForm'

const Form = React.forwardRef(_Form)
Form.useForm = useForm
Form.Field = Field

export {
  Field, useForm
}
export default Form