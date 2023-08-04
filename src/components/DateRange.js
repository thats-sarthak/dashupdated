import React from 'react'
import { DatePicker } from 'antd';

import { useState } from 'react';
import moment from 'moment'

const {RangePicker} = DatePicker;


const DateRange = () => {

  const[dates, setDates] = useState([])
  console.log("data", dates);

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
        }}
      />

<h1>{dates.join(" to ")}</h1>
    </div>
  );
}

export default DateRange