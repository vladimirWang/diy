import React, { Component, useState, useEffect } from 'react'
// import {Button, Form, Input} from 'antd'
// import Form, { Field } from 'rc-field-form'
import Form, { Field } from '../../libs/MyRcFieldForm/index.js'
import Input from '../../libs/MyRcFIeldForm/Input.jsx'

const usernameRules = [
  { required: true, message: '用户名必填' }
]

const passwordRules = [
  { required: true, message: '密码必填' }
]
function TestForm() {
  const [form] = Form.useForm()
  console.log('1');
  useEffect(() => {
    form.setFieldsValue({ username: 'alan' })
  }, [])
  const handleFinish = (e) => {
    console.log('finish', e);
  }
  const handleReset = (e) => {
    // e.preventDefault()
    console.log('reset', e);
    form.resetFields()
  }
  const handleFinishFailed = (err) => {
    console.log('fail', err);
  }
  return (
    <Form
      form={{ ...form, code: 1 }}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <Field name="username" rules={usernameRules}>
        <Input placeholder='please input your name' />
      </Field>
      <Field name="password" rules={passwordRules}>
        <Input placeholder='please input your password' />
      </Field>
      <button>submit</button>
    </Form>
  )
}
export default TestForm;



// class TestForm2 extends Component {
//   formRef= React.createRef()
//   componentDidMount() {
//     console.log('dd', this.formRef.current);
//     this.formRef.current.setFieldsValue({ username: 'alan11' })
//   }
//   handleFinish = (e) => {
//     console.log('finish', e);
//   }
//   handleReset = (e) => {
//     // e.preventDefault()
//     console.log('reset', e);
//     // formRef.resetFields()
//   }
//   handleFinishFailed = (err) => {
//     console.log('fail', err);
//   }
//   render() {
//     return (
//       <Form
//         ref={this.formRef}
//         onFinish={this.handleFinish}
//         onFinishFailed={this.handleFinishFailed}
//       >
//         <Field name="username" rules={usernameRules}>
//           <Input placeholder='please input your name' />
//         </Field>
//         <Field name="password" rules={passwordRules}>
//           <Input placeholder='please input your password' />
//         </Field>
//         <button>submit</button>
//       </Form>
//     )
//   }
// }
// export default TestForm2;

// import React, {useState, useEffect} from 'react'

// function Child() {
//   const [num, setNum] = useState(0)

//   useEffect(() => {
    
//     return () => {}
//   })
//   return (
//     <div>field</div>
//   )
// }
// export default Child;