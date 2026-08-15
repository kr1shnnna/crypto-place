
import Chart from 'react-google-charts';
import { useEffect, useState } from 'react';

const LineChart = ({historicalData}) => {

    const [data,setData]= useState([
        [
            'Date',
            'Prices'
        ]
    ])

    useEffect(()=>{

        let dataCopy=

    },[historicalData])
  return (
    <div>

    </div>
  )
}

export default LineChart