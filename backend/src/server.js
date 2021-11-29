const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
//const logger = require("./core/logger");
const extensions = ({ context }) => {
    return {
        runTime: Date.now() - context.startTime,
    };
};

//app.use(logger);

app.listen(3001, async () => {
    console.log("server is running ", 3001);
    await mongoose.connect("mongodb+srv://dbAdmin:XUyGDe3eYReTncxB@clustexforce.b2hgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("database connected")
});

mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);
//const graphqlSchema = require();
app.use(
    "/graphql",
    graphqlHTTP((request) => {
        return {
            context: { startTime: Date.now() },
            graphiql: true,
            schema: graphqlSchema,
            extensions,
        };
    })
);
