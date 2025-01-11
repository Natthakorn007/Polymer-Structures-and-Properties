window.addEventListener('scroll', function() {
  const button = document.querySelector('button');
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // ตรวจสอบตำแหน่งการเลื่อน
  if (scrollPosition >= documentHeight - 10) {
    button.classList.add('show'); // แสดงปุ่มเมื่อเลื่อนถึงท้ายสุด
  } else {
    button.classList.remove('show'); // ซ่อนปุ่มเมื่อไม่ได้เลื่อนถึงสุด
  }
});