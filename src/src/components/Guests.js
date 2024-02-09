import React from 'react'
import SideBar from './SideBar'
import { Checkbox, Flex, Layout } from 'antd'

function Guests() {
  return (
    <Layout>
      <Flex horizontal>
        <SideBar/>
      <div>
        <h1>Guests</h1>
        <Checkbox>Guests</Checkbox>
      </div>
      </Flex>
    </Layout>
  )
}

export default Guests