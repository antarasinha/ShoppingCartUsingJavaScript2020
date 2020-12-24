console.log("hello here");
//correct th equantity elements




let cart=document.querySelectorAll('.shop-item-button');
let removebutton=document.querySelectorAll('.btn-danger');

for(let i=0;i<removebutton.length;i++)
{
    let total=document.querySelector('.cart-total-price');
    total=parseInt(total);
    removebutton[i].addEventListener('click',function(event){
       var btns=event.target
        btns.parentElement.parentElement.remove();
        updatecart();
    })
}




/*
for(let i=0; i<cart.length;i++)
{
    cart[i].addEventListener('click',()=>{
        console.log("added successfully");
        cartnum();
        let productDetail={
            prod_name: document.querySelector('.shop-item-title').textContent,
            prod_img: 'jhcjdv',
            prod_price: 'hfcdfj',
            prod_incart:0
        };
        console.log(productDetail);
    })
}*/

function updatecart(){
    var total=0;
    var items=document.getElementsByClassName('cart-items')[0];
    var rows=items.getElementsByClassName('cart-row');
    for(var i=0;i<rows.length;i++)
    {
        var price=rows[i].getElementsByClassName('cart-price')[0];
        var quantity=rows[i].getElementsByClassName('cart-quantity-input')[0];
       
        price=parseFloat(price.innerText.replace('$',''));
        quantity=quantity.value;
       // console.log(quantity);
        total=total+price*quantity;
        
    }
    total=Math.round(total*100)/100;
    document.querySelector('.cart-total-price').innerHTML=total;

}

/*
function cartnum(){

    let prodnumber=localStorage.getItem('cartnumber');
    prodnumber=parseInt(prodnumber);
    if(prodnumber){
    localStorage.setItem('cartnumber',prodnumber+1);
    }
    else{
        localStorage.setItem('cartnumber',1);
    }
    console.log(prodnumber);
}
*/

//Add to cart items


var addcart=document.getElementsByClassName('shop-item-button');
for(var i=0;i<addcart.length;i++)
{
    addcart[i].addEventListener('click',(event)=>{
        //console.log("it works!");
        var carts=event.target;
        var addcarts=carts.parentElement.parentElement;
        var title=addcarts.getElementsByClassName('shop-item-title')[0].innerText;
        var price=addcarts.getElementsByClassName('shop-item-price')[0].innerText;
        var imgsrc=addcarts.getElementsByClassName('shop-item-image')[0].src;
        var quantity=1;
        finallyaddtocart(title,price,imgsrc,quantity);
        updatecart();
    })
}



function finallyaddtocart(title,price,imgsrc,quantity){
    var newcart=document.createElement('div');
    var cartitem=document.getElementsByClassName('cart-items')[0];
    var names=cartitem.getElementsByClassName('cart-item-title');
    for(var i=0;i<names.length;i++)
    {
        if(names[i].innerText==title)
        {
            alert("This item is already in the cart");
            return;
        }
    }

    var itemcontent=`
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${imgsrc}" width="100" height="100">
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="${quantity}">
                        <button class="btn btn-danger"  type="button">REMOVE</button>
                    </div>
                </div>`;
    newcart.innerHTML=itemcontent;
    cartitem.append(newcart);
    let removebutton=document.querySelectorAll('.btn-danger');

for(let i=0;i<removebutton.length;i++)
{
    let total=document.querySelector('.cart-total-price');
    total=parseInt(total);
    removebutton[i].addEventListener('click',function(event){
       var btns=event.target
        btns.parentElement.parentElement.remove();
        updatecart();
    })
}

var updates=newcart.getElementsByClassName('cart-quantity-input')[0];
updates.addEventListener('change',quantitychanged);

}

var quantitys=document.getElementsByClassName('cart-quantity-input');

for(var i=0;i<quantitys.length;i++)
{
    
    var q=quantitys[i];
    q.addEventListener('change',quantitychanged);
        
    
}

function quantitychanged(event){
    q=event.target;
    console.log(q.value,"gfude");
    if(q.value<=0)
    {
        
        q.value=1;
        document.querySelectorAll('.cart-quantity-input').value=1;
    }
    else{
        updatecart();
    }
    
}


//click on purchase

var purchase=document.getElementsByClassName('btn-purchase')[0];

purchase.addEventListener('click', getpurchase);

function getpurchase(event){
    alert("congratulation items successfully purchased");
    var par=document.getElementsByClassName("cart-items")[0];
    while(par.hasChildNodes()){
        par.removeChild(par.firstChild);
    }
    updatecart();
}