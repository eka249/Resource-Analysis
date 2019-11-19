import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const backgroundColor = "rgba(242,133,0,0.8)";
const borderColor = "rgba(102,161,130, 0.8)";
const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      label: "Jared",
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      hoverBackgroundColor: backgroundColor,
      hoverBorderColor: borderColor,
      data: [12, 4, 5, 8, 1, 0, 3]
    },
    {
      label: "Asif",
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      hoverBackgroundColor: backgroundColor,
      hoverBorderColor: borderColor,
      data: [3, 2, 10, 4, 4, 6, 1]
    },
    {
      label: "Brittan",
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      hoverBackgroundColor: backgroundColor,
      hoverBorderColor: borderColor,
      data: [1, 4, 5, 11, 0, 0, 2]
    },
    {
      label: "Katana",
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      hoverBackgroundColor: backgroundColor,
      hoverBorderColor: borderColor,
      data: [5, 4, 4, 3, 4, 2, 1]
    },
    {
      label: "Matt",
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      hoverBackgroundColor: backgroundColor,
      hoverBorderColor: borderColor,
      data: [11, 0, 5, 3, 1, 8, 3]
    },
    {
      label: "Harsh",
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      hoverBackgroundColor: backgroundColor,
      hoverBorderColor: borderColor,
      data: [2, 7, 8, 5, 10, 2, 0]
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
          height={10}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}

export default ChartContainer;
