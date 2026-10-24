import ApiClient from "../utils/apiClient.js";

class BookingService {
    constructor(request) {
        this.apiClient = new ApiClient(request);
    }

    async getAllBookings() {
       return this.apiClient.get('/booking');
    }

    async getBookingsByFirstname(fn) {
       return this.apiClient.get(`/booking?firstname=${fn}`);
    }

    async getBooking(id) {
       return this.apiClient.get(`/booking/${id}`);
    }

    async createBooking(requestBody) {
       return this.apiClient.post('/booking', requestBody);
    }
}

export default BookingService;