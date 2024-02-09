import React from 'react'
import SideBar from './SideBar'
import { Checkbox, Flex, Layout } from 'antd'

function RoomStatus() {
  return (
    <Layout>
      <Flex horizontal>
        <SideBar/>
      <div>
        <h1>RoomStatus</h1>
        <Checkbox>RoomStatus</Checkbox>
      </div>
      </Flex>
    </Layout>
  )
}

export default RoomStatus