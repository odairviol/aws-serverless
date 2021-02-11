const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    apiVersion: '7.2',
    host: 'https://vpc-elastic-cluster-tsetrgigoojiuladof32h5tlb4.us-east-1.es.amazonaws.com',
});

const index = async documento => {
    return await (client.index({
        index: 'imagens',
        type: 'object',
        body: documento
    }))
}

module.exports = {
    index: index
}