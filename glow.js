// Functions to control the visibility of the sidebar in a navigation bar

// This function makes the sidebar visible by setting its display property to 'flex'
function showSidebar() {
    // Selects the element with the class 'sidebar'
    const sidebar = document.querySelector('.sidebar');
    // Changes the display style to 'flex' to make the sidebar appear
    sidebar.style.display = 'flex';
}

// This function hides the sidebar by setting its display property to 'none'
function hideSidebar() {
    // Selects the same sidebar element
    const sidebar = document.querySelector('.sidebar');
    // Changes the display style to 'none' to hide the sidebar
    sidebar.style.display = 'none';
}

// Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Selects all anchor elements with href attribute starting with #
    anchor.addEventListener('click', function (e) { // Adds click event listener to each anchor element
        e.preventDefault(); // Prevents default anchor behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({ // Scrolls to the target element smoothly
            behavior: 'smooth' // Specifies the scrolling behavior
        });
    });
});