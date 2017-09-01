/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function showAnn(){
//    document.getElementById("annCakes").style.visibility = "visible";
//    document.getElementById("birCakes").style.visibility = "hidden";
//    document.getElementById("badyCakes").style.visibility = "hidden";
//    document.getElementById("sportCakes").style.visibility = "hidden";
      document.getElementById("annCakes").style.display = "";
      document.getElementById("birCakes").style.display = "none";
      document.getElementById("badyCakes").style.display = "none";
      document.getElementById("sportCakes").style.display = "none";

}
function showBirth(){
//    document.getElementById("annCakes").style.visibility = "hidden";
//    document.getElementById("birCakes").style.visibility = "visible";
//    document.getElementById("badyCakes").style.visibility = "hidden";
//    document.getElementById("sportCakes").style.visibility = "hidden";
      document.getElementById("annCakes").style.display = "none";
      document.getElementById("birCakes").style.display = "";
      document.getElementById("badyCakes").style.display = "none";
      document.getElementById("sportCakes").style.display = "none";
      
} 
function showBaby(){
//    document.getElementById("annCakes").style.visibility = "hidden";
//    document.getElementById("birCakes").style.visibility = "hidden";
//    document.getElementById("badyCakes").style.visibility = "visible";
//    document.getElementById("sportCakes").style.visibility = "hidden";
      document.getElementById("annCakes").style.display = "none";
      document.getElementById("birCakes").style.display = "none";
      document.getElementById("badyCakes").style.display = "";
      document.getElementById("sportCakes").style.display = "none";
}
function showSport(){
//    document.getElementById("annCakes").style.visibility = "hidden";
//    document.getElementById("birCakes").style.visibility = "hidden";
//    document.getElementById("badyCakes").style.visibility = "hidden";
//    document.getElementById("sportCakes").style.visibility = "visible";
      document.getElementById("annCakes").style.display = "none";
      document.getElementById("birCakes").style.display = "none";
      document.getElementById("badyCakes").style.display = "none";
      document.getElementById("sportCakes").style.display = "";
}
function myMap() {
    var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.12),
    zoom: 10,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 }
 function details(){
     var modal = document.getElementById('myModal');
     var btn = document.getElementById("annCakes");
     var span = document.getElementsByClassName("close")[0];
            btn.onclick = function() {
                modal.style.display = "block";
            }
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
}
function detailsBir(){
     var modal = document.getElementById('myModal');
     var btn = document.getElementById("birCakes");
     var span = document.getElementsByClassName("close")[0];
            btn.onclick = function() {
                modal.style.display = "block";
            }
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
 }
 function detailsBabi(){
     var modal = document.getElementById('myModal');
     var btn = document.getElementById("badyCakes");
     var span = document.getElementsByClassName("close")[0];
            btn.onclick = function() {
                modal.style.display = "block";
            }
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
 }
 function detailsSport(){
     var modal = document.getElementById('myModal');
     var btn = document.getElementById("sportCakes");
     var span = document.getElementsByClassName("close")[0];
            btn.onclick = function() {
                modal.style.display = "block";
            }
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
 }
 
 function orderRef(){
     var num = Math.floor((Math.random() * 10000) + 1);
     alert("your order as been booked and your reffernce number is "+num);
 }