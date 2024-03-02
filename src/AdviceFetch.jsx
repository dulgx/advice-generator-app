import { Component, useEffect, useState } from 'react';
import { ReactDOM } from "react";
import axios from 'axios';

const AdviceFetch = () =>{
    const [advice, setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState('');

    useEffect(() => {
        const fetchAdvice = async () => {
          try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            const { slip } = response.data;
            
            setAdviceId(slip.id);
            setAdvice(slip.advice);
          } catch (error) {
            console.error('Error fetching advice:', error);
          }
        };
    
        fetchAdvice();
      }, []);
    
      return (
        <div>
            <h3 id="Advice">Advice #{adviceId}</h3>
            <p>"{advice}"</p>
        </div>
          
      );
    };

export default AdviceFetch;