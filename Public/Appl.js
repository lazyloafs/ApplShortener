document.getElementById('shortenBtn').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    if (!urlInput) {
      alert('Please enter a URL.');
      return;
    }
    
    const shortenedUrl = `https://appl.short/${Math.random().toString(36).substring(2, 8)}`;
    const shortenedUrlElement = document.getElementById('shortenedUrl').querySelector('span');
    shortenedUrlElement.textContent = shortenedUrl;
    
    document.getElementById('shortenedUrlContainer').style.display = 'block';
    
    // Note: In a real application, you'd map the shortened URL to the original URL in a database for persistence.
  });
  
  document.getElementById('copyBtn').addEventListener('click', function() {
    const shortenedUrl = document.getElementById('shortenedUrl').querySelector('span').textContent;
    navigator.clipboard.writeText(shortenedUrl).then(() => {
      alert('Shortened URL copied to clipboard!');
    }, (err) => {
      console.error('Error in copying text: ', err);
    });
  });
  