document.addEventListener("DOMContentLoaded", function () {
  const block4 = document.getElementById("block4");
  const block5 = document.getElementById("block5");
  if (block4 && block5) {
    const temp = block4.innerHTML;
    block4.innerHTML = block5.innerHTML;
    block5.innerHTML = temp;
  }

  const triangleArea = (a, b, c) => {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  };
  const area = triangleArea(3, 4, 5);
  const content = document.getElementById("block3");
  if (content) {
    content.innerHTML += `<p>The triangle's area with the sides 3, 4, 5: <b>${area.toFixed(2)}</b></p>`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }

  const form = document.getElementById("numsForm");
  const savedValue = getCookie("maxCount");
  if (savedValue !== null) {
    if (form) form.style.display = "none";
    const userChoice = confirm(
      `Знайдено збережений результат: ${savedValue}\n\nБажаєте видалити збережені дані?`
    );
    if (userChoice) {
      deleteCookie("maxCount");
      alert("Дані видалено! Сторінка перезавантажиться.");
      location.reload();
    } else {
      alert("Дані збережено. Для подальшої роботи перезавантажте веб-сторінку.");
    }
    return;
  }
  if (form) {
    form.style.display = "block";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputs = form.querySelectorAll('input[type="number"]');
      const numbers = [];
      inputs.forEach(input => {
        const n = parseFloat(input.value);
        if (!isNaN(n)) numbers.push(n);
      });
      if (numbers.length !== 10) {
        alert("❌ Будь ласка, заповніть всі 10 полів коректними числами!");
        return;
      }
      const maxNum = Math.max(...numbers);
      const countMax = numbers.filter(n => n === maxNum).length;
      document.cookie = `maxCount=${countMax}; path=/; SameSite=Lax; Secure`;
      alert(`Кількість максимальних чисел: ${countMax}`);
      location.reload();
    });
  }
});
