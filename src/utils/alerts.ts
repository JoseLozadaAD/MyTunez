import Swal from 'sweetalert2';

export const successAlert = (title: string, timer: number = 1500) => {
  Swal.fire({
    customClass: {
      container: 'my-swal',
    },
    position: 'center',
    icon: 'success',
    title,
    showConfirmButton: false,
    timer,
  });
};
