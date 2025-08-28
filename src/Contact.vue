<template>
  <div class="contact">
    <div class="contact-header">
      <h1>Contactez-nous</h1>
      <p>Pour toute réservation ou information, n'hésitez pas à nous contacter</p>
    </div>
    
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Informations</h2>
          
          <div class="info-item">
            <h3>Adresse</h3>
            <p>Place Isaac Benserade</p>
            <p>27480 Lyons-la-Forêt, France</p>
          </div>
          
          <div class="info-item">
            <h3>Téléphone</h3>
            <p>02 32 49 49 92</p>
          </div>
          
          <div class="info-item">
            <h3>Email</h3>
            <p>contact@restaurantdelahalle.fr</p>
          </div>
          
          <div class="info-item">
            <h3>Horaires d'ouverture</h3>
            <p><strong>LUNDI :</strong> 8h30 - 20h30</p>
            <p><strong>MARDI :</strong> 10h00 - 15h00</p>
            <p><strong>MERCREDI :</strong> FERMÉ</p>
            <p><strong>JEUDI :</strong> 10h00 - 15h00 / 18h00 - 20h30</p>
            <p><strong>VENDREDI :</strong> 10h00 - 15h00 / 18h00 - 21h00</p>
            <p><strong>SAMEDI :</strong> 10h00 - 21h00</p>
            <p><strong>DIMANCHE :</strong> 10h00 - 20h30</p>
          </div>

          <div class="reseaux">
           <h3>Reseaux sociaux</h3>
           <div class="reseaux-links">
           <a href="https://facebook.com/profile.php?id=100070603790085&sk=followers" target="_blank"><img src="/img/Facebook_logo.png" alt="Facebook"></a>
           <a href="https://instagram.com/restodelahalle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img src="/img/Instagram_logo.png" alt="Instagram"></a>
          </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h2>Formulaire de contact</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nom</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            
            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input type="tel" id="phone" v-model="form.phone">
            </div>
            
            <div class="form-group">
              <label for="guests">Nombre de personnes</label>
              <select id="guests" v-model="form.guests">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                <option value="more">Plus de 10</option>
              </select>
            </div>
            
            <div class="form-group date-time-wrapper">
              <label for="date">Date</label>
              <div class="input-container">
                <input type="date" id="date" v-model="form.date">
              </div>
            </div>
            
            <div class="form-group date-time-wrapper">
              <label for="time">Heure</label>
              <div class="input-container">
                <input type="time" id="time" v-model="form.time">
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5"></textarea>
            </div>
            
            <button type="submit" class="submit-button"><span>Envoyer</span></button>
          </form>
        </div>
      </div>
      
      <div class="map-container">
        <h2>Nous trouver</h2>
        <div class="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.3139378329144!2d1.4739557767254577!3d49.39630917141042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0e2b8d1c3a9f5%3A0x4c0e7f8bc80b3d2f!2sPlace%20Isaac%20Benserade%2C%2027480%20Lyons-la-For%C3%AAt!5e0!3m2!1sfr!2sfr!4v1691676145428!5m2!1sfr!2sfr" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Formulaire de contact
const form = reactive({
  name: '',
  email: '',
  phone: '',
  guests: 2,
  date: '',
  time: '',
  message: ''
});

// Fonction pour soumettre le formulaire
const submitForm = () => {
  // Ici, vous pourrez ajouter la logique pour envoyer le formulaire
  // Par exemple, envoyer les données à une API
  console.log('Formulaire soumis:', form);
  alert('Merci pour votre message ! Nous vous contacterons bientôt.');
  
  // Réinitialiser le formulaire
  form.name = '';
  form.email = '';
  form.phone = '';
  form.guests = 2;
  form.date = '';
  form.time = '';
  form.message = '';
};
</script>

<style scoped>
.contact {
  width: 100%;
  color: var(--text-color);
}

.contact-header {
  text-align: center;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contact-header p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-info, .contact-form {
  padding: 2rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.reseaux {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reseaux-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.reseaux img {
  width: 30px;
  height: 30px;
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item h3 {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.info-item p {
  margin: 0.2rem 0;
  color: var(--text-color);
  line-height: 1.5;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
}

input, select, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  background-color: transparent;
  color: var(--text-color);
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Solution complète pour les inputs date/time sur iOS */
.date-time-wrapper {
  position: relative;
  width: 100%;
  display: block;
}

/* Conteneur pour limiter la largeur des inputs */
.input-container {
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
}

/* Reset complet des styles pour les inputs date et time */
.input-container input[type="date"],
.input-container input[type="time"] {
  position: relative;
  display: block;
  width: 100% !important;
  height: 44px;
  padding: 0.8rem;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  background-color: transparent;
  color: var(--text-color);
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-width: 0 !important;
  max-width: 100% !important;
}

/* Hack spécifique pour Safari iOS */
@supports (-webkit-touch-callout: none) {
  .input-container input[type="date"],
  .input-container input[type="time"] {
    font-size: 16px !important; /* Empêche le zoom sur iOS */
    display: block !important;
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
  }
  
  /* Hack pour forcer la largeur */
  .input-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    pointer-events: none;
  }
  
  /* Hack supplémentaire pour iOS */
  .input-container {
    max-width: 100%;
    overflow: hidden;
  }
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--accent-color, #e0a80d);
  box-shadow: 0 0 0 2px rgba(224, 168, 13, 0.1);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background-color: transparent;
  border: 2px solid var(--text-color);
  color: var(--text-color);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--text-color);
  transition: top 0.3s ease;
  z-index: 1;
}

.submit-button:hover {
  color: var(--background-color);
}

.submit-button:hover::before {
  top: 0;
  
}

.submit-button span {
  position: relative;
  z-index: 2;
  
}

.map-container {
  margin-top: 2rem;
}

.map {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.map iframe {
  display: block;
}

@media (max-width: 768px) {
  .contact-header {
    padding: 3rem 1rem 1.5rem;
  }
  
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .container {
    padding: 1.5rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info, .contact-form {
    padding: 1.5rem;
  }
  
  .map iframe {
    height: 300px;
  }
}

</style>
