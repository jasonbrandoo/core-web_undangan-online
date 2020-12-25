import { toast } from 'react-toastify';

const notification = ({ message }) => {
  toast.dark(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default notification;
