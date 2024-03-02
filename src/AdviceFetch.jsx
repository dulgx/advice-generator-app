import { Component, useEffect, useState } from 'react'
import axios from 'axios';

const AdviceFetch = () =>{
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        const fetchAdvice = async () => {
          try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
          } catch (error) {
            console.error('Error fetching advice:', error);
          }
        };
    
        fetchAdvice();
      }, []);
    
      return (
          <p>{advice}</p>
      );
    };

export default AdviceFetch;