const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    apiVersion: '7.2',
    host: 'https://vpc-elastic-cluster-tsetrgigoojiuladof32h5tlb4.us-east-1.es.amazonaws.com',
});

const search = async query => {
    return await (client.search({
        index: 'imagens',
        q: 'tags:' + query
    }))
}

module.exports = {
    search: search
}