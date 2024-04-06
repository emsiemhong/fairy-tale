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
                <div class="card1">
                <div class="img">
                  <img src="${data[i].image}" class="card-img-top"
                    alt="...">
                  <div class="card-body">
                    <h5>${data[i].title}</h5>
                    <p>${data[i].summary}</p>
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