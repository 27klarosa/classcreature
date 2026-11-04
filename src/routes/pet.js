import { Router } from 'express';
import { createPetController } from '#controllers/pet-controller.js';
import { requireAuthentication } from '#middleware/auth.js'; //future use

export function createPetRouter(container) {
  const router = Router();
  const controller = createPetController(container);
  router.get('/inventory', controller.inventory)
  router.get('/creature', controller.creature)
  router.get('/egg', controller.egg)
  return router;
}