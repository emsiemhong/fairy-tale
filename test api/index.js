fetch('https://fairy-tale-api-inky.vercel.app/api/fairytales')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));