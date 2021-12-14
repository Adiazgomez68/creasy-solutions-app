import Swal from 'sweetalert2'

export function emptyState() {
    Swal.fire({
        title: 'Warning!',
        text: "State field cannot be empty",
        icon: 'warning'
    })
}