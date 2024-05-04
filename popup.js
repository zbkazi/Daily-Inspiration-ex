document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('quote').textContent = data.content + " - " + data.author;
      });
  
    document.getElementById('shareButton').addEventListener('click', function() {
      let quote = document.getElementById('quote').textContent;
      let url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote);
      window.open(url, '_blank');
    });
  });
  