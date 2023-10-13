//  ========================================== toggle nav bar = ========================================= 
let list_menu = document.querySelector("header nav ul ") ; 
let toggle_menu = document.querySelector(".toggle-menu") ; 
toggle_icon = document.querySelector("header nav .toggle-menu i ")

toggle_menu.addEventListener("click" , function () {
    list_menu.classList.toggle("show")
    toggle_icon.classList.toggle("fa-close")
    
}) ; 

//  ================================ end toggle nav bar ============================================ 



//   ============================icrement numbers   ======================================================= 

let nums = document.querySelectorAll(" .clients-info .num") ; 
let section = document.querySelector(".clients-info") ; 

nums.forEach((num) => startCount(num)) ;


function startCount(el) {
    let goal = el.dataset.goal ; 
    let count = setInterval(() => {
        el.textContent++ ; 
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 500);
    
} ; 

//  ============================= end increment number  ==========================================================


//  =============================== nav and tab  ==================================================

let List = document.querySelectorAll(".menu-info ul li ") ; 
let items = document.querySelectorAll(".menu-info .menu-list .items") ; 


List.forEach(function (List) {
    List.addEventListener("click" , function (e) {
        let list_id = List.getAttribute("id")
        deactive(); 
        e.target.classList.add('active-2') ; 
        items.forEach(function (items) {
            let data_target = items.getAttribute("data-target") ; 
            if ( list_id == data_target ) {
                hidden() ; 
                items.classList.add("show") ; 
            }
        })
    })
    
})

function deactive() {
    List.forEach(function (List) {
        List.classList.remove("active-2")
    })
}

function hidden() {
    items.forEach(function (items) {
        items.classList.remove("show")
    })
}


// ==================================================== end nav and tabs ======================================= 




// owl carousel 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 3 ,
        margin :10 , 
        dots :false ,
        nav : false ,
        loop : true , 
        autoplay : true , 
        autoplayTimeout : 2000 ,
        

    });
});


//  end owl-carousel 



//  scroll to top 

let span = document.querySelector(".scroll-top") ; 
window.onscroll = function () {
    if (this.scrollY>100) {
        span.classList.add("scroll-right") ;
    }
    else{
        span.classList.remove("scroll-right") ;
    }
} ; 

span.addEventListener("click" , function () {

    window.scrollTo({
        top:0 , 
        behavior: "smooth" , 

    })
})

//  end scroll to top 


//  Validation in the form 


const nameInput = document.querySelector(" .form-2 #nameInput") ; 
const emailInput = document.querySelector(" .form-2 #emailInput") ; 
const subjectInput = document.querySelector(" .form-2 #subjectInput") ; 
const messageInput = document.querySelector(" .form-2 #messageInput") ; 
const form = document.querySelector(".form-2") ; 
const errorMessage = document.querySelector(".form-2 #error-message") ; 
const btn = document.querySelector(".form-2 .btn") ; 



btn.addEventListener("click" , function (e) {
    
    const errors= [] ; 

    if (nameInput.value.trim() === "") {
        errors.push("Your Name required")
    }

    if ( emailInput.value.trim() === "") {
        errors.push("email can be not empty ")
    }


    if ( subjectInput.value.trim()=== "" ) {
        errors.push("subject required ")
    }

    if ( messageInput.value.trim()=== "" ) {
        errors.push("message required ")
    }

    if (errors.length > 0 ) {
        
        e.preventDefault() ; 
        errorMessage.toggleAttribute('hidden') ; 
        errorMessage.innerHTML = errors.join( ',' )
    } 
})









