import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';


const barOptions: ApexOptions = {
    chart: {
        type: 'bar',
        height: 350,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
            borderRadius: 8
        },
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
    },
    xaxis: {
        categories: [
            5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33
        ],
    },
};

const barSeries = [{
    name: 'Series 1',
    data: [44, 55, 41, 64, 22, 43, 21, 49, 62, 69, 71, 67, 68, 72],
}];

const Barchart = () =>
    <Chart
        options={barOptions}
        series={barSeries}
        type="bar"
        height="235"
    />

export default Barchart