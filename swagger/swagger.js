const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Student API', version: '1.0.0', description: 'Student API docs' },
    servers: [{ url: '/' }]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
