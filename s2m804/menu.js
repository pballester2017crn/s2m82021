var image= document.getElementsByClassName('imagen');
document.getElementById('bici').addEventListener('mouseover',bici);
function bici(){
	image[0].src="img/menu/general_road.jpg";
}

document.getElementById('orca').addEventListener('mouseover',orca);
function orca(){
	image[0].src="img/menu/orca.jpg";
}
document.getElementById('orcaero').addEventListener('mouseover',orcaero);
function orcaero(){
	image[0].src="img/menu/orcaAero.jpg";
}
document.getElementById('avant').addEventListener('mouseover',avant);
function avant(){
	image[0].src="img/menu/avant.jpg";
}
document.getElementById('terra').addEventListener('mouseover',terra);
function terra(){
	image[0].src="img/menu/terra.jpg";
}
document.getElementById('orcap').addEventListener('mouseover',orcap);
function orcap(){
	image[0].src="img/menu/personalizar-menu-orca.png";
}
document.getElementById('orcaerop').addEventListener('mouseover',orcaerop);
function orcaerop(){
	image[0].src="img/menu/menu-personalizar-orcaaero.png";
}
document.getElementById('terrap').addEventListener('mouseover',terrap);
function terrap(){
	image[0].src="img/menu/menu-personalizar-terra.jpg";
}