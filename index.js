var items = document.getElementsByClassName('item');
var prevLeft = document.getElementById('prevLeft');
var prevRight = document.getElementById('prevRight');
var point = document.getElementsByClassName('point');
var index = 0;
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item'; 
    }
    for (var j = 0; j < point.length; j++) {
        point[j].className = 'point'; 
    }
};
var goIndex = function (){
    clearActive();
    items[index].className = 'item active';
    point[index].className = 'point active';
};
// var point = function () {
//     clearActive();
//     items[index].className = 'point active';
// };
var goNext = function (){
    if (index < items.length-1) {
        index++;
    }else{
        index = 0;
    }
    goIndex();
};
var goPre = function () {
    if (index == 0) {
        index = 4;
    }else{
        index --;
    }
    goIndex();
};
prevRight.addEventListener('click', function (){
    goNext();
});
prevLeft.addEventListener('click', function () {
    goPre();
});
for(var i = 0; i < point.length; i++){
    point[i].addEventListener('click',function (){
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
    });
}

function autoPlay () {
    timer = setInterval(function () {
        goNext();
    },5000);
}
autoPlay();







































// var clearActive = function (){
//     for (var i = 0; i < items.length; i++) {
//         items[i].className = 'item';
//     }
// };
// var goIndex = function (){
//     clearActive();
//     items[index].className = 'item active';

// };
// var goNext = function (){
//     if (index<4) {
//         index ++;
//     }else{
//         index = 0;
//     }
//     goIndex();
// };
// var goPre = function (){
//     if (index == 0) {
//         index = 4;
//     }else{
//         index --;
//     }
//     goIndex();
// };
// prevRight.addEventListener('click', function () {
//     goNext();
// });
// prevLeft.addEventListener('click', function () {
//     goNext();
// });