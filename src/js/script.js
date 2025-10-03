// Disable Right Click
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Disable F12
        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 123) { // F12
                e.preventDefault();
            }
        });