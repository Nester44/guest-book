import Router from 'express';
import PostController from './PostController.js';

const router = new Router();

router.post('/messages', PostController.create);
router.get('/messages', PostController.getAll);

export default router;
