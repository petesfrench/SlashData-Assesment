const graphOptions = {
    series: [
        {
            name: 'Amounts',
            data: [],
        },
    ],
    options: {
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + '';
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ['#304758'],
            },
        },

        xaxis: {
            categories: [],
            position: 'bottom',
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + '';
                },
            },
        },
        title: {
            text: 'Counts',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444',
            },
        },
    },
};

export default graphOptions;
