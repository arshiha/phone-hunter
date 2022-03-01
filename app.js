const allPhones = () => {
  document.getElementById("phone-container").innerHTML = "";
  document.getElementById("spinner").style.display = "block";
    const searchValue = document.getElementById('search-box').value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

//   console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data == null)
    if(data.data == null) {
      document.getElementById("spinner").style.display = "block";
    }
    else {
      showPhoneDetails(data.data);
      document.getElementById("spinner").style.display = "none";
    }
  });
  
      
};
const showPhoneDetails = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById('phone-container');
    const div = document.createElement('div');
    div.innerHTML = ` <div class="card border p-5 bg-dark w-75">
    <div class="pic">
      <img class="w-25" src="${phone.image}" alt="">
    </div>
    <h2 class="mx-2 text-white">Phone Name: ${phone.slug}</h2>
    <h5 class="mx-2 text-warning">Phone Brand Name: ${phone.brand}</h5>
    <div class="allButton">
        <button onclick="details('${phone.slug}')" class="btn btn-primary mx-2 my-2">Explore</button>

    </div>
</div>`;

   parent.appendChild(div);
   console.log(phone);
    }
}

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => setDetails(data.data));
};

const setDetails = (info) => {
  document.getElementById("details-container").innerHTML = `
  <div>
  <img class="mx-5 mt-5" src="${info.image}" alt="">
  <h2 class="mt-5 text-center">Phone Name: ${info.slug}</h2>
  <h3 class="text-center">Phone Brand Name: ${info.brand}</h3>
  <h3 class="text-center">Features: ${info.mainFeatures}</h3>
   <h3 class="text-center">Phone Released: ${info.releaseDate}</h3>
  </div>

  `
};

