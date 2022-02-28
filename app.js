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
      <img class="w-25" src="" alt="">
    </div>
    <h2 class="mx-2">Phone Name: cool</h2>
    <h5 class="mx-2">Phone Brand Name: </h5>
    <div class="allButton">
        <button class="btn btn-primary mx-2 my-2">Details</button>
    </div>
</div>`;
   parent.appendChild(div);
    }
}