class Storage {
    constructor() {
        this.city = localStorage.getItem('city')? localStorage.getItem('city'):'Chennai';
        this.country = localStorage.getItem('country')?localStorage.getItem('country'):'IN';
    }

    getCity() {
        return this.city;
    }

    getCountry() {
        return this.country;
    }

    setLocation(city, country) {
        this.city = city;
        this.country = country;
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);   
    }
}
