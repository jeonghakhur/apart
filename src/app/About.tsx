import ApexCharts from "react-apexcharts";

export default function About() {
  return (
    <>
      <div>About</div>
      <ApexCharts
        type='line'
        series={[
          {
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33],
          },
          {
            name: "Low - 2013",
            data: [12, 11, 14, 18, 17, 13, 13],
          },
        ]}
      />
    </>
  );
}
