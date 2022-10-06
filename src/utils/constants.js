export const getCitiesURL = (id) => `${process.env.REACT_APP_RAPID_API_BASE_URL_COUNTRIES_CITIES}
/location/country/${id}/city/list?page=1&per_page=100&format=json&population=100001`;

export const getCommentsURL = (id) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/reviews/list?limit=20&currency=USD&lang=en_US&location_id=${id}`;

export const getCityInformationURL = (id) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=${id}`

export const getRestaurantInformationURL = (id) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&lang=en_US&location_id=${id}`

export const getAirportsInformationURL = (name) => `${process.env.REACT_APP_RAPID_API_BASE_URL_TRIPADVISOR}
/airports/search?locale=en_US&query=${name}`
        