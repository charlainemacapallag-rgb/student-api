const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student API",
      version: "1.0.0",
      description: "API documentation for your Student Management System",
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/*.js"], // Scan all route files
};

module.exports = swaggerJsDoc(options);
