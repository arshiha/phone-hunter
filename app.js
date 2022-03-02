const allPhones = () => {
  const searchFiled = document.getElementById('search-box')
  const searchText = searchFiled.value;
  searchFiled.value = '';
  
  //console.log(searchText);
  const url =` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
      .then((res) => res.json())
      .then((data) => {
          if (data.data.length == 0) {
              alert('No result found.Please try again')
          }
          else {
            showPhoneDetails(data.data.slice(0, 20)); 
          }
          
      });
};

const showPhoneDetails = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById('phone-container');
    const div = document.createElement('div');
    div.classList.add("col")
    div.innerHTML = `
    <div class="card h-100 shadow-lg p-2">
        <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
         <div class="card-body">
         <h5 class="card-title"> Brand: ${phone.brand}</h5>
         <h6 class="card-title text-warning">Phone Name: ${phone.phone_name}</h6>
         <p class="card-text"></p>
          <button onClick="moreDetails('${phone.slug}')" class="btn btn-primary text-white">Details</button>
      </div>
    </div>
    `;

   parent.appendChild(div);
  //  console.log(phone);
    }
}

const moreDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => setDetails(data.data));
    
};


const setDetails = (detailsId) => {
  console.log(detailsId)
  const phoneDetails = document.getElementById("phone-details")
  phoneDetails.textContent = "";
  const div = document.createElement("div")
  div.classList.add("col")
  div.innerHTML = `
  <div class="card p-3 shadow-lg">
   <img width="100px"  src="${detailsId.image}" class="card-img-top img-fluid" alt="...">
   <div class="card-body">
     <h5 class="card-title">Brand:${detailsId.brand}</h5>
     <p class="card-text"> Model: ${detailsId.mainFeatures.storage}</p>
     <p class="card-text"> display size: ${detailsId.mainFeatures.displaySize}</p>
     <p class="card-text"> Memory Card: ${detailsId.mainFeatures.memory}</p>
     <p class="card-text"> Others: ${detailsId.others.Bluetooth}</p>
     <p class="card-text"> USB: ${detailsId.others.USB}</p>
     <h3 class="card-text"> Release date: ${detailsId.releaseDate?detailsId.releaseDate:"Not found 404"}</h3>
     <h3 class="card-text text-success">Others:</h3>

     <p class="card-title">GPS: ${detailsId.others.GPS}</p>
     <p class="card-title">Radio: ${detailsId.others.Radio}</p>
     <p class="card-title">Bluetooth: ${detailsId.others.Bluetooth}</p>
     <p class="card-title">NFC: ${detailsId.others.NFC}</p>
     <p class="card-title">WLAN: ${detailsId.others.WLAN}</p>
     

    </div>
  `;
  phoneDetails.appendChild(div)
}





/* =============================old code============================  */






/* // const allPhones = () => {
//   document.getElementById("phone-container").innerHTML = "";
//   // document.getElementById("spinner").style.display = "block";
//     const searchValue = document.getElementById('search-box').value;

//   const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

// //   console.log(url);
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data.data == null)
//     if(data.data.length == 0 ) {
//       // document.getElementById("spinner").style.display = "block";
//       alart("page not found")
//     }
//     else {
//       showPhoneDetails(data.data.slice(0,20));
//       // document.getElementById("spinner").style.display = "none";
//     }
//   });
  
      
// };

// update code */

