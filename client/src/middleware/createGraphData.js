import graphConfigTemplate from '../config/graphConfigTemplate';

const createGraphData = ngramSolution => {
    graphConfigTemplate.series[0].data = [];
    graphConfigTemplate.options.xaxis.categories = [];
    const graphData = ngramSolution.forEach(ngram => {
        graphConfigTemplate.series[0].data.push(ngram.count);
        graphConfigTemplate.options.xaxis.categories.push(ngram.ngram);
    });

    return graphData;
};

export default createGraphData;
