import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    stages : [
        {
            duration : '2h',    // Gradual increase to 900000 users in 2 hours
            target: '900000'
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1)                    // Sleep to simulate user behavior
}