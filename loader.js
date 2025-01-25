// Function to load HTML components
function loadComponent(componentName, targetId) {
    fetch(`${componentName}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading component:', error);
            document.getElementById(targetId).innerHTML = 'Error loading component';
        });
}

// Load components when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('section1', 'section1');
    loadComponent('section2', 'section2');
    loadComponent('section3', 'section3');
    loadComponent('section4', 'section4');
    loadComponent('section5', 'section5');
    loadComponent('section6', 'section6');
    loadComponent('section7', 'section7');
});