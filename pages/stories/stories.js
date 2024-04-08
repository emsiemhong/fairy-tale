let params = new URLSearchParams(document.location.search);
let age = params.get("age");

function fetchData() { 
    fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
   .then((response) => {    
   if (!response.ok) {     
   throw new Error("Network response was not ok");     
     }  
   return response.json();    
    })    
   .then((data) => {       
    const card = document.getElementById('box');  
    if (age === "all") {
      for (let i = 0; i < data.length; i++) {
        card.innerHTML += `
               
        <div class="card-container">
        <a href='../detial/storyDetail.html?id=${data[i].id}'><div class="pic"><img src="${data[i].image}"</div></a>
         <div class="article"> 
         <div class="title">                              
         <div>${data[i].title}</div>
         <div>${data[i].author} </div>
         </div>                                  
         <div class="scripts">${data[i].summary}</div>                 
         <audio controls class="audio">              
         <source src="${data[i].audio}" type="audio/mpeg">                      
      </audio>              
      </div> 
      </div>`;
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].age === age) {
          card.innerHTML += `
             
          <div class="card-container">
          <a href='../detial/storyDetail.html?id=${data[i].id}'><div class="pic"><img src="${data[i].image}"</div></a> 
           <div class="article"> 
           <div class="title">                              
           <div>${data[i].title}</div>
           <div>${data[i].author} </div>
           </div>                                  
           <div class="scripts">${data[i].summary}</div>                 
           <audio controls class="audio">              
           <source src="${data[i].audio}" type="audio/mpeg">                      
        </audio>              
        </div> 
        </div>`;
        }
      }
    }
            })   
       .catch((error) => {   
         console.error("Fetch error:", error);    
           return error;     
       });
   }  
       fetchData (); 


  