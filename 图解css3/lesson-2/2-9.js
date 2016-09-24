var gallery = document.getElementById('container');
var items = gallery.getElementsByTagName('li');
var btn = document.getElementsByTagName('button')[0];
var initialValue = 0;
var num = 0;
var len = items.length;

var selected = function(num) {
    for (var i = 0; i < len; i++) {
        items[i].classList.remove('selected');
    }
    items[num].classList.add('selected');
};

var handleClick = function(time) {
    var timer = setInterval(function() {
        initialValue > time && clearInterval(timer);
        num === len && (num = 0);
        selected(num++);
        initialValue = initialValue + 100;
    }, 200)
};

btn.onclick = function() {
    var time = parseInt(Math.random() * 5000 + 1000);
    initialValue = 0;
    handleClick(time);
}