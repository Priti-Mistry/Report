import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

// Function to transpose data
function transposeData(arrayOfArrays) {
    const transposed = [];
    const maxLength = Math.max(...arrayOfArrays.map(arr => arr.length));

    for (let i = 0; i < maxLength; i++) {
        const newRow = {};
        newRow.id=i+1;
        arrayOfArrays.forEach((arr) => {
            const obj = arr[i];
            if (obj) {
                Object.keys(obj).forEach(key => {
                    newRow[key] = obj[key];
                });
            }
        });
        
        console.log(newRow)
        // newRow.push({id:i+1})
        transposed.push(newRow);
    }

    return transposed;
}

const RReport = () => {
    const Data = useSelector((state) => state.reservation.cols);
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (Data.length > 0) {
            const transposedData = transposeData(Data);
            const transposedColumns = Object.keys(transposedData[0]);
            setColumns(transposedColumns);
            setData(transposedData);
            console.log(data)
        } else {
            console.error('The fetched data is empty.');
        }
    }, [JSON.stringify(Data) ,data.length]);

    return (
        <DataTable
            columns={columns.map(column => ({ name: column.toUpperCase(), selector: row => row.column}))}
            data={data}
            
        />
    );
};

export default RReport;
