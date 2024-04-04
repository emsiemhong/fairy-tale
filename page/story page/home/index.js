function fetchData() { 
    fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")    
   .then((response) => {    
   if (!response.ok) {     
   throw new Error("Network response was not ok");     
     }  
   return response.json();    
    })    
   .then((data) => {   
    let count =1;    
    let container = document.querySelector(".card-container");
    for(let i=0;i<data.length;i++){
        if(data[i].age ==="0-3"){
            if(count<=3){
                container.innerHTML+=`
                <div class="card-group gap-3 mt-3">
                <div class="card border-0 border-end">
                  <img src="${data[i].image}" class="card-img-top"
                    alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">${data[i].summary}</p>
                    <p>By: ${data[i].author}</p>
                  </div>
                </div>
      </div>
                `
            }
            count++;
        }
    }
    
            
            })   
       .catch((error) => {   
         console.error("Fetch error:", error);    
           return error;     
       });
   }  
       fetchData ();