import React, { useRef } from 'react'
class FormStore {
  constructor() {
    this.store = {} // 存储数据
    this.fieldEntities = [] // 存储field
    this.callbacks = {} // 校验成功回调，校验失败回调
  }

  setCallback = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback
    }
  }
  registerField=(entity) => {
    this.fieldEntities.push(entity)
    return () => {
      this.fieldEntities = this.fieldEntities.filter(item => item !== entity )
      delete this.store[entity.props.name]
    }
  }

  getFieldValue = (name) => {
    return this.store[name]
  }
  getFieldsValue = () => {
    return this.store
  }
  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore
    }
    this.fieldEntities.forEach(entity => {
      const {name} = entity.props
      Object.keys(newStore).forEach(key => {
        if (key === name) {
          entity.onStoreChange()
        }
      })
    })
  }

  submit = () => {
    let err = this.validate()
    const { onFinish, onFinishFailed } = this.callbacks

    if (err.length === 0) {
      // console.log('success', );
      onFinish(this.getFieldsValue())
    } else {
      // console.log('fail', err);
      onFinishFailed(err)
    }
  }

  validate = () => {
    let err = []

    this.fieldEntities.forEach(entity => {
      const {name, rules} = entity.props
      let value = this.getFieldValue(name)
      let rule = rules && rules[0]
      if (rule && rule.required && (value === undefined || value === '')) {
        err.push({
          [name]: rule.message,
          value
        })
      }
    })
    return err
  }

  getForm = () => {
    return {
      setCallback: this.setCallback,
      submit: this.submit,
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      // setFieldValue: this.setFieldValue,
      setFieldsValue: this.setFieldsValue,
    }
  }
}
export default function useForm(form) {

  const formRef = useRef()
  if (!formRef.current) {
    console.log(form, '----form111');
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}