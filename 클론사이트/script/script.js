// 로고 이미지와 헤더 배경색 변경 스크롤 이벤트 처리
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    // 스크롤 위치에 따라 배경색과 로고 이미지 변경
    if (scrollPosition > 0) {
      header.style.backgroundColor = '#fff';
      logo.style.backgroundImage = 'url(/img/logo2.png)';
    } else {
      header.style.backgroundColor = 'transparent';
      logo.style.backgroundImage = 'url(/img/logo.png)';
    }
  });