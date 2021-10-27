function place() {
    let place = Math.floor(Math.random() * 7)
    return place;
}
var mymap = L.map('mapid' , {
    scrollWheelZoom: false
}).setView([43.610769,3.876716], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1
}).addTo(mymap);

L.marker([43.57337648607997,3.9515458738433917]).addTo(mymap)
.bindPopup("<b>Station : Perol </b><br /> Places Total : 7 libre : "+ place() +" <br /> <img src='asset/js/img/pexels-kindel-media-9800029.jpg' alt='image de station' height='150px' width='250'> ").openPopup();

L.marker([43.610884867751416,3.875861982070168]).addTo(mymap)
.bindPopup("<b>Station : Montpellier centre </b><br /> Places Total : 7 libre :  "+ place() +" <br /> <img src='https://www.maxinergy.fr/110-large_default/ombriere-7kw.jpg' alt='image de station' height='150px' width='250'> ").openPopup();

L.marker([43.57570055577545,3.8267131840812763]).addTo(mymap)
.bindPopup("<b>Station : Saint-jean-de-Védas Mairie centre </b><br /> Places Total : 7 libre : "+ place() +" <br /> <img src='https://www.siliceo.fr/wp-content/uploads/Installation-ombrie%CC%80res-de-parking-panneaux-solaires-l-Silice%CC%81o.JPG-scaled.jpeg' alt='image de station' height='150px' width='250'> ").openPopup();

L.marker([43.6041005,3.9191898]).addTo(mymap)
.bindPopup("<b>Station : odysseum  </b><br /> Places Total : 7 libre : "+ place() +" <br /> <img src='https://dualsun.com/wp-content/uploads/realisation-perpignan-dualsun-solaire-ombriere-piscine.jpg' alt='image de station' height='150px' width='250'> ").openPopup();


var popup = L.popup();