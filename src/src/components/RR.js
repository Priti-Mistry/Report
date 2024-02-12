import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Flex, Layout } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import Sider from 'antd/es/layout/Sider';
import axios from 'axios'
import { allCols } from '../redux/Cols/allColsSlice';
import SideBar from './SideBar';
import { tblColsData } from '../redux/reservation/reservationSlice';


function RR() {
    const navigate=useNavigate()

    const dispatch = useDispatch();
    const columns = useSelector((state) => state.columns.columns);
    const [tblCol,setTblCol]=useState({
        Guests:[],
        Reservations:[],
        Rooms:[],
        RoomTypes:[]
    })

    const onChange = (e) => {
        const { name, checked } = e.target;
        // console.log(name, checked)
        var tbl=name.split(".");
        if(tbl[0]==="Reservations"){
            setTblCol({...tblCol,Reservations: checked ? [...tblCol.Reservations,tbl[1]] : tblCol.Reservations.filter(col => col !== tbl[1])});
        }else if(tbl[0]==="Guests"){
            setTblCol({...tblCol,Guests: checked ? [...tblCol.Guests,tbl[1]] : tblCol.Guests.filter(col => col !== tbl[1])});
        }else if(tbl[0]==="Rooms"){
            setTblCol({...tblCol,Rooms: checked ? [...tblCol.Rooms,tbl[1]] : tblCol.Rooms.filter(col => col !== tbl[1])});
        }else if(tbl[0]==="RoomTypes"){
            setTblCol({...tblCol,RoomTypes: checked ? [...tblCol.RoomTypes,tbl[1]] : tblCol.RoomTypes.filter(col => col !== tbl[1])});
        }
      };

    useEffect(() => {
        dispatch(allCols());
    }, [tblCol]);

    const SelectedColDetails=()=>{
        
        if(tblCol.Guests.length !==0){
            dispatch(tblColsData({tblName:"Guests",selectedColumns:tblCol.Guests}))
        }
        if(tblCol.Reservations.length !==0){
            dispatch(tblColsData({tblName:"Reservations",selectedColumns:tblCol.Reservations}))
        }
        if(tblCol.Rooms.length !==0){
            dispatch(tblColsData({tblName:"Rooms",selectedColumns:tblCol.Rooms}))
        }
        if(tblCol.RoomTypes.length !==0){
            dispatch(tblColsData({tblName:"RoomTypes",selectedColumns:tblCol.RoomTypes}))
        }
        navigate("/RReport")
        
    }

//       const tableColumns = selectedCol && selectedCol.map((col) => ({
//     name: col,
//     selector: col,
//     sortable: true,
//   }));

    return (
        <>
        <Flex horizontal>
        <SideBar />
        <Flex vertical>
        <ul>
                {Object.entries(columns).map(([tableName, tableColumns]) => (
                    <li key={tableName}>
                        <h3>{tableName}</h3>
                        <ul>
                            {tableColumns.map((column) => (
                                <Checkbox key={column} name={tableName+"."+column} onChange={(e) => onChange(e)}>{column}</Checkbox>
                            ))}
                        </ul>
                    </li>
                ))}
                
            </ul>
        <>
        <Button type="primary" style={{width:"15%"}} onClick={SelectedColDetails}>Report</Button>
        </>
        </Flex>
            
            
            </Flex>
            
            {/* <DataTable
        columns={tableColumns}
        data={transformedData}
      /> */}
        </>
    )
}

export default RR