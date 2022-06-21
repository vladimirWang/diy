import React, { Component, useState, useEffect } from 'react'
// import {Button, Form, Input} from 'antd'
// import Form, { Field } from 'rc-field-form'
import FunctionComp from './FunctionComp.jsx'
import ClassComp from './ClassComp.jsx'
import styles from './styles.module.css'

function TestForm() {
  return (
    <div>
        <h3>实现自己的rc-field-form</h3>
      <div className={styles.tabs}>
        <section>
          <article>函数式组件</article>
          <FunctionComp/>
        </section>
        <section>
          <article>类组件</article>
          <ClassComp />
        </section>
      </div>
    </div>
  )
}
export default TestForm;
