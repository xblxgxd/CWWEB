
        const themeToggleButton = document.querySelector('.theme-toggle-button');
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
        });
