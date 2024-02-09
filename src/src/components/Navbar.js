import React from 'react'
import {Menu} from 'antd'
import { Link } from 'react-router-dom'


function Navbar() {
    
  return (
    <Menu 
        mode="horizontal"
    >
        <Menu.Item key='home'>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key='report'>
            <Link to="/report">Report</Link>
        </Menu.Item>
        {/* <Menu.Item key='reservation'>
            <Link to="/reservation">Reservations</Link>
        </Menu.Item> */}
    </Menu>
  )
}

export default Navbar