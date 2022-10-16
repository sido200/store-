let shopbtn=document.querySelector('.logo-nav');
let shop=document.querySelector('.shop-cart');
let closebtn=document.querySelector('.close');
let favbtn=document.querySelectorAll('.fav');
let addbtn=document.querySelectorAll('.add');
var grid=document.querySelectorAll('.grid');
let cartProduct=document.querySelector('.cart-product')
let totalprice=document.querySelector('.totalprice')
let buy=document.querySelector('.buy')

for (var k = 0 ; k < favbtn.length; k++){
grid[k].addEventListener('mouseover',function(){
    let img=this.querySelectorAll('img')
    img[0].style.display='none'
    img[1].style.display='block'
    
},true)
grid[k].addEventListener('mouseout',function(){
    let img=this.querySelectorAll('img')
    img[0].style.display='block'
    img[1].style.display='none'
    
},true)}


    




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

    box.innerHTML =' <img src='+img +' alt="" class="image"><div class="detail"><h3 class="names">'+name +'</h3><h5 class="price">'+ price +'</h5><div class="input"> <button class="down"><i class="fa-solid fa-minus"></i></button><input type="number" name="value" value="1" min="1"id="quantity"><button class="up"><i class="fa-solid fa-plus"></i></button></div> </div><i class="fa-solid fa-trash dlt"></i>'

    if(document.querySelector('.names')!= null){
    let cartelement =document.querySelectorAll('.names')
    
    for (var m = 0 ; m < cartelement.length; m++){
        var a=0
    if(cartelement[m].innerText==name){
        alert('already in your cart ')
        a=1;
    }
    
    }if(a==0) {
        cartProduct.appendChild(box)
        var rprice=Number(price.slice(0, -1));
       
        var rtotal=Number( totalprice.innerText.slice(0, -1))
        
         rtotal=rtotal+rprice 
         
         totalprice.innerHTML=rtotal+'$';}
        }
    else{
        cartProduct.appendChild(box)
        let rprice=Number(price.slice(0, -1));
        var rtotal=Number( totalprice.innerText.slice(0, -1))
         rtotal=rtotal+rprice  
         totalprice.innerHTML=rtotal+'$';}
          
         
        
//sup btn
    let dltbtn=document.getElementsByClassName('dlt');
    for (var j = 0 ; j < (dltbtn.length); j++){
        dltbtn[j].addEventListener('click',function(){
         let rprice =this.parentElement.querySelector('.price').innerText.slice(0, -1);
       let qnt=this.parentElement.querySelector('input').getAttribute('value');
            rtotal=rtotal-rprice 
            totalprice.innerHTML=(rtotal*qnt)+'$';
            this.parentElement.remove()
         })
    }
    
    //quantity button
    const plusbtn = document.getElementsByClassName("up");
         const moinsbtn = document.getElementsByClassName("down");
         for (let m = 0; m < plusbtn.length; m++) {

           plusbtn[m].addEventListener("click", function (event) {
        

          console.log(this.parentElement)
            
            let input =this.parentElement.querySelector("#quantity");
             input.setAttribute(
               "value",
               Number(input.getAttribute("value")) + 1 //should have used getAttribute and setAttribute
             );
             totalprice.innerHTML=(rtotal*Number(input.getAttribute("value")))+'$'
             
           });
           moinsbtn[m].addEventListener("click", function () {
          
            let input =this.parentElement.querySelector("#quantity");
             if(Number(input.getAttribute("value"))>1){
             input.setAttribute(
               "value",
               Number(input.getAttribute("value")) - 1 //should have used getAttribute and setAttribute
               
             );
             totalprice.innerHTML=(rtotal*Number(input.getAttribute("value")))+'$'
             ;}
             
             
           });
           
         }
  
   ;})}
      //buy
      buy.addEventListener('click',function(){
     elm=this.parentElement.querySelectorAll('.box');
     console.log(elm);
       if(elm.length!=0){
        alert("successful purchase")
        for (var s = 0 ; s < (elm.length); s++){
            elm[s].remove();
            let ttl=document.querySelector('.totalprice')
            ttl.innerHTML=0+'$'
            
           }
           
       }
       else{alert("add product")}
      })
   


  
  