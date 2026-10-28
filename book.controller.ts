import { type Request,type Response } from "express";
const arrofobj=[
    {
        id:1,
        auther:'manahil',
         book:'book1',
    },
{
    id:2,
    auther:'maryam',
    book:'book2'
}
];
type bookIndex={
    auther?:string;
    book?:string;
};
export const getbook=(req:Request,res:Response)=>{
    try{
        res.status(200).json({
            message:'Books retrieved sucesfully',
            books:arrofobj
        });
    } catch(error){
        res.status(500).json({
            message:'Error retrieving books',
            error:error
        });
    }
};
export const addbook=(req:Request,res:Response)=>{
    if(!req.body.auther || !req.body.book){
        return res.status(400).json({
            message:'Author and book are required'
        });
    }
    arrofobj.push(req.body);
    res.status(201).json({
        message:'Book added successfully',
        books:arrofobj
    });
}
export const updatebook=(req:Request,res:Response)=>{
    const bookId=Number(req.params.id);
    const bookIndex=arrofobj.findIndex(book=>book.id==bookId);
    if(bookIndex===-1){
        return res.status(404).json({
            message:'Book id is not found'
        });
    };
    arrofobj[bookIndex] = {...arrofobj[bookIndex],...req.body};
res.status(200).json({
    message:'Book updated successfully',
    book:arrofobj[bookIndex]
});
}
 export const deleteBook = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index =arrofobj.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = arrofobj.splice(index,1)[0];

  return res.status(200).json({
    message: "Book deleted successfully",
    book: deletedBook
  });
};

    
