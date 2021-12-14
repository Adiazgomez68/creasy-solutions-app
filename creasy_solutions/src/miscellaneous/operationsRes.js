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
