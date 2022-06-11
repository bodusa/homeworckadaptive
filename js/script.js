const future=document.querySelector(".that-in-the-future");
const form=document.querySelector(".form");
const button=document.querySelector(".btn-menu");
const menu=document.querySelector(".menu")

const futureConteiner=future.firstElementChild;
const futureTitle=futureConteiner.children[0];
const futureBlocks=futureConteiner.children[1];

const formConteiner=form.firstElementChild;
const formTitle=formConteiner.children[0];
const formForm=formConteiner.children[1];

function addClass(elem1,elem2){
	elem1.classList.add("active");
	elem2.classList.add("active");
}

let media1,media2,media3,media4;
let menuActive=false;

button.addEventListener("click",function(e){
	if(!menuActive){
		menu.classList.add("menu-active");
		button.classList.add("btn-menu-active");
	}else{
		menu.classList.remove("menu-active");
		button.classList.remove("btn-menu-active");
	}
	menuActive=!menuActive;
});

setInterval(function(){
	media1=(window.pageYOffset>=600 && window.innerWidth>1200);
	media2=(window.pageYOffset>=1203 && window.innerWidth<1200 && window.innerWidth>992);
	media3=(window.pageYOffset>=1243 && window.innerWidth<992 && window.innerWidth>756);
	media4=(window.pageYOffset>=1407 && window.innerWidth<756);

	if(media1 || media2 || media3 || media4){
		addClass(futureTitle,futureBlocks);
	}

	media1=(window.pageYOffset>=1000 && window.innerWidth>1200);
	media2=(window.pageYOffset>=1828 && window.innerWidth<1200 && window.innerWidth>992);
	media3=(window.pageYOffset>=1850 && window.innerWidth<992 && window.innerWidth>756);
	media4=(window.pageYOffset>=2225 && window.innerWidth<756);
	
	if(media1 || media2 || media3 || media4){
		addClass(formTitle,formForm);
		clearInterval();
	}
},10)