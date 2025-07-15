import express from 'express'
import { getSavedPosts, savePost, featurePost } from '../controllers/user.controller.js';

const router= express.Router();

router.get('/saved',getSavedPosts);
router.patch('/save',savePost);
router.patch('/feature',featurePost);

export default router;