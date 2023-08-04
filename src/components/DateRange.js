import React from 'react'
import { DatePicker } from 'antd';

import { useState } from 'react';
import axios from 'axios';
import moment from 'moment'

const {RangePicker} = DatePicker;


const DateRange = () => {

  const[dates, setDates] = useState([])
  // console.log("data", dates);

  return (
    <div style={{ margin: 20}}>
      <RangePicker
        onChange={(values) => {    
          if (values === null) {
            setDates([]);
          } else {
            setDates(
              values.map((item) => item.format('DD-MM-YYYY'))
            );
          }
          
          if (values !== null) {
            axios.post("https://jsonplaceholder.typicode.com/users", {
              dates: values.map((item) => item.format('DD-MM-YYYY')),
            })
            .then((response) => {
              console.log("api", response);
            })
            .catch((error) => {
              console.error("Error API:", error);
            });
          }

        }}
      />

<p style={{margin:20}}>{dates.join(" to " )}</p>
    </div>
  );
}

export default DateRange