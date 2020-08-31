export function detectUserDevice() {
    if (window.matchMedia) {
        const setMode = (mql) => {
            if (mql.matches) {
                document.body.classList.remove('desktop');
                document.body.classList.add('mobile');
            } else {
                document.body.classList.remove('mobile');
                document.body.classList.add('desktop');
            }
        };
        const mql = matchMedia("(max-width: 500px), (max-height: 500px)");
        setMode(mql);
        mql.addListener(setMode);
    } else {
        document.body.classList.add('desktop');
    }

    document.body.classList.add('no-touch');
    window.addEventListener('touchstart', function() {
        document.body.classList.remove('no-touch');
        document.body.classList.add('touch');
    });
}