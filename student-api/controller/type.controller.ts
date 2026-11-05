import{response, type Request, type Response} from 'express';
const arrOfObj=[
    {
        id:1,
        name:'manahil',
        age:20,
        email:'manahil@example.com',
        course:'computer science',
        isActive:true
    },
    {
        id:2,
        name:'maryam',
        age:22,
        email:'maryam@example.com',
        course:'mathematics',
        isActive:false
    },
    {
        id:3,
        name:'ali',
        age:21,
        email:'ali@example.com',
        course:'physics',
        isActive:true
    }
];
type studentIndex={
    id?:number;
    name?:string;
    age?:number;
    email?:string;
    course?:string;
    isActive?:boolean;
};
export const getAllStudents=(req:Request<studentIndex>,res:Response)=>{
    try{
        res.status(200).json({ 
            message:'Students retrieved successfully',
            students:arrOfObj
        });
    } catch(error){
        res.status(500).json({
            message:'Error retrieving students',
        });
    }
};
export const getStudentById=(req:Request<{id:number}>,res:Response)=>{
    try{
        res.status(200).json({
            message:'Student retrieved successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error retrieving student'
        });
    }
    const studentId=Number(req.params.id);
    const student=arrOfObj.find(student=>student.id===studentId);   
    if(!student){
        return res.status(404).json({
            message:'Student not found'
        });
    }
    res.status(200).json({
        message:'Student retrieved successfully',
        student
    });
};  
export const addNewStudent=(req:Request<studentIndex>,res:Response)=>{
    try{
        res.status(201).json({
            message:'Student added successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error adding student'
        });
    }
    if(!req.body.name || !req.body.age || !req.body.email || !req.body.course || req.body.isActive===undefined){
        return res.status(400).json({  
            message:'Please provide all required fields'
        });
    }
    const newStudent={
        id:arrOfObj.length>0 ? Math.max(...arrOfObj.map(s=>s.id))+1 : 1,
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        course:req.body.course,
        isActive:req.body.isActive
    };
    arrOfObj.push(newStudent);
    res.status(201).json({
        message:'Student added successfully',
        student:newStudent
    });
};
export const updateStudentDetails=(req:Request<{id:number}>,res:Response)=>{
    try{
        res.status(200).json({
            message:'Student updated successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error updating student'
        });
    }
        const studentId=Number(req.params.id);
        const studentIndex=arrOfObj.findIndex(student=>student.id===studentId);
        if(studentIndex===-1){
            return res.status(404).json({
                message:'Student not found'
            });
        }
        const updatedStudent={
            ...arrOfObj[studentIndex],
            ...req.body
        };
        arrOfObj[studentIndex]=updatedStudent;
        res.status(200).json({
            message:'Student updated successfully',
            student:updatedStudent
        });
};
export const deleteStudent=(req:Request<{id:number}>,res:Response)=>{
    try{
        res.status(200).json({
            message:'Student deleted successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error deleting student'
        });
    }
        const studentId=Number(req.params.id);
        const studentIndex=arrOfObj.findIndex(student=>student.id===studentId);
        if(studentIndex===-1){
            return res.status(404).json({
                message:'Student not found'
            });
        }
        arrOfObj.splice(studentIndex, 1);
        res.status(200).json({
            message:'Student deleted successfully'
        });
    
    }
   