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
    for(let i=0; i<data.length; i++)   {     
         if(data[i].id) {      
            card.innerHTML +=  `        
            <div class="card-container">   
            <div class="box-0"><img src="${data[i].image}"></div>
            <div class="box-1">        
            <div cla>${data[i].title} </div><br>         
               <div class="summary">${data[i].summary}</div><br>
               <div class="box-2" >
               <div>${data[i].author}</div>   
               <div class="created">${data[i].created_at}</div>  
               </div><br>
               <audio controls>
               <source src="${data[i].audio}" type="audio/mpeg">
               Your browser does not support the audio element.
             </audio>
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
       fetchData ();