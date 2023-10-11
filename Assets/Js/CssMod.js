/*
    @Auteur : DIONNE Clément
    @Auteur : CELINI Alvin

    @Date-de-création : 07/10/2023
    @Date-de-modification : 07/10/2023
    @Date-de-publication : 11/10/2023

    @description : Script JavaScript pour gérer le mode claire et sombre du site.
*/
// Attend que le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', function () {
    // Récupère les éléments HTML nécessaires
    const lightModeButton = document.getElementById('light-mode-button');
    const darkModeButton = document.getElementById('dark-mode-button');
    const lightStylesheet = document.getElementById('lightCSS');
    const darkStylesheet = document.getElementById('darkCSS');

    // Ajoute un écouteur d'événement pour le clic sur le bouton de mode clair
    lightModeButton.addEventListener('click', () => {
        // Active la feuille de style pour le mode clair et désactive celle pour le mode sombre
        lightStylesheet.removeAttribute('disabled');
        darkStylesheet.setAttribute('disabled', 'true');
        // Stocke la préférence de l'utilisateur dans le stockage local
        localStorage.setItem('preferredMode', 'light');
    });

    // Ajoute un écouteur d'événement pour le clic sur le bouton de mode sombre
    darkModeButton.addEventListener('click', () => {
        // Active la feuille de style pour le mode sombre et désactive celle pour le mode clair
        darkStylesheet.removeAttribute('disabled');
        lightStylesheet.setAttribute('disabled', 'true');
        // Stocke la préférence de l'utilisateur dans le stockage local
        localStorage.setItem('preferredMode', 'dark');
    });

    // Vérifie s'il existe une préférence stockée et définit le thème en conséquence
    const storedMode = localStorage.getItem('preferredMode');
    if (storedMode === 'dark') {
        // Active la feuille de style pour le mode sombre et désactive celle pour le mode clair
        darkStylesheet.removeAttribute('disabled');
        lightStylesheet.setAttribute('disabled', 'true');
    } else {
        // Active la feuille de style pour le mode clair et désactive celle pour le mode sombre (par défaut car dans le else)
        lightStylesheet.removeAttribute('disabled');
        darkStylesheet.setAttribute('disabled', 'true');
    }
    });