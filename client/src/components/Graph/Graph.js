import React from 'react';
import ReactApexChart from 'react-apexcharts';
import graphOptions from '../../config/graphConfigTemplate';

const Graph = ({ graphConfig }) => {
    const { options, series } = graphOptions;
    return (
        <div className="graph-container">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default Graph;
