class ApiClient {
    API_KEY = "1b13c97a-4747-4e2c-9e4a-1e4725c87ca3";
    BASE_URL = `https://geocode-maps.yandex.ru/1.x/?apikey=${this.API_KEY}&format=json`;

    async _request(url, options)  {
        return fetch(url, options).then(res => this.checkResponse(res))
    }

    async getGeoPosition(geocode) {
        return await this._request(`${this.BASE_URL}&geocode=${geocode}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async checkResponse(response) {
        if (response.ok) {
        return await response.json();
        } else {
            return response.json().then((err) => Promise.reject(err))
        }
    }
}

const MapApiClient = new ApiClient();

export default MapApiClient;
