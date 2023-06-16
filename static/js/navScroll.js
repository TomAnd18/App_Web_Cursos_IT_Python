const headerRef = document.querySelector('.navbar');

const handleScroll = () => {
    if (window.pageYOffset > 0) {
        headerRef.classList.add('down');
    } else {
        headerRef.classList.remove('down');
    }
};

window.addEventListener('scroll', handleScroll);

