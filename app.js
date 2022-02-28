const allPhones = () => {
    const searchValue = document.getElementById('search-box').value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
//   console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((data) => showPhoneDetails(data.data));
      
};
const showPhoneDetails = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById('phone-container');
    const div = document.createElement('div');
    div.innerHTML = ` <div class="card border p-5">
    <div class="pic">
      <img class="w-25" src="${phone.image}" alt="">
    </div>
    <h2 class="mx-2">Phone Name: ${phone.slug}</h2>
    <h5 class="mx-2">Phone Brand Name: ${phone.brand}</h5>
    <div class="allButton">
        <button onclick="details('${phone.slug}')" class="btn btn-primary mx-2 my-2">Details</button>

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
  <img src="" alt="">
  <h1 class="mt-5 text-center">Phone Name: ${info.slug}</h1>
  <h3 class="text-center">Phone Brand Name: ${info.brand}</h3>

  </div>

  `
};