document.addEventListener('DOMContentLoaded', () => {
    let isInitial = false;

    function headerInitialContent() {
        const responsive = document.getElementById('HeaderResponsive');
        const initial = document.getElementById('HeaderInitial');

        initial.innerHTML = responsive.innerHTML;
        responsive.innerHTML = '';
        isInitial = false;
    }

    function headerResponsiveContent() {
        const responsive = document.getElementById('HeaderResponsive');
        const initial = document.getElementById('HeaderInitial');

        responsive.innerHTML = initial.innerHTML;
        initial.innerHTML = '';
        isInitial = true;
    }

    function toggleHeaderContent() {
        if (window.innerWidth < 1124) {
            if (!isInitial) headerResponsiveContent();
        } else {
            if (isInitial) headerInitialContent();
        }
    }

    toggleHeaderContent();

 
    window.addEventListener('resize', toggleHeaderContent);

    document.getElementById('Biggachou').addEventListener('click', function () {
        this.classList.toggle('eat');
        document.getElementById('HeaderResponsive').classList.toggle('open');
    });
});
