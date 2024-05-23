import React, { useState, useEffect } from 'react';
import { db } from '../hooks/firebase';
import { collection, getDocs } from 'firebase/firestore';

const DatabaseConnect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'games'));
        setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseConnect;
