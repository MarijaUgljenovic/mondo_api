import express from 'express';
import { deleteUser, getALLUsers } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) =>{
    router.get('/users',isAuthenticated, getALLUsers);
    router.delete('/users/:id',isAuthenticated, isOwner, deleteUser);
};