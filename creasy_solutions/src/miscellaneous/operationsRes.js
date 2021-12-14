import Swal from 'sweetalert2'

export function succesModify() {
    Swal.fire({
        title: 'Successful Modification',
        text: 'User has been modified',
        icon: 'success'
    }).then(() => {
        window.location.reload(true);
    })
}

export function succesDelete() {
    Swal.fire({
        title: 'Are you sure delete this user?',
        text: 'This user will be permanently deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'User has been deleted.',
            'success'
          ).then(() => {
                window.location.reload(true);
            })
        }
    })
}