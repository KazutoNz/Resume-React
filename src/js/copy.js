// src/js/copy.js
export function copyEmail() {
    const copyText = document.getElementById("myInput");
    navigator.clipboard.writeText(copyText.value).then(() => {
        console.log("คัดลอก: " + copyText.value);
        alert("คัดลอกอีเมล: " + copyText.value);
    }).catch(err => console.error("Error copying text: ", err));
}
