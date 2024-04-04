const paramstring =window.location.search;
const searchparams = new URLSearchParams(paramstring);
const id = searchparams.get('id');


function fetchData() {   
    fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")     
    .then((response) => {     
      if (!response.ok) {      
        throw new Error("Network response was not ok");        
      }   
      return response.json();      
    })     
    .then((data) => {         
      const card = document.getElementById('box1');    
      for(let i=0; i< data.length; i++)   {            
        if(data[i].id === id) {                
          card.innerHTML +=   `                 
          <div class="card-container">
            <div class="pic"><img src="${data[i].image}"</div> 
             <div class="article">                                 
             <div class="scripts">${data[i].summary}</div> 
             <div class="description">${data[i].description}</div>                
             <audio controls class="audio">              
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
