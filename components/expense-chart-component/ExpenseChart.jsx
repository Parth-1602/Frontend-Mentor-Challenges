import * as React from "react";
import { Bar } from "react-chartjs-2";
import apiData from "../../src/expenses-chart-component/data.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ExpenseChart = () => {
  const [daysList, setDaysList] = React.useState([]);
  const [amountList, setAmountList] = React.useState([]);

  React.useEffect(() => {
    apiData.forEach((data) => {
      setDaysList((d) => [...d, data.day]);
      setAmountList((a) => [...a, data.amount]);
    });
  }, []);

  const data = {
    labels: daysList,
    datasets: [
      {
        data: amountList,
        backgroundColor: (context) => {
          let maximumSpent = 0;
          context.dataset.data.forEach((spent) => {
            if (spent > maximumSpent) {
              maximumSpent = spent;
            }
          });
          const index = context.dataIndex;
          const spentAmount = context.dataset.data[index];

          return spentAmount === maximumSpent
            ? "hsl(186, 34%, 60%)"
            : "hsl(10, 79%, 65%)";
        },
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "hsl(25, 47%, 15%)",
        bodyColor: "hsl(33, 100%, 98%)",
        bodyFont: { family: "DM Sans, sans-serif", size: 11 },
        caretSize: 0,
        displayColors: false,
        boxWidth: 90,
        callbacks: {
          title: () => "",
          label: (context) => "$" + context.dataset.data[context.dataIndex],
        },
      },
    },
    scales: {
      xAxis: {
        display: true,
        grid: {
          display: false,
          borderColor: "hsl(33, 100%, 98%)",
        },
        ticks: {
          color: "hsl(28, 10%, 53%)",
        },
      },
      yAxis: {
        display: false,
      },
    },
  };

  return (
    <>
      {/* @ts-ignore */}
      <Bar options={options} data={data} />
    </>
  );
};

export default ExpenseChart;
