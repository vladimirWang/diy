import React, { Component, useState, useEffect } from 'react'
import Form, { Field } from '../../libs/MyRcFieldForm/index.js'
import Input from '../../libs/MyRcFIeldForm/Input.jsx'

const usernameRules = [
  { required: true, message: '用户名必填' }
]

const passwordRules = [
  { required: true, message: '密码必填' }
]

class TestForm2 extends Component {
  formRef= React.createRef()
  componentDidMount() {
    console.log('dd', this.formRef.current);
    this.formRef.current.setFieldsValue({ username: 'alan11' })
  }
  handleFinish = (e) => {
    console.log('finish', e);
  }
  handleReset = (e) => {
    // e.preventDefault()
    console.log('reset', e);
    // formRef.resetFields()
  }
  handleFinishFailed = (err) => {
    console.log('fail', err);
  }
  render() {
    return (
      <Form
        ref={this.formRef}
        onFinish={this.handleFinish}
        onFinishFailed={this.handleFinishFailed}
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
}
export default TestForm2;
