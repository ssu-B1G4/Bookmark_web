import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LineController,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

interface CongestionData {
  hour: string;
  value: number;
}

export const Graph = ({ data }: { data: CongestionData[] }): React.JSX.Element => {
  const formattedData = data.map((item) => ({
    ...item,
    hour: item.hour.replace(/:00/, '시'),
  }));

  const chartData = {
    labels: formattedData.map((item) => item.hour),
    datasets: [
      {
        type: 'bar' as const,
        label: '시간별 데이터',
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => {
          switch (true) {
            case item.value < 30:
              return '#D8F7D9';
            case item.value < 60:
              return '#FFF4C1';
            default:
              return '#FF8686';
          }
        }),
        borderWidth: 0.1,
        order: 2,
      },
      {
        type: 'line' as const,
        label: '추세선',
        data: data.map((item) => item.value),
        borderColor: '#198155',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        order: 1,
      },
    ],
  };
  type ChartType = 'bar' | 'line';

  const options: ChartOptions<ChartType> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
          color: '#198155',
        },
        grid: {
          display: true,
          color: '#E6E6E6',
        },
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
    },
  } as const;

  return (
    <div style={{ height: '330px' }}>
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};
