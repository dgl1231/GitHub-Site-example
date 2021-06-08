(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); // NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function initMap() {
        const myLatLng = {
            lat: 37.782293,
            lng: -122.391240
        }
        const map = new google.maps.Map(
            document.getElementById('map'), {
                center: myLatLng,
                scrollwheel: false,
                zoom: 18
            }
        );
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'GitHub'
        });

    }

})(window, document)