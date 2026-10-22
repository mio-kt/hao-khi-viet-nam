const characters = [
  {
    name: "Lý Thường Kiệt",
    role: "Danh tướng · Nhà chính trị",
    year: "1019 — 1105",
    quote: "Nam quốc sơn hà",
    color: "#c28a3d"
  },
  {
    name: "Trần Hưng Đạo",
    role: "Quốc công Tiết chế",
    year: "1228 — 1300",
    quote: "Giữ nước · Giữ lòng dân",
    color: "#a74631"
  },
  {
    name: "Nguyễn Trãi",
    role: "Anh hùng dân tộc · Danh nhân",
    year: "1380 — 1442",
    quote: "Việc nhân nghĩa cốt ở yên dân",
    color: "#8e7041"
  },
  {
    name: "Quang Trung",
    role: "Hoàng đế · Nhà quân sự",
    year: "1753 — 1792",
    quote: "Hào khí Tây Sơn",
    color: "#b24a28"
  },
  {
    name: "Chủ tịch Hồ Chí Minh",
    role: "Lãnh tụ · Danh nhân văn hóa",
    year: "1890 — 1969",
    quote: "Độc lập · Tự do",
    color: "#7f5b34"
  }
];

const list = document.getElementById('characterList');
const heroArt = document.getElementById('heroArt');
const artIndex = document.getElementById('artIndex');
const toast = document.getElementById('toast');

function renderList() {
  list.innerHTML = characters.map((person, i) => `
    <button class="character ${i === 0 ? 'active' : ''}" data-index="${i}" type="button">
      <span class="number">0${i + 1}</span>
      <span class="name">${person.name}</span>
      <span class="role">${person.role}</span>
      <span class="arrow">→</span>
    </button>
  `).join('');
}

function selectCharacter(index) {
  const person = characters[index];
  document.querySelectorAll('.character').forEach((el, i) => el.classList.toggle('active', i === index));
  artIndex.textContent = `0${index + 1}`;
  heroArt.style.background = `radial-gradient(circle at 54% 24%, ${person.color}88, transparent 24%), linear-gradient(145deg, rgba(255,235,183,.68), transparent 35%), radial-gradient(circle at 50% 32%, #f1a64b 0, #8d4e2e 24%, #35251d 58%, #17130f 100%)`;
  showToast(`${person.name} · ${person.year} · “${person.quote}”`);
}

renderList();
list.addEventListener('click', (event) => {
  const button = event.target.closest('.character');
  if (button) selectCharacter(Number(button.dataset.index));
});

// Cursor giống tinh thần ảnh tham khảo: vòng tròn bám theo chuột + chấm sáng.
const ring = document.querySelector('.cursor-ring');
const dot = document.querySelector('.cursor-dot');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let ringX = mouseX, ringY = mouseY;
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;
});
function animateCursor() {
  ringX += (mouseX - ringX) * 0.13;
  ringY += (mouseY - ringY) * 0.13;
  ring.style.left = `${ringX}px`;
  ring.style.top = `${ringY}px`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// Nhạc: trình duyệt chỉ cho phép phát sau tương tác của người dùng.
// Nếu bạn có file âm thanh đã được cấp quyền sử dụng, đặt tại:
// /music/sounds-of-vietnam.mp3
const audio = document.getElementById('bgMusic');
const musicButton = document.getElementById('musicButton');
const musicLabel = document.getElementById('musicLabel');
let musicReady = true;

audio.volume = 0.32;
musicButton.addEventListener('click', async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicButton.classList.add('playing');
      musicLabel.textContent = 'SOUNDS OF VIETNAM · ON';
    } else {
      audio.pause();
      musicButton.classList.remove('playing');
      musicLabel.textContent = 'SOUNDS OF VIETNAM · OFF';
    }
  } catch (error) {
    musicReady = false;
    musicLabel.textContent = 'MỞ ALBUM · SOUNDS OF VIETNAM';
    showToast('Thêm file nhạc được cấp phép vào /music/sounds-of-vietnam.mp3 để phát nền.');
    window.open('https://www.hoopladigital.com/music/Sounds-of-Vietnam-Laszh/20337086', '_blank', 'noopener');
  }
});

audio.addEventListener('error', () => {
  musicReady = false;
});
