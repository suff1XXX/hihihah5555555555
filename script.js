document.addEventListener('DOMContentLoaded', function() {
    
    const translations = {
        uk: {
            logo: "Жартівник", navHome: "Головна", navPranks: "Список приколів", theme: "Тема:", heroTitle: "Центр Інтернет-Розіграшів", heroSubtitle: "Готовий понервувати друзів? Або просто посміятися? Тут зібрані найкращі інтерактивні приколи. Просто вибери, скопіюй посилання та надішли \"жертві\". Ефект гарантовано!", heroButton: "Обрати прикол", prankListTitle: "Вибери свій розіграш:",
            tryButton: "Спробувати", footerWarning: "Попередження: використовуйте з гумором та не шкодьте іншим. Натисніть 'ESC' для виходу з розіграшу.",
            prankHackTitle: "Симулятор Злому CMD", prankHackDesc: "Імітація злому системи через командний рядок. Дуже швидкий, хаотичний потік тексту.",
            prankErrorTitle: "Синій Екран Смерті", prankErrorDesc: "Класичний BSOD (Blue Screen of Death), який налякає будь-якого користувача ПК.",
            prankUpdateTitle: "Нескінченне Оновлення", prankUpdateDesc: "Екран оновлення системи, яке застрягло на 99%. Ідеально, щоб понервувати друга.",
            prankRansomwareTitle: "Екран-вимагач", prankRansomwareDesc: "Фейкове повідомлення про шифрування файлів з вимогою викупу в біткоїнах.",
            prankKernelTitle: "Kernel Panic", prankKernelDesc: "Фатальна системна помилка в стилі Linux/MacOS. Для поціновувачів.",
            prankVirusTitle: "Фейковий антивірус", prankVirusDesc: "Швидке сканування, яке знаходить безліч \"небезпечних вірусів\" у системних файлах.",
            prankFormatTitle: "Форматування C:", prankFormatDesc: "Страшний сон будь-якого користувача: імітація повного форматування головного диска.",
            prankFbiTitle: "Попередження ФБР", prankFbiDesc: "Екран блокування від імені кіберполіції з голосними звинуваченнями.",
            prankNoiseTitle: "Телевізійний Шум", prankNoiseDesc: "Екран \"немає сигналу\" з гучним і дратівливим звуком статичного шуму.",
            prankCrackedTitle: "Тріснутий Екран", prankCrackedDesc: "Надзвичайно реалістична тріщина з'являється поверх усього, що є на екрані.",
            prankCursorTitle: "Скажений Курсор", prankCursorDesc: "Справжній курсор ховається, а його місце займає фейковий, що хаотично рухається.",
            prankRickrollTitle: "Класичний Rickroll", prankRickrollDesc: "Ви знаєте правила, і я теж. Never gonna give you up!",
            prankGravityTitle: "Гравітація", prankGravityDesc: "Веселий ефект, при якому всі елементи на сторінці починають \"падати\" вниз.",
            statsTitle: "Статистика", statsGlobalTitle: "Загальна статистика", statsPersonalTitle: "Ваша особиста статистика", statsGlobalLaunches: "Всього запусків:", statsPersonalLaunches: "Запущено вами:"
        },
        en: {
            logo: "Prankster", navHome: "Home", navPranks: "Prank List", theme: "Theme:", heroTitle: "Internet Prank Center", heroSubtitle: "Ready to test your friends' nerves? Or just have a laugh? The best interactive pranks are collected here. Just choose one, copy the link, and send it to your \"victim.\" The effect is guaranteed!", heroButton: "Choose a Prank", prankListTitle: "Choose Your Prank:",
            tryButton: "Try it", footerWarning: "Warning: Use with humor and do not harm others. Press 'ESC' to exit the prank.",
            prankHackTitle: "CMD Hacking Simulator", prankHackDesc: "A system breach simulation via the command line. Very fast, chaotic stream of text.",
            prankErrorTitle: "Blue Screen Of Death", prankErrorDesc: "The classic BSOD that will scare any PC user.",
            prankUpdateTitle: "Infinite Update", prankUpdateDesc: "A system update screen stuck at 99%. Perfect for getting on a friend's nerves.",
            prankRansomwareTitle: "Ransomware Screen", prankRansomwareDesc: "A fake message about file encryption with a ransom demand in bitcoins.",
            prankKernelTitle: "Kernel Panic", prankKernelDesc: "A fatal system error in the style of Linux/MacOS. For connoisseurs.",
            prankVirusTitle: "Fake Antivirus", prankVirusDesc: "A quick scan that finds tons of \"dangerous viruses\" in system files.",
            prankFormatTitle: "Formatting C:", prankFormatDesc: "Every user's nightmare: a simulation of a full format of the main drive.",
            prankFbiTitle: "FBI Warning", prankFbiDesc: "A lock screen on behalf of the cyber police with loud accusations.",
            prankNoiseTitle: "TV Noise", prankNoiseDesc: "A \"no signal\" screen with a loud and annoying static noise sound.",
            prankCrackedTitle: "Cracked Screen", prankCrackedDesc: "An incredibly realistic crack appears over everything on the screen.",
            prankCursorTitle: "Mad Cursor", prankCursorDesc: "The real cursor hides, and a fake one takes its place, moving chaotically.",
            prankRickrollTitle: "Classic Rickroll", prankRickrollDesc: "You know the rules, and so do I. Never gonna give you up!",
            prankGravityTitle: "Gravity", prankGravityDesc: "A fun effect where all elements on the page start to \"fall\" down.",
            statsTitle: "Statistics", statsGlobalTitle: "Global Statistics", statsPersonalTitle: "Your Personal Statistics", statsGlobalLaunches: "Total launches:", statsPersonalLaunches: "Launched by you:"
        }
    };
    
    // --- Мова ---
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('language') || 'uk';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        updateStatsPanel(); // Оновити текст в панелі статистики
    }

    langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
    
    // --- Тема ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // --- Статистика ---
    const statsOverlay = document.getElementById('stats-overlay');
    const statsPanel = document.getElementById('stats-panel');
    const statsCloseBtn = document.getElementById('stats-close-btn');

    function getStats() {
        const stats = JSON.parse(localStorage.getItem('prankStats')) || {};
        return stats;
    }

    function incrementPrankStat(prankId) {
        const stats = getStats();
        stats[prankId] = (stats[prankId] || 0) + 1;
        localStorage.setItem('prankStats', JSON.stringify(stats));
    }
    
    function updateStatsPanel() {
        const stats = getStats();
        const personalTotal = Object.values(stats).reduce((sum, count) => sum + count, 0);
        
        // Імітація глобальної статистики
        const globalBase = 114728;
        const globalTotal = globalBase + personalTotal;

        document.getElementById('global-launches').textContent = globalTotal.toLocaleString('en-US');
        document.getElementById('personal-launches').textContent = personalTotal.toLocaleString('en-US');
        
        const personalList = document.getElementById('personal-prank-stats');
        personalList.innerHTML = '';
        
        const prankNames = {
             hack: translations[currentLang].prankHackTitle,
             error: translations[currentLang].prankErrorTitle,
             update: translations[currentLang].prankUpdateTitle,
             ransomware: translations[currentLang].prankRansomwareTitle,
             kernel: translations[currentLang].prankKernelTitle,
             virus: translations[currentLang].prankVirusTitle,
             format: translations[currentLang].prankFormatTitle,
             fbi: translations[currentLang].prankFbiTitle,
             noise: translations[currentLang].prankNoiseTitle,
             cracked: translations[currentLang].prankCrackedTitle,
             cursor: translations[currentLang].prankCursorTitle,
             rickroll: translations[currentLang].prankRickrollTitle,
             gravity: translations[currentLang].prankGravityTitle
        };

        for (const prankId in stats) {
            if (stats.hasOwnProperty(prankId)) {
                const li = document.createElement('li');
                li.innerHTML = `${prankNames[prankId] || prankId}: <span>${stats[prankId]}</span>`;
                personalList.appendChild(li);
            }
        }
    }

    function showStats() {
        updateStatsPanel();
        statsOverlay.classList.remove('hidden');
        statsOverlay.style.display = 'flex'; // Перезапис display:none
    }

    function hideStats() {
        statsOverlay.classList.add('hidden');
        setTimeout(() => { // Для плавної анімації зникнення
             if(statsOverlay.classList.contains('hidden')) {
                statsOverlay.style.display = 'none';
             }
        }, 300);
    }
    
    statsCloseBtn.addEventListener('click', hideStats);
    statsOverlay.addEventListener('click', (e) => {
        if (e.target === statsOverlay) {
            hideStats();
        }
    });

    // --- Загальні слухачі ---
    // Слухач на кліки по посиланнях приколів
    document.querySelectorAll('.prank-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const prankId = this.dataset.prankId;
            if (prankId) {
                incrementPrankStat(prankId);
            }
            window.open(this.href, '_blank');
        });
    });

    // Слухач клавіатури для статистики та виходу з неї
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            if (statsOverlay.classList.contains('hidden')) {
                showStats();
            } else {
                hideStats();
            }
        }
        if (e.key === 'Escape') {
            if (!statsOverlay.classList.contains('hidden')) {
                hideStats();
            }
        }
    });

    // --- Ініціалізація при завантаженні ---
    setLanguage(currentLang);
    setTheme(localStorage.getItem('theme') || 'light');
    
    // Початкове приховування панелі
    statsOverlay.style.display = 'none';
});