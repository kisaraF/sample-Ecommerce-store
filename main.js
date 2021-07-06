//Selecting DOM elements needed
let homeNavSearchBtn = document.getElementById('searchBtn');
let homeInput = document.getElementById('searchText');
let homeFeed = document.querySelectorAll('.grid-card-title');
let errorMsgHomeFeed = document.querySelector('.not-found');

let productInput = document.querySelector('.productInput');
let productBtn = document.querySelector('.productBtn');
let productName = document.querySelectorAll('.product-name');
let errorMsgProcductFeed = document.querySelector('.productError');
let productCard = document.querySelectorAll('.product-card');

let reviewCard = document.querySelectorAll('#cardId');

//console.log(homeFeedParent);

//Game Search Function
homeNavSearchBtn.addEventListener('click' , getResult);
homeInput.addEventListener('keyup' , getResultKey);

function getResultKey(e){
	if(e.keyCode === 13){
		getResult();
	}	
}

function getResult(homeNavSearch){
	homeNavSearch = document.getElementById('searchText').value;
	//console.log(homeNavSearch.value);
	homeFeed.forEach(function(node){
		let titles = node.textContent.toLowerCase();
		//console.log(titles.toLowerCase());
		if(titles.includes(homeNavSearch)){
			node.parentNode.className = "displayEl";
			console.log(node.parentNode)	
			if(node.parentNode.classList.contains('displayEl')){
				node.parentNode.style.display = 'block';
			}else{
				node.parentNode.style.display = "none";
			}
			homeInput.value = '';

		}else{
			node.parentNode.style.display = "none";
			homeInput.value = '';
			//errorMsgHomeFeed.style.display = 'block';
			//console.log("Not Found");
		}
	})
}

//Product Search Function
productBtn.addEventListener('click' , productResult);
productInput.addEventListener('keyup' , productResultKey);

function productResultKey(e){
	if(e.keyCode === 13){
		productResult();
	}
}

function productResult(productSearch){
	productSearch = document.querySelector('.productInput').value;

	productName.forEach(function(nodeItem){
		let pNames = nodeItem.textContent.toLowerCase();

		if(pNames.includes(productSearch)){
			nodeItem.parentNode.className = "displayEl";
			console.log(nodeItem.parentNode)
			if(nodeItem.parentNode.classList.contains('displayEl')){
				nodeItem.parentNode.style.display = 'block';
				nodeItem.parentNode.style.textAlign = 'center';
				nodeItem.parentNode.style.border = '3px solid #78866b';
			}else{
				nodeItem.parentNode.style.display = "none";
			}
			productInput.value = '';

		}else{
			nodeItem.parentNode.style.display = "none";
			productInput.value = '';
			//errorMsgProcductFeed.style.display = 'block';
			//console.log("Not Found");
		}
	})
}

//Review Section
//Selecting Elements
let sliderBox = document.querySelectorAll('.sliderBox');

let counter = -1;
/*
setInterval(function time(){
		counter ++;
		let prevCount = counter -1;		
		console.log(`Current: ${counter}`);
		console.log(`Previous: ${prevCount}`);
		if(counter === 3){
			counter = -1;			
			sliderBox.forEach((node) => {
				node.style.display = 'none';
			})	
					
		}		
		sliderBox[counter].style.display= 'block';
		sliderBox[prevCount].style.display= 'none';
},2000);*/

function time(){
	counter ++;
	let prevCount = counter -1;		
	/*console.log(`Current: ${counter}`);
	console.log(`Previous: ${prevCount}`);*/
	if(counter === 3){
		counter = -1;			
		sliderBox.forEach((node) => {
			node.style.display = 'none';
		})	
		sliderBox[0].style.display= 'block';		
	}		
	sliderBox[counter].style.display= 'block';
	sliderBox[prevCount].style.display= 'none';
};

setInterval(time, 2000);