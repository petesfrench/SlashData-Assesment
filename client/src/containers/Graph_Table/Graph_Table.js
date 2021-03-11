import React, { useState } from 'react';
import Graph from '../../components/Graph/Graph';
import Table from '../../components/Table/Table';
import './graphtable.css';

const GraphTable = ({ graphConfig, tableData }) => {
    const [renderGraph, setRenderGraph] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        setRenderGraph(!renderGraph);
    };

    return (
        <div className="graph-table-field">
            <div>
                {Object.keys(tableData).length ? (
                    <>
                        {renderGraph ? (
                            <Graph graphConfig={graphConfig} />
                        ) : (
                            <Table tableData={tableData} />
                        )}
                    </>
                ) : (
                    <h2>Insert data to render graph....</h2>
                )}
            </div>
            <button
                className="toggle-graph"
                type="submit"
                onClick={handleSubmit}
            >
                {renderGraph ? 'Table' : 'Graph'}
            </button>
        </div>
    );
};

export default GraphTable;
