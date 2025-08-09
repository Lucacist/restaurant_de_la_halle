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
            <p>123 Rue de la Halle</p>
            <p>75001 Paris, France</p>
          </div>
          
          <div class="info-item">
            <h3>Téléphone</h3>
            <p>01 23 45 67 89</p>
          </div>
          
          <div class="info-item">
            <h3>Email</h3>
            <p>contact@restaurantdelahalle.fr</p>
          </div>
          
          <div class="info-item">
            <h3>Horaires d'ouverture</h3>
            <p>Lundi - Vendredi: 12h - 14h30 | 19h - 22h30</p>
            <p>Samedi - Dimanche: 12h - 15h | 19h - 23h</p>
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
            
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" id="date" v-model="form.date">
            </div>
            
            <div class="form-group">
              <label for="time">Heure</label>
              <input type="time" id="time" v-model="form.time">
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="5"></textarea>
            </div>
            
            <button type="submit" class="submit-button">Envoyer</button>
          </form>
        </div>
      </div>
      
      <div class="map-container">
        <h2>Nous trouver</h2>
        <div class="map-placeholder">
          <!-- Ici, vous pourrez intégrer une carte Google Maps -->
          <p>Carte Google Maps à intégrer ici</p>
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
}

.contact-header {
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.contact-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #e0a80d;
}

.contact-header p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-info, .contact-form {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background-color: #e0a80d;
  margin-top: 0.5rem;
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item h3 {
  font-size: 1.2rem;
  color: #e0a80d;
  margin-bottom: 0.5rem;
}

.info-item p {
  margin: 0.2rem 0;
  color: #666;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

input, select, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.submit-button {
  background-color: #e0a80d;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #c89000;
}

.map-container {
  margin-top: 2rem;
}

.map-placeholder {
  background-color: #f5f5f5;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2.5rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .map-placeholder {
    height: 300px;
  }
}
</style>
