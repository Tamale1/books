import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';
import BookModal from './BookModel';

const BooksCard = ({ books }) => {
  return ( // or display a loading message, error message, etc.
    books?books:
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
         <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;