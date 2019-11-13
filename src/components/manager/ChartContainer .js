import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class ChartContainer extends React.Component {
  render() {
    return (
      <div>
        <div>Your Employee's Stats</div>
        <HorizontalBar
          data={data}
          width={10}
          height={20}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}

export default ChartContainer;
