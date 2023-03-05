import { FastifyInstance } from 'fastify'
import { 
  createUserController, 
  listUsersController, 
  findUserByIdController,
  updateUserController,
  deleteUserController
 } from '../../infrastructure/containers'

export async function userRoutes(app: FastifyInstance) {
  app.post('/', async (req, res) => {
    return await createUserController.handle(req, res)
  })

  app.get('/', async (req, res) => {
    return await listUsersController.handle(req, res)
  })
  
  app.get('/:id', async (req, res) => {
    return await findUserByIdController.handle(req, res)
  })

  app.patch('/:id', async (req, res) => {
    return await updateUserController.handle(req, res)
  })

  app.delete('/:id', async (req, res) => {
    return await deleteUserController.handle(req, res)
  })

}