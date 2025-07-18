// chartSetup.js (or top of your chart component)
import {
  Chart as ChartJS,
  CategoryScale,    // ✅ for x-axis with labels
  LinearScale,      // ✅ for y-axis
  BarElement,       // ✅ for bar chart
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,      // ✅ if you're using line charts too
  ArcElement        // ✅ if you're using pie/doughnut charts
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);
