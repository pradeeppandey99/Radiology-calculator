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
    // Save assumptions logic
}

function loadAssumptions() {
    // Load assumptions logic
}

function showAdditionalInput(show) {
    document.getElementById('additionalRegistrarsInput').style.display = show ? 'block' : 'none';
}

function calculateManpower() {
    // Calculate manpower logic
}
