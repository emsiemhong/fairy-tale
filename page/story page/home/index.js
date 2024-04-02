function fetchData() { 
    fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")    
   .then((response) => {    
   if (!response.ok) {     
   throw new Error("Network response was not ok");     
     }  
   return response.json();    
    })    
   .then((data) => {       
    const card = document.querySelector('.container');  
    for(let i=0; i<data.length; i++)   {     
         if(data[i].id) {      
            card.innerHTML +=  `        
            <div class="container">
    <h2 class="mt-5 text-center">Age 0-3</h2>
    <div class="card-group gap-3 mt-3">
      <div class="card border-0 border-end">
        <img src="images/Bedtime-Stories-Fifi-and-Teddy-short-stories-for-kids-header-428x260.jpg" class="card-img-top"
          alt="...">
        <div class="card-body">
          <h5 class="card-title">Matthew Is Up</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content.</p>
          <p>By: The Brothers Grimm</p>
        </div>
      </div>
      <div class="card border-0">
        <img src="images/Bedtime-stories-Matthew-is-Up-short-stories-for-kids-header-428x260.jpg" class="card-img-top"
          alt="...">
        <div class="card-body">
          <h5 class="card-title">Fifi and Teddy</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p>By: The Brothers Grimm</p>
        </div>
      </div>
      <div class="card border-0 border-start">
        <img src="images/Bedtime-stories-The-Dark-is-Friendly-short-stories-for-kids-header-428x260.jpg"
          class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">The Dark is Friendly</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content.</p>
          <p>By: The Brothers Grimm</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-info mt-5">View All</button>
    </div>
  </div>

  <div class="container border-top mt-3">
    <h2 class="mt-md-4 text-center">Age 4-6</h2>
    <div class="card-group gap-3 mt-3">
      <div class="card border-0 border-end">
        <img src="images/Bedtime-Stories-Fifi-and-Teddy-short-stories-for-kids-header-428x260.jpg" class="card-img-top"
          alt="...">
        <div class="card-body">
          <h5 class="card-title">Matthew Is Up</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content.</p>
          <p>By: The Brothers Grimm</p>
        </div>
      </div>
      <div class="card border-0">
        <img src="images/Bedtime-stories-Matthew-is-Up-short-stories-for-kids-header-428x260.jpg" class="card-img-top"
          alt="...">
        <div class="card-body">
          <h5 class="card-title">Fifi and Teddy</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p>By: The Brothers Grimm</p>
        </div>
      </div>
      <div class="card border-0 border-start">
        <img src="images/Bedtime-stories-The-Dark-is-Friendly-short-stories-for-kids-header-428x260.jpg"
          class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">The Dark is Friendly</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content.</p>
          <p>By: The Brothers Grimm</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-info mt-5">View All</button>
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