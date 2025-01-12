import { BarChart } from "@mui/x-charts/BarChart"

import { inbodyDataset, valueFormatter } from "../data/chartData"

export default function VerticalChart() {
  return (
    <BarChart 
      dataset={inbodyDataset}
      yAxis={[{
        scaleType: "band",
        dataKey: "type",
        disableTicks: true,
      }]}
      sx={{
        "--my-custom-gradient": "url(#GlobalGradient)"
      }}
      slotProps={{
        popper: {
          sx: {
            '--my-custom-gradient': 'linear-gradient(90deg, rgba(98,98,98,1) 0%, rgba(0,0,0,1) 100%);',
          },
        },
        legend: {
          hidden: true
        }
      }}
      series={[{ 
        dataKey: 'value', 
        label: "mass", valueFormatter,
        color: "var(--my-custom-gradient, rgba(98,98,98,1))"
      }]}
      layout="horizontal"
      grid={{vertical: true}}
      margin={{
        left: 120
      }}
      borderRadius={50}
      xAxis={[{
        label: "mass (kg)"
      }]}
      height={200}
    >
      <linearGradient id="GlobalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0" stopColor="rgba(98,98,98,1)" />
        <stop offset="1" stopColor="rgba(0,0,0,1)" />
      </linearGradient>
    </BarChart>
  )
}