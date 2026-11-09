document.addEventListener('DOMContentLoaded', () => {
    const beneficiaries = document.querySelectorAll('.ben-item:not(.add)');

    beneficiaries.forEach(item => {
        item.addEventListener('click', () => {
            // Убираем активный класс у всех
            beneficiaries.forEach(el => el.classList.remove('active-ben'));
            // Добавляем кликнутому
            item.classList.add('active-ben');
        });
    });
});