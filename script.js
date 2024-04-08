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
      for(let i=0; i < data.length; i++)   {            
        if(data[i].age === "0-3") {                
          card.innerHTML +=   `                
          <div class="container">
          <div class="card-group  mt-3 gap-2">
            <div class="card border-0 border-end">
            <a href='./pages/detial/storyDetail.html?id=${data[i].id}'><img src="${data[i].image}" class="card-img-top"
            alt="..."></a>
              <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].summary}</p>
              </div>
            </div>

             `}              
          }

          const card1 = document.getElementById('box2');    
      for(let i=0; i < 8; i++)   {            
        if(data[i].age === "4-6") {                
          card1.innerHTML +=   `                
          <div class="container">
          <div class="card-group  mt-3 gap-2">
            <div class="card border-0 border-end">
            <a href='./pages/detial/storyDetail.html?id=${data[i].id}'><img src="${data[i].image}" class="card-img-top"
            alt="..."></a>
              <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
                <p class="card-text">${data[i].summary}</p>
              </div>
            </div>

             `}              
          }
          const card2 = document.getElementById('box3');    
          for(let i=0; i < 8; i++)   {            
            if(data[i].age === "7-12") {                
              card2.innerHTML +=   `                
              <div class="container">
              <div class="card-group  mt-3 gap-2">
                <div class="card border-0 border-end">
                <a href='./pages/detial/storyDetail.html?id=${data[i].id}'><img src="${data[i].image}" class="card-img-top"
                alt="..."></a>
                  <div class="card-body">
                  <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">${data[i].summary}</p>
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

   