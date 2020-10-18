import { Router } from 'express';

import JsonGenerator from '../controller/jsonGeneratorController'

  const routes = new Router();

  routes.get('/',JsonGenerator.healthCheck);

  routes.post('/random',JsonGenerator.generateJson);
  // routes.post('/random2',JsonGenerator.generateJson2);





module.exports = routes;