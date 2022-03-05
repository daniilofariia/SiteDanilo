	
 //Scripts de boas vinda na caixa de alerta

	 // var nome=prompt("Digite Seu nome Aqui")
	// var res=confirm(nome+ " , you is human ?");
	// alert("Welcone" + "-" + nome);
// script do botao que toca a musica no video de fundo
	


// texto de boas vindas central
	var i=0;
	var txt="Site demonstrativo do meu portifolio como desenvolvedor Front-end, conteudos logo abaixo atualmente o site esta 100% responsivo"
	var vel=20;

function digitacao(){
	if(i<txt.length){
		document.getElementById("texto").innerHTML += txt.charAt(i);
		i++;
		vel=Math.floor(Math.random()*150);
		setTimeout(digitacao,vel)
		
	}
} 
// relogio do site 
function relogio(){
		var data=new Date();
		var hor=data.getHours();
		var min=data.getMinutes();
		var seg=data.getSeconds();

		if(hor<10){
			hor="0"+hor;

		}
		if(min<10){
			min="0"+min;

		}
		if(seg<10){
			seg="0"+seg;

		}

		var horas=hor+":"+min+":"+seg;

		document.getElementById("rel").value=horas;
	}

		var tempo=setInterval(relogio,1000);

		window.addEventListener("load",digitacao);


			var obj=document.getElementById("rel");
 	var ang=0;
 	var anima;
function gira(){

 	obj.style.transform="rotate("+ang+"deg)";
 	ang++;
 	if(ang>360){
 		ang=0;
 	}
 	anima=requestAnimationFrame(gira);
 }
  gira();

function Leiamais(){
	var pontos=document.getElementById("pontos");
	var maistexto=document.getElementById("mais");
	var btnleiamais=document.getElementById("btnleiamais");
	
	if(pontos.style.display === "none"){
	pontos.style.display="inline";
	 maistexto.style.display="none";
	  btnleiamais.innerHTML="Leia mais";
	  }else{
	  pontos.style.display="none";
	 maistexto.style.display="inline";
	  btnleiamais.innerHTML="Leia menos";
	  }
	}
