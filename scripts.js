document.addEventListener('DOMContentLoaded', () => {
    // 1. ลูกเล่นเปลี่ยนสถานะเกม Sword of Justice
    const gameStatusElement = document.getElementById('game-status');
    const gameStatuses = [
        "กำลังฟาร์มบอสลับ...",
        "อยู่ในดันเจี้ยน: Lost Temple",
        "PVP: กำลังต่อสู้กับคู่ปรับ",
        "ออฟไลน์: พักชาร์จพลัง",
        "ออนไลน์: ตรวจสอบภารกิจใหม่"
    ];

    // ฟังก์ชันสุ่มสถานะและเปลี่ยนข้อความ
    function updateGameStatus() {
        const randomIndex = Math.floor(Math.random() * gameStatuses.length);
        gameStatusElement.textContent = gameStatuses[randomIndex];

        // เปลี่ยนสีตามสถานะหลัก
        if (gameStatuses[randomIndex].includes("ออฟไลน์")) {
            gameStatusElement.style.backgroundColor = '#555';
            gameStatusElement.style.color = '#ccc';
        } else {
            gameStatusElement.style.backgroundColor = 'var(--secondary-color)';
            gameStatusElement.style.color = 'var(--text-light)';
        }
    }

    // เรียกใช้ครั้งแรกและตั้งเวลาให้เปลี่ยนทุกๆ 5 วินาที
    updateGameStatus();
    setInterval(updateGameStatus, 5000); 

    // 2. ลูกเล่น Header 'ONLINE' กระพริบ (CSS จัดการแล้ว)
    // สามารถเพิ่มลูกเล่นอื่นๆ ที่นี่ได้ในอนาคต เช่น การเลื่อนขึ้นลงของหน้า
});