import React, { useEffect, useState } from 'react'
import './card.css'
import'./modal.css'
import axios from 'axios'
import { Button, Card, Form, Input, Modal } from 'antd'
import { FacebookFilled, GoogleOutlined, InstagramFilled } from '@ant-design/icons'


const Allposts = () => {

  const [userData, setuserData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValues, setmodalValues] = useState()
  


  useEffect(() => {
    const allUsers = async () => {
      try {
        const users = await axios.get("http://localhost:4000")
        setuserData(users.data)
      } catch (error) {
        console.log(error)
      }

    }
    allUsers()
    

  }, [])

  const handledelete = async (id) => {
    
    console.log(id)

    try {
      const result = await axios.delete(`http://localhost:4000/${id}`)
      console.log(result)
      window.location.reload(false)
    } catch (error) {
      console.log(error)
    }
    
  }
  
    
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleupdate = async (id) => {
      
      setIsModalOpen(true)
    
      if(typeof id==='string'){
      setmodalValues(id)
    }else{

      try {

        const result = await axios.put(`http://localhost:4000/${modalValues}`, id)
        console.log(result)
        setIsModalOpen(false)
        window.location.reload(false)

      } catch (error) {
        console.log(error)
      }
    }
      
    }
    

  return (

    <>
    <div className='card'>
      <div className='cardin'>
        {userData.map((user) => (
          <Card key={user._id} style={{width:'90%', borderRadius: '30px' , overflow:'hidden'}}
            actions={[<GoogleOutlined style={{ color: 'red', fontSize: '25px' }} />,
            <FacebookFilled style={{ color: 'blue', fontSize: '25px' }} />, <InstagramFilled style={{ color: '#82136F', fontSize: '25px' }} />]}
            cover={<div style={{
              height: 150, width: '100%', background: 'linear-gradient(#FF007A,#4200FF)',
              color: 'white', fontSize: '30px', textAlign: 'center', paddingTop: 30
            }}>
              {user.name}
            </div>}
          >
           <div className='contents'>
            <h3>Email: {user.email}</h3>
            <h5>Full Stack developer</h5>
            
            <Button type='primary' className='del' onClick={() => handledelete(user._id)}>Delete</Button>
            <Button type='primary' className='upd' onClick={() => handleupdate(user._id)}>Update</Button>

  
            </div> 
          </Card>
        ))}
      </div>
    </div>
    <Modal footer={null} title="Update User Data" open={isModalOpen} onCancel={handleCancel} className='modal'>
        
          <Form  className='form' onFinish={handleupdate}>
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
              <Button type='primary' htmlType='submit'>Update</Button>
            </Form.Item>
        
          </Form>
        
        </Modal>
    </>
  )
}

export default Allposts