import Swal from 'sweetalert2'

export function emptyForm() {
    Swal.fire({
        title: 'Warning!',
        text: "Please complete all fields",
        icon: 'warning'
    })
}