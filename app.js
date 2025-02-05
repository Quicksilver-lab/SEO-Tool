document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    await signUp(email, password);
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    await login(email, password);
});

async function startAnalysis() {
    const url = document.getElementById('website-url').value;
    if (!url) {
        alert('Please enter a website URL.');
        return;
    }

    // Clear previous results
    document.getElementById('results').innerHTML = '';

    // Perform SEO analysis
    await fetchPageSpeedInsights(url);
    await analyzeMetaTags(url);
    // Call additional analysis functions here
}
