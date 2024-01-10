import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    stages : [
        {
            duration : '5m',    // Gradual increase to 100 users in 5 minutes
            target: '100'
        },
        {
            duration : '30m',    // Keep 100 users for 30 minutes
            target: '100'
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