$(document).ready(function() {
    $('.buy').click(function() {
      var item = $(this).closest('.item');
      var itemName = item.find('img').attr('alt');
      var price = item.find('.price').text();
      alert('You bought ' + itemName + ' for ' + price);
      // You can add special effects or perform other actions here
    });
  });

  function navigateToPage(page) {
    window.location.href = page;
  }