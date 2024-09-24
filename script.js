document.addEventListener('DOMContentLoaded', () => {
    loadAssumptions();
    showPage('dynamic');
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav ul li a[onclick="showPage('${pageId}')"]`).classList.add('active');
}

function saveAssumptions() {
    const assumptions = {
        manhours: parseFloat(document.getElementById('manhours').value) || 0,
        // Add other assumption values here
    };
    localStorage.setItem('assumptions', JSON.stringify(assumptions));
    alert('Assumptions saved successfully!');
}

function loadAssumptions() {
    let assumptions = JSON.parse(localStorage.getItem('assumptions'));
    if (!assumptions) {
        // Default assumptions if none are saved
        assumptions = {
            manhours: 200,
            // Add other default assumption values here
        };
        localStorage.setItem('assumptions', JSON.stringify(assumptions));
    }

    // Fill in the form with the loaded or default assumptions
    document.getElementById('manhours').value = assumptions.manhours;
    // Set other assumption fields
}

function showAdditionalInput(show) {
    document.getElementById('additionalRegistrarsInput').style.display = show ? 'block' : 'none';
}

function calculateManpower() {
    // Implement the manpower calculation logic here
    // You can access the input values from the HTML form elements
    // and perform the necessary calculations
    // Update the #result element with the calculated values
}
