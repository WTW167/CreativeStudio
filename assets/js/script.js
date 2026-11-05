const magnetic = document.querySelector('.p-footer__magnetic');

document.addEventListener('mousemove', (e) => {
  const rect = magnetic.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // 吸い込まれるように動きを大きくする
  const deltaX = (e.clientX - centerX) * 1.2;
  const deltaY = (e.clientY - centerY) * 1.2;

  magnetic.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});

magnetic.addEventListener('mouseleave', () => {
  magnetic.style.transform = 'translate(0, 0)';
});