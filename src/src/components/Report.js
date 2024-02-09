import { Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { useDispatch } from 'react-redux';
import { allCols } from '../redux/Cols/allColsSlice';
import {DataTable} from 'react-data-table-component'
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
  };
function Report() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(allCols())
},[dispatch]);

  return (
    <Layout style={layoutStyle}>
      
      <Layout>
        <SideBar/>
      </Layout>
    </Layout>
  )
}

export default Report