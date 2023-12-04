import express from "express";
const router = express.Router()
import { Book } from "../models/bookModel.js";




// routes to save a book
router.post('/', async(req,res)=>{
    try {
      if ( !req.body.title ||
          !req.body.author ||
          !req.body.publishYear) 
          {
              return res.status(400).send({message:'All feilds are required'})
      }
      const newBook= {
          title: req.body.title,
          author: req.body.author,
          publishYear: req.body.publishYear
      }
    
      const book = await Book.create(newBook)
      return res.status(201).send(book)
  
    } catch (error) {
      console.log(error.message);
      res.status(500).send({message:error.message})
    }    
  })
  //Route to fetch all books from the database
  router.get('/',async (req,res)=>{
  try {
      const books = await Book.find({})
     console.log("Books:",books);
      res.status(200).send({
      count:books.length,
      books :books
      })
  } catch (error) {
      console.log(error.message);
      res.status(500).send({message:error.message})
  }
  })
  
  //get one book from the database
  router.get('/:id',async (req,res)=>{
      try {
          const {id}= req.params
          const book = await Book.findById(id)
          res.status(200).json(book)
      } catch (error) {
          console.log(error.message);
          res.status(500).send({message:error.message})
      }
      })
  
      //Route for updating a book
      router.put('/:id',async(req,res)=>{
          try {
              if ( !req.body.title ||
                  !req.body.author ||
                  !req.body.publishYear) 
                  {
                      return res.status(400).send({message:'All feilds are required'})
              }
              const {id}= req.params
              const result = await Book.findByIdAndUpdate(id, req.body)
              if (!result) {
                return res.status(404).json({message:'Book not found'}) 
              }
              return res.status(200).send({message:'Book updated successfully'})
               
              
          } catch (error) {
              console.log(error.message);
              res.status(200).send({message:error.message})
          }
      
      })
      //Route for deleting a book
      router.delete('/:id',async(req,res)=>{
          try {
              const {id}= req.params
              const result = await Book.findByIdAndDelete(id)
              if (!result) {
                  return res.status(404).json({message:'Book not found'})   
              }
              return res.status(200).send({message:'Book Deleted successfully'})
              
          } catch (error) {
             console.log(error.message); 
             res.status(200).send({message:error.message})
          }
      })

      export default router