import React, {useState, useEffect} from 'react'
import FieldContext from './FieldContext.js'
import useForm from './useForm.js'
function Form({
  onFinish, onFinishFailed, form, children
}, ref) {
  const [formInstance] = useForm(form)
  React.useImperativeHandle(ref, () => formInstance)
  formInstance.setCallback({
    onFinish, onFinishFailed
  })
  return (
    <form onSubmit={e => {
      e.preventDefault()
      console.log('submit');
      formInstance.submit()
    }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}
export default Form;