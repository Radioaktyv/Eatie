src="https://polyfill.io/v3/polyfill.min.js?features=default"
src="process.env.GOOGLE_API"
let map;

function getRestaurants(){
    fetch("/getRestaurants").then(function (response) {
        return response.json();
    }).then(function (restaurants) {
        for(const restaurant of restaurants){

            const marker = {
                lat: Number.parseFloat(restaurant.lat),
                lng: Number.parseFloat(restaurant.lng)
            }
            console.log(marker)
            new google.maps.Marker({
                position: marker,
                map,
                title: restaurant.name,
                icon: '../public/img/marker2.png',


            });
        }
    });
}
function initMap() {
    map = new google.maps.Map(document.getElementById("googlemap"), {
        center: {lat: 50.07551655310682, lng: 19.908616867305803},
        zoom: 10

    });
    getRestaurants();


}