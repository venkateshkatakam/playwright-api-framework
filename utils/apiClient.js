class ApiClient {
    constructor(request) {
        this.request = request;
    }

    async get(endpoint){
        return this.request.get(endpoint);
    }

    async post(endpoint, requestBody){
        return this.request.post(endpoint, {
            data: requestBody
        });
    }
}

export default ApiClient;