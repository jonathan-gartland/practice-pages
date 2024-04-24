import { check } from 'k6';
import http from 'k6/http';

// export let options = {
//   thresholds: {
//     'http_req_duration{url:http://66.175.214.146:3000}': ['p95<100'],
//   },
// };

export default function () {
  let res = http.get('http://66.175.214.146:3000');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
