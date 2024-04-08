const parameterString = window.location.search;
const urlParams = new URLSearchParams(parameterString);
const value = urlParams.get("id");
console.log(value);

function fetchData() {   
    fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")     
    .then((response) => {     
      if (!response.ok) {      
        throw new Error("Network response was not ok");        
      }   
      return response.json();      
    })     
    .then((data) => {         
      const card = document.getElementById('box');    
      for(let i=0; i<1; i++)   {            
        if(data[i].id) {                
          card.innerHTML +=   `                 
          <div class="card-container">  
          <div class="img"><img src="${data[i].image} " alt=""></div>
          <div class="scripts">                                                        
                <div>${data[i].summary}</div>
                <div class="description">${data[i].description}</div>                 
                <audio controls>              
                <source src="${data[i].audio}" type="audio/mpeg">                      
          </audio>              
          </div> 
          </div> `}              
          }          
        })        
          .catch((error) => {         
            console.error("Fetch error:", error);
            return error;
      });
  }
      fetchData();