import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';
const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={s.container}>
        <p className={s.text}>
          <FaUser className={s.clip} />
          {name}
        </p>
        <p className={s.text}>
          <BsFillTelephoneFill className={s.clip} />
          {number}
        </p>
        <button className={s.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
