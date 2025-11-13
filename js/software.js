// This is a plain .js file — remove the <script> tags.
const volumeBtn = document.getElementById('volume-btn');
if (volumeBtn) {
  const icons = volumeBtn.querySelectorAll('i');

  volumeBtn.addEventListener('click', () => {
    icons.forEach(icon => icon.classList.toggle('ativo'));
  });
}
