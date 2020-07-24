 /**Show icons **/
 function showIcons(){}
 var rel= document.querySelectorAll(".relative");
 var icons = document.querySelector(".icons");
 rel.forEach(function(event){
	event.addEventListener('mouseenter',function(){
		 event.appendChild(icons);
		 icons.style.opacity='1';
		 icons.style.display='block';
		 icons.style.left='10%';
	 });
	event.addEventListener('mouseleave',function(){
		 event.appendChild(icons);
		 icons.style.opacity='0';
		 icons.style.display='none';
	 });

 });
 /**End Show icons **/
 /**Load More **/
document.getElementById('loadmore').addEventListener('click',loadMore);
var imageCol = document.getElementsByClassName('image');
function loadMore(){
	for(i=1 ; i<=imageCol.length ; i++){
		var imgElement = imageCol[i-1].lastElementChild.children[0].src;
		let removed =imgElement.lastIndexOf("img");
		let numberimgsrc=imgElement.slice(removed + 3);/*i want to reach to the number 
		of image that exist in image source ,so i can increase it and add
		another image when clicking load more*/
		console.log(numberimgsrc);
		let finNum = numberimgsrc.replace('.jpg','');
		var imageNum = parseInt(finNum);
		imageNum = imageNum + i;
		imageCol[i-1].innerHTML +=`<div class="relative">		
		<img src="images/img${imageNum}.jpg">
		</div>`;
		/*add icons*/
		var rel= document.querySelectorAll(".relative");
		var icons = document.querySelector(".icons");
		rel.forEach(function(event){
			event.addEventListener('mouseenter',function(){
				event.appendChild(icons);
				icons.style.opacity='1';
				icons.style.display='block';
				icons.style.left='10%';
			});
			event.addEventListener('mouseleave',function(){
				event.appendChild(icons);
				icons.style.opacity='0';
				icons.style.display='none';
			});
		});
		/*preview Images*/
		var imageprev= document.querySelectorAll("#preview");
		imageprev.forEach(function(image){
			image.addEventListener('click', previewImage);
		});
	}
}

 /**End Load More **/

/** open imagePreviewer **/
var imageprev= document.querySelectorAll("#preview");
imageprev.forEach(function(image){
	image.addEventListener('click', previewImage);

});
function previewImage(event){
	document.getElementById('imagePreviewer').style.display='block';
	var fullimgSrc =event.target.parentElement.parentElement.previousElementSibling.src;
	let removed =fullimgSrc.lastIndexOf("images/");
	//console.log(removed)
	let imgSrc=fullimgSrc.slice(removed);
	console.log(imgSrc);
	document.querySelector('#imagePreviewer img').src=imgSrc;
	
	

}
/**End open imagePreviewer**/

/** close imagePreviewer **/
function closeimagePreviewer(){
	document.getElementById('imagePreviewer').style.display='none';
}
/**End close imagePreviewer **/

/** open login form **/
function openLoginform() {
	document.getElementById("login").style.width = "60%";
}
/**End open login form **/

/** close login form **/
function closeLoginform() {
 	document.getElementById("login").style.width = "0%";
}
/**End close login form **/

/** open signUp form **/
function openSignupform(){
 	document.getElementById("signUp").style.height= "100%";
}
/**End open signUp form **/

/** close signUp form **/
function closeSignupform(){
 	document.getElementById("signUp").style.height= "0%";
}
/**End close signUp form **/
