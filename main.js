let shopbtn=document.querySelector('.logo-nav');
let shop=document.querySelector('.shop-cart');
let closebtn=document.querySelector('.close');
let favbtn=document.querySelectorAll('.fav');
let addbtn=document.querySelectorAll('.add');
let cartProduct=document.querySelector('.cart-product')
let totalprice=document.querySelector('.totalprice')
//panier btn
shopbtn.addEventListener('click',function(){
    shop.style.transform='translateX(0)';
});
//close btn
closebtn.addEventListener('click',function(){
    shop.style.transform='translateX(100%)';
});
//fav btn
for (var i = 0 ; i < favbtn.length; i++) {
    favbtn[i].addEventListener('click',function(e){
        let target=e.target;
        if(target.style.color=='grey'){
            target.style.color='red';
        }
        else{target.style.color='grey';}
    }  ) ; 
 }
   
 //add btn
     for (var i = 0 ; i < addbtn.length; i++) {
 addbtn[i].addEventListener('click',function(){
     
    shop.style.transform='translateX(0)';
    let product=this.parentElement.parentElement.parentElement;
    let name=product.querySelector('.name').innerHTML;
    let price=product.querySelector('.price').innerHTML;
    let img=product.querySelector('.img').src;
    let box=document.createElement('div');
    
    box.classList.add('box');

    box.innerHTML=' <img src='+img +' alt="" class="image"><div class="detail"><h3 class="names">'+name +'</h3><h5 class="price">'+ price +'</h5><div class="input"> <button class="down"><i class="fa-solid fa-minus"></i></button><input type="number" name="value" value="1" min="1"id="quantity"><button class="up"><i class="fa-solid fa-plus"></i></button></div> </div><i class="fa-solid fa-trash dlt"></i>'
    //sup btn
 
    if(document.querySelector('.names')!= null){
    let cartelement =document.querySelectorAll('.names')
    
    for (var m = 0 ; m < cartelement.length; m++){
        var a=0
    if(cartelement[m].innerText==name){
        alert('already in your cart ')
        a=1;
    }
    
    }if(a==0) {
        cartProduct.appendChild(box)}}
    else{
        cartProduct.appendChild(box)}
    let dltbtn=document.getElementsByClassName('dlt');
    for (var j = 0 ; j < (dltbtn.length); j++){
        dltbtn[j].addEventListener('click',function(){
            this.parentElement.remove()
         })
    }
    let input=document.querySelectorAll("input")
    let plusbtn=document.querySelectorAll(".up")
    let moinsbtn=document.querySelectorAll(".down")
    for (var m = 0 ; m < (input.length); m++){
  plusbtn[m].addEventListener('click',function(){
input[m].value=Number(input[m].value)+1;
  })
  moinsbtn[m].addEventListener('click',function(){
  input[m].value= Number(input[m].value)-1;
  
    })

    }


   ;})}
  
  