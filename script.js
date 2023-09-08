let review = document.querySelectorAll('.review');
let rating = "";
let container = document.getElementById('container');
let btn = document.getElementById("btn");

    review.forEach((ele)=>{
        ele.addEventListener("click",(event)=>{ 
           remove(); 
           rating =  event.target.innerText || event.target.parentNode.innerText ;
           event.target.classList.add('active'); 
           event.target.parentNode.classList.add('active');
        })
    })
    
    btn.addEventListener("click", ()=>{
        console.log(rating);
        container.innerHTML = "";
        if(rating !==""){
            container.innerHTML = `
                <h2>Thank You</h2>
                <br>
                <p>Your Response is <strong>${rating}</strong> is successfully Submited</p>
                <br>
                <h3>We Will Work On It</h3>
                `; 
        }
     })

    function remove(){
        review.forEach((ele)=>{
            ele.classList.remove('active');
        })
    }

    