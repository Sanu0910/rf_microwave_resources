document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Back to Top Button
    let backToTop = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    backToTop.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Loader Animation
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 1000);
});

// Search Functionality
function searchResources() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
