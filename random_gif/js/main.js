fetch('http://api.giphy.com/v1/gifs/random?api_key=ostxhpE6NcnX7XaK2LA7WvxmDeRsbcdj')
  .then((response) => {
    return response.json();
  })
  .then((gif) => {
    console.log(gif.data.image_url);
    document.querySelector('#gif-container').setAttribute('src', gif.data.image_url);
  })
