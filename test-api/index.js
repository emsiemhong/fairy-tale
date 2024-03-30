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
         <div class="box">${data[i].id} </div>
         <div>${data[i].title} </div>   
         <div>${data[i].author} </div> 
         <div>${data[i].created_at} </div>   
          <div>${data[i].age} </div>          
            <div>${data[i].summary}</div>   
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