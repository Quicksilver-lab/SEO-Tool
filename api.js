async function fetchPageSpeedInsights(url) {
    const apiKey = 'AIzaSyB2EkJKebxYN_WpuDC47fizvAcUrjHfPFs';
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching PageSpeed Insights:', error);
    }
}

function displayResults(data) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerText = JSON.stringify(data, null, 2);
}

// Additional functions for broken link checking, meta tag analysis, etc. can be added here
