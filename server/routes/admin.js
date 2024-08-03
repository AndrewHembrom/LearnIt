import express from 'express';
import { isAdmin, isAuth } from '../middlewares/isAuth.js';
import { addLEctures, createCourse, deleteCourse, deleteLecture } from '../controllers/admin.js';
import { uploadFiles } from '../middlewares/multer.js';

const router = express.Router();

router.post('/course/new', isAuth, isAdmin, uploadFiles, createCourse);
router.post('/course/:id', isAuth, isAdmin, uploadFiles, addLEctures);
router.delete('/lecture/:id', isAuth, isAdmin, deleteLecture);
router.post('/course/:id', isAuth, isAdmin, deleteCourse);

export default router;
