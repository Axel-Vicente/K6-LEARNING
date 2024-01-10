import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    stages : [
        {
            duration : '5m',    // Gradual increase to 10000 users in 5 minutes
            target: '10000'
        },
        {
            duration : '30m',    // Keep 10000 users for 30 minutes
            target: '10000'
        },
        {
            duration : '5m',    // Go down to 0 users in 5 minutes
            target: '0'
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1)                    // Sleep to simulate user behavior
}