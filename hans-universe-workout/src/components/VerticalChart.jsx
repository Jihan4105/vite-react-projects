import { BarChart } from "@mui/x-charts/BarChart"

import { inbodyDataset, valueFormatter } from "../data/chartData"

export default function VerticalChart() {
  return (
    <BarChart
      dataset={inbodyDataset}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "type",
          disableTicks: true,
        },
      ]}
      //Important Gradient
      sx={{
        "--my-custom-gradient": "url(#GlobalGradient)",
      }}
      slotProps={{
        //Important Gradient
        popper: {
          sx: {
            "--my-custom-gradient":
              "linear-gradient(90deg, rgba(98,98,98,1) 0%, rgba(0,0,0,1) 100%);",
          },
        },
        legend: {
          hidden: true,
        },
      }}
      series={[
        {
          dataKey: "value",
          label: "mass",
          valueFormatter,
          //Important Gradient
          color: "var(--my-custom-gradient, rgba(98,98,98,1))",
        },
      ]}
      layout="vertical"
      grid={{ vertical: true }}
      borderRadius={50}
      yAxis={[
        {
          label: "mass (kg)",
        },
      ]}
      height={250}
    >
      {/* Important Gradient */}
      <linearGradient id="GlobalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0" stopColor="rgba(98,98,98,1)" />
        <stop offset="1" stopColor="rgba(0,0,0,1)" />
      </linearGradient>
    </BarChart>
  )
}