var modal = document.getElementById('myModal');
var register = document.getElementById('register');
var login = document.getElementById('login');
var register_form = document.getElementById('register_form');
var login_form = document.getElementById('login_form');
var register_wrap = document.getElementById('register_wrap');
var login_wrap = document.getElementById('login_wrap');
var close = document.getElementById("close");
var close2 = document.getElementById("close2");
var list_prod = document.querySelectorAll('div a.home-product-item');
var view_cart = document.getElementById('viewcart');


register.onclick = function(){
    modal.style.display = "flex";
    register_wrap.style.display = "flex";
    login_wrap.style.display ="none";
}
close.onclick = function(){
    modal.style.display = "none";
}
close2.onclick = function() {
    modal.style.display = "none";
}
login_form.onclick = function(){
    login_wrap.style.display ="flex";
    register_wrap.style.display = "none";
}
register_form.onclick = function(){
    modal.style.display ="flex";
    register_wrap.style.display ="flex";
    login_wrap.style.display ="none";
}
login.addEventListener('click', function(){
    modal.style.display = "flex";
    login_wrap.style.display = "flex";
    register_wrap.style.display ="none";
    
});

for (var i =0; i < list_prod.length; i++){
    console.log(list_prod[i]);
    list_prod[i].addEventListener('click', function(){
        window.location.href = "info_product.html";
    })

}

view_cart.addEventListener('click', function(){
    window.location.href = "cart.html";
})



