// 연도 자동
var y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// 현재 파일명 기준으로 탭 활성화
(function(){
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav .tab').forEach(function(a){
    var href = a.getAttribute('href');
    a.classList.toggle('active', href === path);
  });
})();

// 문의 폼 mailto
function openMail(e){
  e.preventDefault();
  var to = 'lee.sunghwan@hotmail.com';
  var name = document.getElementById('name')?.value?.trim() || '';
  var contact = document.getElementById('contactField')?.value?.trim() || '';
  var msg = document.getElementById('message')?.value?.trim() || '';
  var subject = encodeURIComponent('[가회아트 대관 문의] ' + name);
  var body = encodeURIComponent('이름: ' + name + '\n연락처: ' + contact + '\n\n요청 내용:\n' + msg);
  location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
}
