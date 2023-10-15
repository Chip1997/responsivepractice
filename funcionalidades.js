document.addEventListener('DOMContentLoaded', function () {
    var buttonsSection = document.getElementById('buttons-section');
    var optionsDropdown = document.querySelector('.navbar-nav .nav-item.dropdown');

    optionsDropdown.addEventListener('click', function () {
        if (buttonsSection.style.display === 'none' || buttonsSection.style.display === '') {
            buttonsSection.style.display = 'block';
        } else {
            buttonsSection.style.display = 'none';
        }
    });
});