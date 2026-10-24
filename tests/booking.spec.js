import BookingService from '../services/bookingService.js';
import { test, expect } from '@playwright/test';
import bookingData from '../testdata/bookingData.js';
var bookingId = null;

test.describe('Booking API Tests', () => {

    // this test always returns some different value.. may be the test site consists of dynamic data
    test('Get All Bookings', async({request}) => {
        const bookingService = new BookingService(request);
        const response = await bookingService.getAllBookings();
        const responseData = await response.json();
        console.log(responseData.length);
        expect(responseData.length).toBeGreaterThan(0);
        expect(response.status()).toBe(200);
    });

    // this is passing but it shouldn't be. So skipping it for now
    test.skip('Get Bookings by first name', async({request}) => {
        const bookingService = new BookingService(request);
        const response = await bookingService.getBookingsByFirstname('Sai');
        const responseData = await response.json();
        console.log(responseData);
        expect(response.status()).toBe(200);
    });

    test('Get Booking', async({request}) => {
        const bookingService = new BookingService(request);
        const response = await bookingService.getBooking(1);
        expect(response.status()).toBe(200);
    });

    test('Create Booking', async({request}) => {
        console.log(bookingData.createBookingPayload);
        const bookingService = new BookingService(request);
        const response = await bookingService.createBooking(bookingData.createBookingPayload);
        const responseData = await response.json();
        console.log(responseData);
        bookingId = responseData.bookingid;
        
        expect(responseData.bookingid).toBeTruthy();
        expect(responseData.booking.firstname).toBe(
        bookingData.createBookingPayload.firstname
        );
        expect(responseData.booking.lastname).toBe(
            bookingData.createBookingPayload.lastname
        );
        expect(response.status()).toBe(200);
    });

});
