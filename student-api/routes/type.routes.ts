import { Router } from "express";   

import {getAllStudents, getStudentById, addNewStudent, updateStudentDetails, deleteStudent
} from "../controller/type.controller.js";

const router=Router();

router.get('/getstudents',getAllStudents);
router.get('/getstudent/:id',getStudentById);
router.post('/addstudent',addNewStudent);
router.put('/updatestudent/:id',updateStudentDetails);
router.delete('/deletestudent/:id',deleteStudent);
export default router