document.addEventListener("DOMContentLoaded", function() {
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

  const form = document.getElementById("numsForm");
    
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
    
  const savedValue = getCookie('maxCount');

  if (savedValue !== null) {
    if (form) form.style.display = "none";
    const userChoice = confirm(`Знайдено збережений результат: ${savedValue}\n\nБажаєте видалити збережені дані?`);
        
    if (userChoice) {
      document.cookie = "maxCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      alert("Дані видалено! Сторінка перезавантажиться.");
      location.reload();
    } else {
      alert("Дані збережено. Для подальшої роботи перезавантажте веб-сторінку.");
    }
  } else {
    if (form) {
      form.style.display = "block";
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input[type="number"]');
        const numbers = [];
        inputs.forEach(input => {
          const value = parseFloat(input.value);
          if (!isNaN(value)) {
            numbers.push(value);
          }
        });
                
        if (numbers.length === 10) {
          const maxNum = Math.max(...numbers);
          const countMax = numbers.filter(num => num === maxNum).length;
          alert(`Кількість максимальних чисел: ${countMax}`);
          document.cookie = `maxCount=${countMax}; max-age=86400; path=/`;
        } else {
          alert("❌ Будь ласка, заповніть всі 10 полів коректними числами!");
        }
      });
    }
  }
});