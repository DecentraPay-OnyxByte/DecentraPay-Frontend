'use client'
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
// import { green } from "@mui/material/colors";

export default function BasicLineChart() {
  return (
    <LineChart
    //   xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: "#8bc34a",
          area: true,
        },
       
      ]}
      width={450}
      height={300}
      //   series={[{color: '#fdb462'}]}
        sx={
          {
              color: "#8bc34a" ,
          }
        }
    />
  );
}
