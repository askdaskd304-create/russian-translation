// 홈 화면 앱 설치 조건을 채우기 위한 최소한의 파일입니다. 아무것도 저장하거나 가로채지 않습니다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
