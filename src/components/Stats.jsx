import React from 'react'
import LowStock from './LowStock'
import SalesData from './SalesData'
import OtherData from './OtherData'
import MonthlySales from './MonthlySales';

const Stats = () => {
  return (
    <div>
        <LowStock></LowStock>
        <SalesData></SalesData>
        <OtherData></OtherData>
        <MonthlySales></MonthlySales>
    </div>
  )
}

export default Stats