
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const RingChart = () => {
    const options: ApexOptions = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '60px',
                },
                dataLabels: {
                    name: {
                        show: true,
                        offsetY: 20,
                    },
                    show: true,
                    value: {
                        fontWeight: 600,
                        color: "white",
                        show: true,
                        fontSize: '20px',
                        offsetY: -20,
                        formatter: (val: number) => `${val}%`
                    },
                },
            },
        },
        labels: ['Progress'],
    };


    return (
        <Chart
            options={options}
            series={[75]}
            type="radialBar"
            height="180"
        />
    );
};

export default RingChart;
