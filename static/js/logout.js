const logout = document.getElementById('logout-user');

logout.addEventListener('click', () => {
    localStorage.removeItem("user");

    window.location.href = "/";
});
