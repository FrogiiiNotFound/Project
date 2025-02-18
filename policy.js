// Ссылка на открытие модального окна
    const openPolicy = document.getElementById('openPolicy');
    // Само модальное окно
    const policyModal = document.getElementById('policyModal');
    // Кнопка закрытия
    const policyClose = document.getElementById('policyClose');

    // Открытие
    openPolicy.addEventListener('click', () => {
      policyModal.style.display = 'block';
    });

    // Закрытие по кнопке
    policyClose.addEventListener('click', () => {
      policyModal.style.display = 'none';
    });

    // Закрытие по клику вне окна
    window.addEventListener('click', (event) => {
      if (event.target === policyModal) {
        policyModal.style.display = 'none';
      }
    });