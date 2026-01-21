document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'images/renewal-bg1.jpg',
    'images/renewal-bg2.jpg',
    'images/renewal-bg3.jpg',
  ];

  const hero = document.querySelector('.hero');

  // 背景レイヤーを2つ作る（フェード用）
  const bg1 = document.createElement('div');
  const bg2 = document.createElement('div');

  bg1.className = 'hero-bg active';
  bg2.className = 'hero-bg';

  hero.appendChild(bg1);
  hero.appendChild(bg2);

  let current = 0;

  // 初期画像
  bg1.style.backgroundImage = `url(${images[0]})`;

  setInterval(() => {
    current = (current + 1) % images.length;

    // active を切り替える
    if (bg1.classList.contains('active')) {
      bg2.style.backgroundImage = `url(${images[current]})`;
      bg2.classList.add('active');
      bg1.classList.remove('active');
    } else {
      bg1.style.backgroundImage = `url(${images[current]})`;
      bg1.classList.add('active');
      bg2.classList.remove('active');
    }
  }, 4000); // 4秒ごとに切り替え
});
