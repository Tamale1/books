import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Deletebook = () => {
  const[loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook=()=>{
  setLoading(true)
  axios
  .delete(`http://localhost:2222/books/${id}`)
  .then(()=>{
  setLoading(true)
  enqueueSnackbar('Book has been deleted successfully',{variant: 'success'})
  navigate('/')
  })
  .catch((error)=>{
    enqueueSnackbar('Error', { variant: 'error' });
  console.log('An error occured while deleting',error)
  })
  }


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text 3x1 my-4'>Delete Book</h1>
      {loading ? <Spinner/> :''}
      <div className='flex flex-col items-center border-red-50 border-2 rounded-x1 w-[600px] p-8 mx-auto'>
        <h3 className='text-2x1'>Are you sure you want to delete this book?</h3>


        <button className='p-2 m-8 bg-red-500 text-white w-full ' onClick={handleDeleteBook}>
          Delete
        </button>

      </div>
    </div>
  )
}

export default Deletebook