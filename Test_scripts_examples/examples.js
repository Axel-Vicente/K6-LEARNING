import http from 'k6/http'
import { check } from 'k6'

export default function () {
    // First HTTP request
    const res = http.get('https://test.k6.io');
    console.log(res.status);                        // Print the status of the request in the console

    // Assertions
    check(true, {
        'Assertion text' : (value) => value === true
    });
}