const cityApi = new CityApi('http://localhost:3000/cities')
const form = document.getElementById('restaurant-form')
const header = document.getElementById('header')

document.addEventListener('DOMContentLoaded', () => {
    cityApi.getCities();
    form.addEventListener('submit', restaurantApi.submitForm.bind(restaurantApi))
});

// const cityFiltDrop = document.getElementById("cityDropdown");
// cityFiltDrop.addEventListener('change', () => {
//     const selectCityDropdown = document.getElementById("cityRestaurant")
//     const headerCityOption = document.createElement('option');
//         headerCityOption.value = this.id;
//         headerCityOption.innerText = this.name;
//         selectCityDropdown.append(headerCityOption);
//     console.log(`${selectCityDropdown.value}`)
        
// });


// const cityFiltDrop = document.getElementById("cityDropdown");
// cityFiltDrop.addEventListener('change', () => {
//     console.log(`${this}`)
//     // var citName = 
//     // if (citName ==="1"){
//     //     console.log(`${this.name}`)
//     // }else if (citName ==="2"){
//     //     console.log(`${this.name}`)
//     // } else if (citName ==="3"){
//     //     console.log(`${this.name}`)
//     // } else {
//     //     console.log(`${this.name}`)
//     // }
//     // return citName;
// });
