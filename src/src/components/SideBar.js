import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Flex, Layout } from 'antd';
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component';
import Sider from 'antd/es/layout/Sider';
import axios from 'axios'

const siderStyle = {
  textAlign: 'center',
  lineHeight: '20px',
  color: '#000',
  backgroundColor: '#fff',
};

function SideBar() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns.columns);
  const [cols, setCols] = useState([]);
  const [selectedCols, setSelectedCols] = useState({});
  const [selectedCol,setSelectedCol]=useState([]);
  const [tableData, setTableData] = useState([]);
  let transformedData=[];

  useEffect(() => {
    setCols(Object.values(columns).reduce((acc, curr) => [...acc, ...curr], []));
    console.log(selectedCol)
  }, [columns,selectedCol]);

  // const onChange = (e, tableName) => {
  //   const { name, checked } = e.target;
  //   setSelectedCols(prevState => ({
  //     ...prevState,
  //     [tableName]: checked ? [...(prevState[tableName] || []), name] : prevState[tableName].filter(col => col !== name)
  //   }));
  //   setSelectedCol(checked ? [...selectedCol, name] : selectedCol.filter(col => col !== name));
  // };

  // const fetchData = async () => {
  //   try {
  //     const combinedData = [];
  //     for (const [tableName, selectedColumns] of Object.entries(selectedCols)) {
  //       const response = await axios.post(`http://localhost:5000/allCols/data/${tableName}`, { selectedColumns });
  //       combinedData.push(...response.data);
  //     }
  //     // Convert raw data to an array of objects compatible with DataTable
  //    transformedData = combinedData.map((row, index) => ({
  //       id: index + 1, // Assuming you want unique IDs for each row
  //       ...row
  //   }));
  //     setTableData(combinedData);
  //     console.log(tableColumns);
  //     console.log(transformedData)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const tableColumns = selectedCol && selectedCol.map((col) => ({
  //   name: col,
  //   selector: col,
  //   sortable: true,
  // }));

  return (
<>
        <Sider style={siderStyle}>
          <ul>
            <li><Link to="/reservation"> Reservations </Link></li>
            <li><Link to="/guest"> Guests </Link></li>
            <li><Link to="/roomStatus"> Room Status </Link></li>
          </ul>
      </Sider>
      
    
      {/* <Sider width="35%" style={siderStyle}>
      <ul>
              {Object.entries(columns).map(([tableName, tableColumns]) => (
                    <li key={tableName}>
                        <h3>{tableName}</h3>
                        <ul>
                            {tableColumns.map((column) => (
                                <Checkbox key={column} name={column} onChange={(e) => onChange(e, tableName)}>{column}</Checkbox>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
      </Sider>
      <div width="65%">
      <button onClick={fetchData}>Fetch Data</button>
      <DataTable
        columns={tableColumns}
        data={transformedData}
      />
      </div> */}
    </>
  );
}

export default SideBar;




// <Sider width="25%" style={siderStyle}>
//             <ul>
//                 {Object.entries(columns).map(([tableName, tableColumns]) => (
//                     <li key={tableName}>
//                         <h3>{tableName}</h3>
//                         <ul>
//                             {tableColumns.map((column) => (
//                                 <Checkbox key={column} onChange={onChange}>{column}</Checkbox>
//                                 // <li key={column}>{column}</li>
//                             ))}
//                         </ul>
//                     </li>
//                 ))}
//             </ul>
//         </Sider>

//   const onChange = (e,tableName) => {
//     if(e.target.checked){
//         let name=e.target.name
//         setSelectedCol([...selectedCol,name]);
//     }
//     if(!e.target.checked){
//         console.log(e.target.name,"unchecked");
//         setSelectedCol(selectedCol.filter((selectedCol)=>selectedCol!==e.target.name));
        
//     }
//     console.log(`checked = ${e.target.checked} name :${e.target.name}`);
//   };