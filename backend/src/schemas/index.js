const { SchemaComposer } = require('graphql-compose');


const schemaComposer = new SchemaComposer();

//const { UserQuery, UserMutation } = require('./user');
const { ProjectQuery, ProjectMutation } = require('./projects');

schemaComposer.Query.addFields({
    //...UserQuery,
    ...ProjectQuery,
});

schemaComposer.Mutation.addFields({
    //...UserMutation,
    ...ProjectMutation,
});

module.exports = schemaComposer.buildSchema();