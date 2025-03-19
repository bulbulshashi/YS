function loadData() {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (!product) {
      document.getElementById("pro-details").innerText = "No product selected!";
      return;
  }





let productInfo =[

 



]






  let div1 = document.createElement("div");
  div1.classList.add("pro-image-sec");

  let img = document.createElement("img");
  img.classList.add("mainImg");
  img.src = product.image1;
 

  div1.appendChild(img);

let imageBottom = document.createElement("div");

imageBottom.classList.add("images-bottom");




let img1Btn = document.createElement('button');
img1Btn.classList.add('images-bottom-button');

let img1 = document.createElement('img');
img1.classList.add('mini-img');

img1.src = product.image1;

img1Btn.onclick = () =>{
  img.src = img1.src
  productInfo[4]= img.src
}


let img2Btn = document.createElement('button');
img2Btn.classList.add('images-bottom-button');
let img2 = document.createElement('img');
img2.classList.add('mini-img');

img2.src =product.image2;


img2Btn.onclick = () =>{
  img.src = img2.src;
  productInfo[4]= img.src
}


let img3Btn = document.createElement('button');
img3Btn.classList.add('images-bottom-button');

let img3 = document.createElement('img');
img3.classList.add('mini-img');

img3.src =product.image3;


img3Btn.onclick = () =>{
  img.src = img3.src;
  productInfo[4]= img.src;
}


let img4Btn = document.createElement('button');
img4Btn.classList.add('images-bottom-button');


let img4 = document.createElement('img');
img4.classList.add('mini-img');

img4.src =product.image4;

img4Btn.onclick = () =>{
  img.src = img4.src;
  productInfo[4]= img.src
}



img1Btn.appendChild(img1);
img2Btn.appendChild(img2);
img3Btn.appendChild(img3);
img4Btn.appendChild(img4);



imageBottom.appendChild(img1Btn);
imageBottom.appendChild(img2Btn);
imageBottom.appendChild(img3Btn);
imageBottom.appendChild(img4Btn);

div1.appendChild(imageBottom);


  document.getElementById("pro-details").appendChild(div1);


let div2 = document.createElement("div");
div2.classList.add("pro-details-sec");

let detBrand = document.createElement('h5');
let detTitle = document.createElement('h2');
let detPrice = document.createElement('h1');


let temprice ;
temprice=product.price;

detBrand.innerText = product.brand;
detTitle.innerText = product.name;
detPrice.innerText = product.price +""+"BDT";



let detQuantity = document.createElement('input');
detQuantity.classList.add('pro-quantity');
detQuantity.type = 'number';
detQuantity.value ='01'
productInfo[5] = detQuantity.value
detQuantity.onchange =()=>{
  productInfo[5] = detQuantity.value;
  console.log(productInfo)
}




// let finalSize = 'NA';





// let size =document.createElement('div');
// size.classList.add('size');

// let M = document.createElement('button');
// M.classList.add('sizes');
// M.innerText = "M";

// let L = document.createElement('button');
// L.classList.add('sizes');
// L.innerText = "L";

// let XL = document.createElement('button');
// XL.classList.add('sizes');
// XL.innerText = "XL";

// let XXL = document.createElement('button');
// XXL.classList.add('sizes');
// XXL.innerText = "XXL";


// M.onclick = ()=>{
//   L.style.color = '#463F3A';
//   L.style.backgroundColor = " #ffffff"
//     M.style.backgroundColor = '#463F3A';
//   M.style.color = " #ffffff"
//     XL.style.color = '#463F3A';
//   XL.style.backgroundColor = " #ffffff"
//     XXL.style.color = '#463F3A';
//   XXL.style.backgroundColor = " #ffffff"
//   finalSize = 'M';
//   productInfo[3]= finalSize;
//   console.log(productInfo)
// }




// L.onclick = ()=>{
//   L.style.backgroundColor = '#463F3A';
//   L.style.color = " #ffffff"
//     M.style.color = '#463F3A';
//   M.style.backgroundColor = " #ffffff"
//     XL.style.color = '#463F3A';
//   XL.style.backgroundColor = " #ffffff"
//     XXL.style.color = '#463F3A';
//   XXL.style.backgroundColor = " #ffffff"
//   finalSize = 'L';
//   productInfo[3]= finalSize;
//   console.log(productInfo)
// }





// XL.onclick = ()=>{
//   L.style.color = '#463F3A';
//   L.style.backgroundColor = " #ffffff"
//     M.style.color = '#463F3A';
//   M.style.backgroundColor = " #ffffff"
//     XL.style.backgroundColor = '#463F3A';
//   XL.style.color = " #ffffff"
//     XXL.style.color = '#463F3A';
//   XXL.style.backgroundColor = " #ffffff"
//   finalSize = 'XL';
//   productInfo[3]= finalSize;
//   console.log(productInfo);
// }




// XXL.onclick = ()=>{
//   L.style.color = '#463F3A';
//   L.style.backgroundColor = " #ffffff"
//     M.style.color = '#463F3A';
//   M.style.backgroundColor = " #ffffff"
//     XL.style.color = '#463F3A';
//   XL.style.backgroundColor = " #ffffff"
//     XXL.style.backgroundColor = '#463F3A';
//   XXL.style.color = " #ffffff"
//   finalSize = 'XXL';
//   productInfo[3]= finalSize;
//   console.log(productInfo);
// }

// size.appendChild(M);
// size.appendChild(L);
// size.appendChild(XL);
// size.appendChild(XXL);


let para = document.createElement('p');
para.classList.add('pro-more-det');
para.innerText = product.details;


let addBtn = document.createElement('button');

addBtn.classList.add('add-to-cart-main');
addBtn.innerText = 'Add to Cart'

let viewBtn = document.createElement('button');

viewBtn.classList.add('add-to-cart-main');
viewBtn.innerText = 'View Cart';





addBtn.onclick =() =>toCart();

viewBtn.style.display ="none";

viewBtn.onclick =() =>{
  window.location.href = "cart.html";
};


div2.appendChild(detBrand);
div2.appendChild(detTitle);
div2.appendChild(detPrice);
div2.appendChild(detQuantity);
// div2.appendChild(size);
div2.appendChild(para);
div2.appendChild(addBtn);
div2.appendChild(viewBtn);
document.getElementById("pro-details").appendChild(div2);






productInfo[0]= detBrand.innerText;
productInfo[1]= detTitle.innerText;
productInfo[2]= temprice;
// productInfo[3]=finalSize;
productInfo[4]= img.src;
productInfo[5]= detQuantity.value;


console.log(productInfo)


let proCount=0;



function toCart() {

  viewBtn.style.display ="block";
proCount++

productInfo[6]= proCount;


  localStorage.setItem("proToCart", JSON.stringify(productInfo));
 
  console.log(productInfo)
}

}

loadData(); 
