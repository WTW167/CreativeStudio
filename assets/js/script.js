// footer内のマウスをアイコンが追従する
const footer = document.querySelector('.l-footer');
const magnetic = footer?.querySelector('.p-footer__magnetic');

if (footer && magnetic) {
  footer.addEventListener('mousemove', (e) => {
    const rect = magnetic.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // マウスと要素の中心との距離を計算
    const deltaX = (e.clientX - centerX) * 5.0;
    const deltaY = (e.clientY - centerY) * 5.0;

    magnetic.style.transform =
      `translate(${deltaX}px, ${deltaY}px)`;
  });

  footer.addEventListener('mouseleave', () => {
    magnetic.style.transform = 'translate(0, 0)';
  });
}

// 時刻表示
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


// p-main__bodySectionの自動切り替えアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const guidanceItems = document.querySelectorAll(
    ".p-featureProjects__guidance > div"
  );
  const imageItems = document.querySelectorAll(
    ".p-featureProjects__image--slider > .p-featureProjects__image--slide"
  );
  if (
    guidanceItems.length === 0 ||
    guidanceItems.length !== imageItems.length
  ) {
    console.error("テキストと画像の数が一致していません");
    return;
  }

  let currentIndex = 0;
  let imageIndex = 0;

  // 初期状態
  guidanceItems.forEach((item, index) => {
    item.classList.toggle("is-active", index === 0);
  });
  imageItems.forEach((item) => {
    item.classList.remove("is-removed");
  });

  function changeSlide() {

    // テキスト切り替え
    guidanceItems[currentIndex].classList.remove("is-active");
    currentIndex = (currentIndex + 1) % guidanceItems.length;
    guidanceItems[currentIndex].classList.add("is-active");

    // 画像を①→②→③の順番に消す
    const targetItem = imageItems[imageIndex];
    targetItem.classList.add("is-removed");
    imageIndex++;

    // 3枚すべて消えたら再表示
    if (imageIndex >= imageItems.length) {
      setTimeout(() => {
        imageItems.forEach((item) => {
          item.classList.remove("is-removed");
        });
        imageIndex = 0;
      }, 1000);
    }
  }

  setInterval(changeSlide, 5000);
});