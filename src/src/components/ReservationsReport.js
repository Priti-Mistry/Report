import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { Button, Checkbox, Flex, Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getReservationCols, getReservationData } from '../redux/reservation/reservationSlice'
import { useNavigate } from 'react-router'




function ReservationsReport() {

  const [selectedCols, setSelectedCols] = useState([])


  const dispatch = useDispatch()
  const navigate=useNavigate()
  const tableColumn = useSelector((state) => state.reservation.cols)

  useEffect(() => {
    dispatch(getReservationCols());
    // console.log(tableColumn)
    console.log(selectedCols)
  }, [dispatch, tableColumn.length,selectedCols]);

  const onChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked)
    setSelectedCols(checked ? [...selectedCols, name] : selectedCols.filter(col => col !== name));
  };
  const SelectedColDetails=()=>{
    // const selectedColumns=selectedCols;
    // console.log(selectedColumns,"button click")
    dispatch(getReservationData({selectedCols}));
    // navigate('/guest')
  }

  return (
    <Layout>
      <Flex horizontal>
        <SideBar />
        <div draggable
        onDragStart={()=>console.log("drag start")}
        onDragEnd={()=>console.log('drag end ')}>
          <h1>Reservations</h1>
          {
            tableColumn && tableColumn.map(col => {
              return <>
                <Checkbox key={col} name={col} onChange={(e) => onChange(e)}>{col}</Checkbox>
                <br />
              </>
            }
            )
          }
          <Button type="primary" onClick={SelectedColDetails}>Report</Button>
        </div>
      </Flex>
    </Layout>
  )
}

export default ReservationsReport