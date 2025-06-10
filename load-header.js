document.addEventListener("DOMContentLoaded", function() {
    fetch('Header.html')
        .then(response => response.text())
        .then(data => {
            // Inserta el header al inicio del body
            document.body.insertAdjacentHTML('afterbegin', data);
        });
});