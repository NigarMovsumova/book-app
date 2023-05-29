import './book.css';
import swift_book from '../../img/swift_book.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Book() {
  return (
    <div className="book">
      <FontAwesomeIcon icon="fa-regular fa-star-sharp" size="2xl" />
      <img src={swift_book} />
      <h6>10.99</h6>
      <button>Cart</button>
    </div>
  );
}

export default Book;
