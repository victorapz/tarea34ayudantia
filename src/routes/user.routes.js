import { Router } from "express";

import {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
} from '../controllers/user.controller.js';

const router = Router();

router.post('/', createUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);



export default router;

