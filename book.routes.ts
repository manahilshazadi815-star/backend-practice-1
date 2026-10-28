import { Router } from "express";   

import { addbook,getbook,updatebook,deleteBook} from "../controller/book.controller.js";

const router=Router();

router.get('/getbook',getbook);
router.post('/addbook',addbook);
router.put('/updatebook/:id',updatebook);
router.delete('/deletebook/:id',deleteBook);
export default router