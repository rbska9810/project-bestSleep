/* 맵 초기상태 */
var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.49613, 127.0322),
  zoom: 13,
});

/* 마커 모양, 위치 */
var Gangnam = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.49613, 127.0322),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>강남점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  NoWon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.65667, 127.0664),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>노원점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Myeongdong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.56595, 126.9868),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>명동점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Mokdong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.52577, 126.8703),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>목동점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Bangbaebondong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.48857, 126.9828),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>방배동점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Jamsil = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.50207, 127.0973),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>잠실점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Gwanggyo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.26992, 127.0661),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>광교점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Gwangmyeong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.42136, 126.8835),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>광명점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Gimpo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.61235, 126.7317),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>김포점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Namyangju = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.65734, 127.1257),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>남양주점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Incheon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.44422, 126.7013),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>인천점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Dongtan = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.17227, 127.0896),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>동탄점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Bundang = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.41254, 127.1299),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>분당점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Suji = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.32236, 127.1001),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>수지점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Ansan = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.30207, 126.8638),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>안산점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Ilsan = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.67546, 126.75),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>일산점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Pyeongtaek = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.99179, 127.1264),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>평택점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Hanam = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.56512, 127.1896),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>하남점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Gumi = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.11498, 128.3637),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>구미점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  DaeguSuseong = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.85933, 128.6444),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>대구수성점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  DaeguDalseo = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.85033, 128.5361),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>대구달서점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Changwon = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.22737, 128.6795),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>창원점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Ulsan = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.53811, 129.3402),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>울산점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  BusanCentum = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.1664, 129.1335),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>부산센텀점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  BusanJungang = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.10415, 129.0368),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>부산중앙점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Wonju = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.3464, 127.9266),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>원주점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  DaejeonDunsan = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.35385, 127.38),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>대전둔산점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  DaejeonGwanjeo = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.30195, 127.3359),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>대전관저점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Cheonan = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.80012, 127.1036),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>천안점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Cheongju = new naver.maps.Marker({
    position: new naver.maps.LatLng(36.64439, 127.4281),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>청주점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Gwangju = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.14892, 126.8489),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>광주점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  }),
  Jeonju = new naver.maps.Marker({
    position: new naver.maps.LatLng(35.81557, 127.1065),
    map: map,
    icon: {
      content: [
        '<div class="mapIconBox">',
        '<div class="mapTextBox">',
        "<h4>전주점</h4>",
        "</div>",
        '<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<ellipse cx="12.5" cy="35" rx="8.5" ry="2" fill="#575757" fill-opacity="0.29"/>',
        '<path d="M24 12C24 18.6274 16 34.5 12 34.5C8 34.5 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#1C2844"/>',
        '<circle cx="12" cy="11" r="6" fill="white"/>',
        "</svg>",
        "</div>",
      ].join(""),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  });

/* 각 지역의 경도,위도 */
var Gangnam = new naver.maps.LatLng(37.49613, 127.0322),
  NoWon = new naver.maps.LatLng(37.65667, 127.0664),
  Myeongdong = new naver.maps.LatLng(37.56582, 126.9868),
  Mokdong = new naver.maps.LatLng(37.52577, 126.8703),
  Bangbaebondong = new naver.maps.LatLng(37.48857, 126.9828),
  Jamsil = new naver.maps.LatLng(37.50207, 127.0973),
  Gwanggyo = new naver.maps.LatLng(37.26992, 127.0661),
  Gwangmyeong = new naver.maps.LatLng(37.42136, 126.8835),
  Gimpo = new naver.maps.LatLng(37.61235, 126.7317),
  Namyangju = new naver.maps.LatLng(37.65734, 127.1257),
  Incheon = new naver.maps.LatLng(37.44422, 126.7013),
  Dongtan = new naver.maps.LatLng(37.17227, 127.0896),
  Bundang = new naver.maps.LatLng(37.41254, 127.1299),
  Suji = new naver.maps.LatLng(37.32236, 127.1001),
  Ansan = new naver.maps.LatLng(37.30207, 126.8638),
  Ilsan = new naver.maps.LatLng(37.67546, 126.75),
  Pyeongtaek = new naver.maps.LatLng(36.99179, 127.1264),
  Hanam = new naver.maps.LatLng(37.56512, 127.1896),
  Gumi = new naver.maps.LatLng(36.11498, 128.3637),
  DaeguSuseong = new naver.maps.LatLng(35.85933, 128.6444),
  DaeguDalseo = new naver.maps.LatLng(35.85033, 128.5361),
  Changwon = new naver.maps.LatLng(35.22737, 128.6795),
  Ulsan = new naver.maps.LatLng(35.53811, 129.3402),
  BusanCentum = new naver.maps.LatLng(35.1664, 129.1335),
  BusanJungang = new naver.maps.LatLng(35.10415, 129.0368),
  Wonju = new naver.maps.LatLng(37.3464, 127.9266),
  DaejeonDunsan = new naver.maps.LatLng(36.35385, 127.38),
  DaejeonGwanjeo = new naver.maps.LatLng(36.30195, 127.3359),
  Cheonan = new naver.maps.LatLng(36.80012, 127.1036),
  Cheongju = new naver.maps.LatLng(36.64439, 127.4281),
  Gwangju = new naver.maps.LatLng(35.14892, 126.8489),
  Jeonju = new naver.maps.LatLng(35.81557, 127.1065);

/* 리스트에서 클릭시 해당하는 지역으로 맵에서 이동됨 */
$("#Gangnam").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Gangnam);
  map.setZoom(15, true);
});
$("#NoWon").on("click", function (e) {
  e.preventDefault();
  map.setCenter(NoWon);
  map.setZoom(15, true);
});
$("#Myeongdong").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Myeongdong);
  map.setZoom(15, true);
});
$("#Mokdong").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Mokdong);
  map.setZoom(15, true);
});
$("#Bangbaebondong").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Bangbaebondong);
  map.setZoom(15, true);
});
$("#Jamsil").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Jamsil);
  map.setZoom(15, true);
});
$("#Gwanggyo").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Gwanggyo);
  map.setZoom(15, true);
});
$("#Gwangmyeong").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Gwangmyeong);
  map.setZoom(15, true);
});
$("#Gimpo").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Gimpo);
  map.setZoom(15, true);
});
$("#Namyangju").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Namyangju);
  map.setZoom(15, true);
});
$("#Incheon").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Incheon);
  map.setZoom(15, true);
});
$("#Dongtan").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Dongtan);
  map.setZoom(15, true);
});
$("#Bundang").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Bundang);
  map.setZoom(15, true);
});
$("#Suji").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Suji);
  map.setZoom(15, true);
});
$("#Ansan").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Ansan);
  map.setZoom(15, true);
});
$("#Ilsan").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Ilsan);
  map.setZoom(15, true);
});
$("#Pyeongtaek").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Pyeongtaek);
  map.setZoom(15, true);
});
$("#Hanam").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Hanam);
  map.setZoom(15, true);
});
$("#Gumi").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Gumi);
  map.setZoom(15, true);
});
$("#DaeguSuseong").on("click", function (e) {
  e.preventDefault();
  map.setCenter(DaeguSuseong);
  map.setZoom(15, true);
});
$("#DaeguDalseo").on("click", function (e) {
  e.preventDefault();
  map.setCenter(DaeguDalseo);
  map.setZoom(15, true);
});
$("#Changwon").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Changwon);
  map.setZoom(15, true);
});
$("#Ulsan").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Ulsan);
  map.setZoom(15, true);
});
$("#BusanCentum").on("click", function (e) {
  e.preventDefault();
  map.setCenter(BusanCentum);
  map.setZoom(15, true);
});
$("#BusanJungang").on("click", function (e) {
  e.preventDefault();
  map.setCenter(BusanJungang);
  map.setZoom(15, true);
});
$("#Wonju").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Wonju);
  map.setZoom(15, true);
});
$("#DaejeonDunsan").on("click", function (e) {
  e.preventDefault();
  map.setCenter(DaejeonDunsan);
  map.setZoom(15, true);
});
$("#DaejeonGwanjeo").on("click", function (e) {
  e.preventDefault();
  map.setCenter(DaejeonGwanjeo);
  map.setZoom(15, true);
});
$("#Cheonan").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Cheonan);
  map.setZoom(15, true);
});
$("#Cheongju").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Cheongju);
  map.setZoom(15, true);
});
$("#Gwangju").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Gwangju);
  map.setZoom(15, true);
});
$("#Jeonju").on("click", function (e) {
  e.preventDefault();
  map.setCenter(Jeonju);
  map.setZoom(15, true);
});
$("#suyou").on("click", function (e) {
  e.preventDefault();
  window.alert(
    `확장 이전 예정(휴무 23년 10월 4일~)
가까운 노원점으로 예약,방문 부탁드립니다.`
  );
});

/* showroom 하트아이콘 클릭시 이미지 변경 */
let heartIcon = document.querySelectorAll(".FindStore .heart-icon");
for (let i = 0; i < heartIcon.length; i++) {
  heartIcon[i].addEventListener("click", function () {
    heartIcon[i].classList.toggle("on");
  });
}
