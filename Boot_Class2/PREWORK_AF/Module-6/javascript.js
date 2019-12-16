let growBox = document.getElementById('button1').addEventListener('click', function() {
	/*document.getElementById('box').style.height = '250px';*/
	document.getElementById('box').style.width = '250px';
});

let changeBoxColor = document.getElementById('button2').addEventListener('click', function() {
	document.getElementById('box').style.backgroundColor = 'blue';
});

let fadeBox = document.getElementById('button3').addEventListener('click', function() {
	document.getElementById('box').style.opacity = '.3';
});

let resetBox = document.getElementById('button4').addEventListener('click', function() {
	/*document.getElementById('box').style.height = '150px';*/
	document.getElementById('box').style.width = '150px';
	document.getElementById('box').style.backgroundColor = 'orange';
	document.getElementById('box').style.opacity = '1';
});
