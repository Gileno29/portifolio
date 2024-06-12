// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const roles = ["Analista de Sistemas", "Intusiasta DevOps"];
    let currentRoleIndex = 0;
    const roleElement = document.getElementById("role");

    function updateRole() {
        roleElement.classList.add('fade-out');

        setTimeout(() => {
            roleElement.textContent = roles[currentRoleIndex];
            roleElement.classList.remove('fade-out');
            roleElement.classList.add('fade-in');

            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        }, 1000); // Tempo da transição de fade-out
    }

    setInterval(() => {
        roleElement.classList.remove('fade-in');
        updateRole();
    }, 3000); // Tempo entre as trocas de título

    roleElement.classList.add('fade-in');
});
