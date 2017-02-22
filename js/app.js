
function initMap() {
  var nguyen = {lat: 53.576368, lng: 9.714191};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: nguyen
  });
  var marker = new google.maps.Marker({
    position: nguyen,
    map: map
  });
}

$(document).ready(function() {
    $('section').eq(0).show();
    $('ul').on('click', 'li', function() {
        $('section').eq($(this).index()).show().siblings('section:visible').hide();
    });
});
