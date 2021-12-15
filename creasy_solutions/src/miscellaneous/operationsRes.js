import Swal from 'sweetalert2'

export function succesCreate() {
    Swal.fire({
        title: 'Successful Registration',
        text: 'User has been created',
        icon: 'success'
    }).then(() => {
        window.location.reload(true);
    })
}

export function succesModify() {
    Swal.fire({
        title: 'Successful Modification',
        text: 'User has been modified',
        icon: 'success'
    }).then(() => {
        window.location.reload(true);
    })
}
