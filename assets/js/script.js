const magnetic = document.querySelector('.p-footer__magnetic');

document.addEventListener('mousemove', (e) => {
  const rect = magnetic.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // 吸い込まれるように動きを大きくする
  const deltaX = (e.clientX - centerX) * 5.0;
  const deltaY = (e.clientY - centerY) * 5.0;

  magnetic.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});

magnetic.addEventListener('mouseleave', () => {
  magnetic.style.transform = 'translate(0, 0)';
});

const clock = document.getElementById('p-dayAria__timeClock');
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');   // 時(0〜23)
  const m = String(now.getMinutes()).padStart(2, '0'); // 分(0〜59)
  const s = String(now.getSeconds()).padStart(2, '0'); // 秒(0〜59)
  clock.textContent = `${h}:${m}:${s}`;
}
updateClock();
setInterval(updateClock, 1000);
