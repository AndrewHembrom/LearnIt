import express from 'express';
import { isAdmin, isAuth } from '../middlewares/isAuth.js';
import { addLEctures, createCourse } from '../controllers/admin.js';
import { uploadFiles } from '../middlewares/multer.js';

const router = express.Router();

router.post('/course/new', isAuth, isAdmin, uploadFiles, createCourse);
router.post('/course/:id', isAuth, isAdmin, uploadFiles, addLEctures);

export default router;
