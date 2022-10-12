import { Router } from 'express';
import { deleteTarea, getTarea, getTareas, postTarea, updateTarea } from '../controllers/todolist.controller';

const router = Router();

router.get('/', getTareas);
router.get('/:id', getTarea);
router.delete('/:id', deleteTarea);
router.post('/', postTarea);
router.put('/:id', updateTarea);

export default router;