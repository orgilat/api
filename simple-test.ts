import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

const responseTime = new Trend('custom_http_req_duration', true);

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '20s', target: 60 },
  ],
  thresholds: {
    'http_req_duration': ['p(95)<500'],
    'http_req_failed': ['rate<0.1'],
    'custom_http_req_duration{stage:low}': ['p(95)<500'],
    'custom_http_req_duration{stage:medium}': ['p(95)<600'],
  },
};

export default function () {
  const res = http.get('https://www.amazon.com/', { responseType: 'text' });

  // הוסף את זמן התגובה למדד עם תווית "stage"
  const stage = getCurrentStage();
  responseTime.add(res.timings.duration, { stage });

  check(res, {
    'סטטוס הוא 200': (r) => r.status === 200,
    'יש תגית HTML': (r) => r.body.includes('</html>'),
    'עמוד מכיל את המילה "Amazon"': (r) => r.body.includes('Amazon'),
  });

  sleep(1);
}

// פונקציה לזיהוי שלב העומס הנוכחי לפי זמן ריצה
function getCurrentStage() {

  if (__VU <= 20) return 'low'; // גודל נמוך
  if (__VU > 20 && __VU <= 60) return 'medium'; // בינוני
  return 'unknown'; // לא ידוע
}

