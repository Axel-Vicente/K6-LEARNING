import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    stages : [
        {
            duration : '2m',    // Gradual increase to 90000 users in 2 minutes
            target: '90000'
        },
        {
            duration : '1m',    // Go down to 0 users in 1 minutes
            target: '0'
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1)                    // Sleep to simulate user behavior
}