
    const searchTrigger = document.getElementById('search-trigger');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearch = document.getElementById('close-search');
    const searchInput = searchOverlay.querySelector('input');

    // Open Search
    searchTrigger.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        // Small timeout to allow transition before focusing
        setTimeout(() => searchInput.focus(), 300);
    });

    // Close Search
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
