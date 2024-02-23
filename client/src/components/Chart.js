import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/station');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className='w-[60vw] h-[80vh] rounded-xl shadow-lg m-5 p-5'>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Acetylene" stroke="#82ca9d" />
          <Line type="monotone" dataKey="CO" stroke="#82c6ca" />
          <Line type="monotone" dataKey="CO2" stroke="#829dca" />
          <Line type="monotone" dataKey="Ethane" stroke="#9d82ca" />
          <Line type="monotone" dataKey="Ethylene" stroke="#ca82c6" />
          <Line type="monotone" dataKey="Hydrogen" stroke="#ca829d" />
          <Line type="monotone" dataKey="Methane" stroke="#ca9d82" />
          <Line type="monotone" dataKey="TDCG" stroke="#c6ca82" />
          <Line type="monotone" dataKey="Water" stroke="#9dca82" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

}



export default Chart;