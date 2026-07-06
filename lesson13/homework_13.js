


(function () {
  const RULES = {
    name: {
      regex: /^.+$/,
      message: 'Обовязкове поле'
    },
    message: {
      regex: /^[\s\S]{5,}$/,
      message: 'Мінімум 5 символів'
    },
    phone: {
      regex: /^\+380\d{9}$/,
      message: 'Номер телефону має починатися на +380 (+380971234567)'
    },
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email має містити @ та крапку(.) (наприклад: user@example.com)'
    }
    };
  function getSpan(field) {
    return field.parentElement.querySelector('span');
  }
  function validateField(field) {
    const rule = RULES[field.id];
    const span = getSpan(field);
    const value = field.value.trim();
    if (rule.regex.test(value)) {
      field.classList.remove('error');
      span.textContent = '';
      return true;
    } else {
      field.classList.add('error');
      span.textContent = rule.message;
      return false;
    }
  }

  const inputs = document.querySelectorAll('#name, #message, #phone, #email');
  inputs.forEach(function (field) {
    field.addEventListener('input', function () { validateField(field); });
    field.addEventListener('blur', function () { validateField(field); });
  });
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const allValid = Array.from(inputs)
      .map(function (field) { return validateField(field); })
      .every(Boolean);
    if (!allValid) return;
    const data = {};
    inputs.forEach(function (field) {
      data[field.id] = field.value.trim();
    });
    console.log('Дані форми:', data);

    alert('Відправлено! Відкрий консоль (F12) щоб побачити дані.');
  }
  
})();
