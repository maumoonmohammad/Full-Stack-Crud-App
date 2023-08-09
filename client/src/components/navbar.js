import React from 'react'
import { Menu, Space } from 'antd'
import { CheckCircleOutlined, HomeOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './navbar.css'



const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='nav'>

            <Space align='start'>
                <Menu onClick={({ key }) => { navigate(key) }} className='menu' theme='light' mode='inline' items={[
                    { label: 'MERN', key: '/', icon: <HomeOutlined /> },
                    { label: 'Create Post', key: '/createpost', icon: <PlusCircleOutlined /> },
                    { label: 'All Post', key: '/allposts', icon: <CheckCircleOutlined /> },
                ]}></Menu>
            </Space>


        </div>
    )
}

export default Navbar