

const buttons = document.querySelectorAll('.toggle-btn');
const image = document.getElementById('why-image');

const images = [
  '132311bcedeb7fe4613090c305c9df00a6074bc7.png',
  '7683262e53168c5abacb2dd6e9628306e5e87572.png',
  '1c4f36762b247b46ab3a1ab62a3508f25d0b49f2.png',
  '7683262e53168c5abacb2dd6e9628306e5e87572.png',
  '132311bcedeb7fe4613090c305c9df00a6074bc7.png'
];

const originalImage = 'c7ec34a055b9420c62059e1b314c42dee347395a.png';

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.why-item');
    const isActive = item.classList.contains('active');

    // Collapse all items
    document.querySelectorAll('.why-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.toggle-btn').forEach(b => b.textContent = '+');

    if (!isActive) {
      // If clicked item was not active, activate it
      item.classList.add('active');
      btn.textContent = '−';
      image.src = images[index]; // Show relevant image
    } else {
      // If clicked item was active (now collapsed), show original image
      image.src = originalImage;
    }
  });
});
