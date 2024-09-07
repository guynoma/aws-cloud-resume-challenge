document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(elements)
    .map(function (element) {
      element.addEventListener('submit', function (event) {
        if (!element.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        element.classList.add('was-validated')
      }, false)
    })

  // Initialize Bootstrap popover
  new bootstrap.Popover(document.querySelector('[data-bs-toggle="popover"]'))
})
