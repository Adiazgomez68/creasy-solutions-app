db.createCollection("users", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "passsword", "rol", "email" ],
          properties: {
             name: {
                bsonType: "string",
                description: "name is required"
             },
             passsword: {
                bsonType: "string",
                description: "password is required"
             },
             rol: {
                bsonType:["string"],
                description: "permissions and rol"
             },
             email: {
                bsonType:  "string" ,
                description: "email is required"
             },
          }
       }
    }
 })