const { SchemaComposer } = require('graphql-compose');


const schemaComposer = new SchemaComposer();

const { AdvancesQuery, AdvancesMutation } = require('./advances');

schemaComposer.Query.addFields({
    ...AdvancesQuery,
});

schemaComposer.Mutation.addFields({
    ...AdvancesMutation,
});

module.exports = schemaComposer.buildSchema();