import React from 'react'
import './form.css'
import axios from 'axios'
import { Form, Input, Button, Card } from 'antd'

const Createpost = () => {
  const [form] = Form.useForm()
  

  const handleFinish = async (values) => {
    form.resetFields()
    const response = await axios.post("http://localhost:4000", values)

    try {

      console.log(typeof response.status)

    } catch (error) {

      console.log(error)
    }

  }


  return (
    <div className='body'>
      
        <Card style={{ width: '30%' }} className='innerform'>
          <h2>Enter The Data</h2>
          <Form form={form} className='form' onFinish={handleFinish}>
            <Form.Item label="Name" name='name'>
              <Input placeholder='Name'></Input>
            </Form.Item>

            <Form.Item label="E-mail" name='email' style={{ color: '#fff' }}>
              <Input placeholder='email'></Input>
            </Form.Item>

            <Form.Item label="Age" name='age'>
              <Input placeholder='age' type='number'></Input>
            </Form.Item>

            <Form.Item >
              <Button block type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
          </Form>
        </Card>
      
    </div>
  )
}

export default Createpost