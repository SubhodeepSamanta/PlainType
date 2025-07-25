import express from 'express'
import { createPost, deletePost, getPost, getPosts, uploadAuth } from '../controllers/post.controller.js';
import increaseVisit from '../middlewares/increaseVisit.js';

const router= express.Router();

router.get('/',getPosts);
router.get("/auth-upload",uploadAuth);
router.get("/:slug",increaseVisit,getPost);
router.post("/",createPost);
router.delete("/:id",deletePost);
router.patch("/feature",deletePost);

export default router;