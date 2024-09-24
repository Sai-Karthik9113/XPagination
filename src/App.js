import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TableOfContents from './Table/Table';

function App() {
  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        setTableContent(res.data);
      } catch (error) {
        console.error("Error: ", error);
        alert('Failed to fetch data');
        setTableContent([]);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <TableOfContents content={tableContent} />
    </div>
  );
}

export default App;
