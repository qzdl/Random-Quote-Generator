// http://api.forismatic.com/api/1.0/
$(document).ready(function() {
var quote;
var author;
  
  function chBackcolor(color) {
   document.body.style.background = color;
}
  
  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author) {
          $('#author').text('-  ' + author);
        } else {
          $('#author').text('- unknown');
        }
      }
    });
  }
  getNewQuote();

  $('.get-quote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
    chBackcolor(getRandomColor());
  });

  $('.share-quote').on('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '"' + '-' + author));
  })
});
