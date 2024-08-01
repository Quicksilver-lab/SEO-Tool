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

async function analyzeMetaTags(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const title = doc.querySelector('title')?.innerText || 'No title tag found';
        const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || 'No description meta tag found';
        const keywords = doc.querySelector('meta[name="keywords"]')?.getAttribute('content') || 'No keywords meta tag found';

        const resultsElement = document.getElementById('results');
        resultsElement.innerHTML += `<h3>Meta Tag Analysis</h3>`;
        resultsElement.innerHTML += `<p><strong>Title:</strong> ${title}</p>`;
        resultsElement.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
        resultsElement.innerHTML += `<p><strong>Keywords:</strong> ${keywords}</p>`;
        
    } catch (error) {
        console.error('Error analyzing meta tags:', error);
    }
}

function displayResults(data) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML += `<h3>PageSpeed Insights</h3>`;
    resultsElement.innerText += JSON.stringify(data, null, 2);
}
