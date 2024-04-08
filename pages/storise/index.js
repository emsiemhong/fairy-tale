const parameterString = window.location.search;
const urlParams = new URLSearchParams(parameterString);
const value = urlParams.get("age");
console.log(value);

function fetchData() {   http://127.0.0.1:5500/
  fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")     
  .then((response) => {     
    if (!response.ok) {      
      throw new Error("Network response was not ok");        
    }   
    return response.json();      
  })     
  .then((data) => {         
    const card = document.getElementById('box');    
    for(let i=0; i<data.length; i++)   {            
      if(data[i].id) {                
        card.innerHTML +=   
        ` <a style="text-decoration: none;" href="/pages/story-detail/single.html?id=${data[i].id}">                 
        <div class="card-container">  

        <div class="pic">
        <div class="img"><img src="${data[i].image} " alt=""></div>
        </div>

        <div class="scripts"> 

        <div class="age">
        <div>${data[i].age} </div>  
        </div>
        
        <div class="title">
          <div>${data[i].title} </div>
        </div>

        <div class="summary">
        <div>${data[i].summary}</div>
        </div>

        <div class="author">
          <div>${data[i].author} </div> 
        </div>
        
        
              
        <div class="sound">
        <audio controls>              
        <source src="${data[i].audio}" type="audio/mpeg">                      
        </audio>  
        </div>

        <div class="date">
        <div>${data[i].created_at} </div> 
               </a>
        </div> 
        </div> 
       `}              
        }          
      })        
        .catch((error) => {         
          console.error("Fetch error:", error);
          return error;
    });
}
    fetchData();