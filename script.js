// Ждем, пока загрузится весь HTML
document.addEventListener('DOMContentLoaded', () => {
    
    // --- ЛОГИКА ДЛЯ ЭКРАНА ЯЗЫКОВ ---
    
    // Находим все элементы списка языков
    const languageItems = document.querySelectorAll('.language-list li');

    // Проходимся по каждому элементу
    languageItems.forEach(item => {
        item.addEventListener('click', () => {
            
            // 1. Убираем класс "active" (и галочку) у всех элементов
            languageItems.forEach(el => {
                el.classList.remove('active');
                // Удаляем галочку, если она есть
                const checkmark = el.querySelector('.checkmark');
                if (checkmark) checkmark.remove();
            });

            // 2. Добавляем класс "active" и галочку тому, по которому кликнули
            item.classList.add('active');
            
            // Создаем элемент галочки
            const check = document.createElement('span');
            check.className = 'checkmark';
            check.textContent = ' ✓';
            
            // Добавляем галочку в конец текста
            item.appendChild(check);
        });
    });


    // --- ЛОГИКА ДЛЯ ПОИСКА ВЕТОК (Экран 1) ---
    
    const searchInput = document.querySelector('.search-bar input');
    const branchList = document.querySelectorAll('.list li');

    // Если поле поиска существует
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase();

            branchList.forEach(branch => {
                const branchName = branch.textContent.toLowerCase();
                
                // Если текст в ветке совпадает с поиском - показываем, иначе скрываем
                if (branchName.includes(searchText)) {
                    branch.style.display = 'flex';
                } else {
                    branch.style.display = 'none';
                }
            });
        });
    }

});