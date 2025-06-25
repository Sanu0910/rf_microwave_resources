document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle (Dark by default, toggles to Light Mode)
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const icon = toggleButton.querySelector('i');

    // Check local storage for theme preference
    if (localStorage.getItem('theme') === 'light-mode') {
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        // Default is dark, icon should be sun
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light-mode');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark-mode'); // Or remove item
        }
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
// Visitor Counter using localStorage
document.addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("visitCount");
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    localStorage.setItem("visitCount", visitCount);
    
    // Display visit count on the page
    const visitorCountElement = document.getElementById("visitor-count");
    if (visitorCountElement) {
        visitorCountElement.innerText = visitCount;
    }

    // Dynamic Filter Buttons & Enhanced Search
    const filterContainer = document.getElementById('filter-container');
    const resourceSections = document.querySelectorAll('.container > h2');
    // const allCards = document.querySelectorAll('.card'); // This specific query isn't used directly in a way that its limited scope would be an issue,
                                                            // as the functions either re-query or the button creation iterates sections.
                                                            // Removing to avoid confusion, as filterAndSearchResources queries for all card types.
    const searchBar = document.getElementById('search-bar');
    let activeFilter = 'all';

    // Check if filterContainer and resourceSections exist. Card check is implicitly handled by sections.
    if (filterContainer && resourceSections.length > 0) {
        const allButton = document.createElement('button');
        allButton.classList.add('filter-button', 'active');
        allButton.textContent = 'All Categories';
        allButton.dataset.filter = 'all';
        filterContainer.appendChild(allButton);

        resourceSections.forEach(section => {
            const sectionTitle = section.textContent;
            // Use the h2 text content as a data-attribute for cards under it
            let currentSibling = section.nextElementSibling;
            while(currentSibling && !currentSibling.matches('h2')) {
                if (currentSibling.classList.contains('resources') || currentSibling.classList.contains('resources-matlab') || currentSibling.classList.contains('resources-rf')) {
                    currentSibling.querySelectorAll('.card, .card-matlab, .card-rf').forEach(card => {
                        card.dataset.category = sectionTitle.trim();
                    });
                }
                currentSibling = currentSibling.nextElementSibling;
            }

            const button = document.createElement('button');
            button.classList.add('filter-button');
            button.textContent = sectionTitle;
            button.dataset.filter = sectionTitle.trim();
            filterContainer.appendChild(button);
        });

        filterContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('filter-button')) {
                document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');
                activeFilter = event.target.dataset.filter;
                filterAndSearchResources();
            }
        });
    }

    // Call the new function if search bar exists
    if (searchBar) {
        searchBar.addEventListener('keyup', filterAndSearchResources);
    }
});

// Combined Filter and Search Functionality
function filterAndSearchResources() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    // Active filter is now a global variable 'activeFilter', updated by button clicks.

    const allCards = document.querySelectorAll('.card, .card-matlab, .card-rf'); // Ensure we get all card types

    allCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        const cardCategory = card.dataset.category; // Category set during button creation

        const matchesSearch = cardText.includes(searchInput);
        const matchesFilter = (activeFilter === 'all' || cardCategory === activeFilter);

        if (matchesSearch && matchesFilter) {
            card.style.display = ""; // Show card
        } else {
            card.style.display = "none"; // Hide card
        }
    });
}

// Original searchResources function is replaced by filterAndSearchResources
// function searchResources() {
//     let input = document.getElementById('search-bar').value.toLowerCase();
//     let cards = document.querySelectorAll('.card');

//     cards.forEach(card => {
//         let text = card.innerText.toLowerCase();
//         if (text.includes(input)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }
