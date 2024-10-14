document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Message de confirmation
    const confirmationMessage = `Merci, ${name}! Votre réservation pour ${guests} personnes le ${date} à ${time} a été confirmée.`;
    
    document.getElementById('confirmation').innerText = confirmationMessage;

    // Réinitialiser le formulaire
    document.getElementById('reservation-form').reset();
});
