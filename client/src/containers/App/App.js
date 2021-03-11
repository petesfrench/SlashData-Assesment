import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import GraphTable from '../Graph_Table/Graph_Table';
import solveNgram from '../../lib/services/solveNgram';
import createGraphData from '../../middleware/createGraphData';
import './App.css';

const App = () => {
    const [graphConfig, setGraphConfig] = useState({});
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSolution = ngramOptions => {
        setLoading(true);
        return solveNgram(ngramOptions).then(solution => {
            if (solution.errors) {
                throw new Error(solution.errors);
            } else {
                setGraphConfig(createGraphData(solution));
                setTableData(solution);
                setLoading(false);
                return true;
            }
        });
    };

    return (
        <div className="page-container">
            <div className="graph-table-container">
                {loading ? (
                    <h2>Loading solution...</h2>
                ) : (
                    <GraphTable graphData={graphConfig} tableData={tableData} />
                )}
            </div>
            <div className="form-container">
                <Form getSolution={getSolution} />
            </div>
        </div>
    );
};

export default App;
