import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'

import { useState } from 'react'

const Barchart = () => {

    const [options, setOptions] = useState( {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      })
      
      const [series, setSeries] = useState([{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }])
  return (
    <div>

    <Chart options={options} series={series} type="bar" width={500} height={400} />
    </div>
  )
}

export default Barchart;