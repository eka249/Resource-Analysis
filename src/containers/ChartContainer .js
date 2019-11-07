import React from "react";
import { Bar } from "react-chartjs-2";

class ChartContainer extends React.Component {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        <div>
          there should be buttons here to change charts-stretch goal. but not
          really stretch that should happen. if i ever get auth working *rocks
          back and forth nervously*
        </div>
        <Bar
          // data={data}
          width={10}
          height={20}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}

export default ChartContainer;
