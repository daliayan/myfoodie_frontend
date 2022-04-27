class City {

    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
    };

    getCity(){
        const cityList = document.getElementById('city-list');
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('city-list');

        const cityInfo = this.getCityInfo();
        const restaurants = this.getCityRestaurants();

        const selectCityDropdown = document.getElementById("cityRestaurant")
        const selectCityOption = document.createElement('option');
        selectCityOption.value = this.id;
        selectCityOption.innerText = this.name;
        selectCityDropdown.append(selectCityOption);

        cityDiv.appendChild(cityInfo);
        cityList.appendChild(cityDiv);
        cityList.appendChild(restaurants);
    };

    getCityInfo(){
        const cityData = document.createElement('div');
        cityData.innerHTML = `${this.name}`; 
        return cityData;
    }

    getCityRestaurants(){
        const restaurantUl = document.createElement('ul');
        restaurantUl.id = `city-${this.id}`;
        restaurantUl.classList.add('restaurants');
        
        this.restaurants.forEach(restaurant => {
            const newRestaurant = new Restaurant(restaurant);

            const li = newRestaurant.getRestaurant();
            restaurantUl.appendChild(li);
        });
        return restaurantUl;
    };

    // getDropDown(){
    //     const cityFiltDrop = document.getElementById("cityDropdown");
    //     const filterDrop = document.createElement('div');
    //     filterDrop.classList.add('filter-button');
    //     filterDrop.id = this.id;
    //     cityFiltDrop.appendChild(filterDrop);
    
    //         filterDrop.addEventListener('change', () => {
    //             // this.id = id;
    //             console.log('hello')
    //     });
    // }
};
