// เพิ่ม class 'show' ให้ h1 เมื่อโหลดหน้า
export default function initAnimation() {
  const h1 = document.querySelector('h1');
  if (h1) h1.classList.add('show');
}

// เรียกใช้เลย
initAnimation();
