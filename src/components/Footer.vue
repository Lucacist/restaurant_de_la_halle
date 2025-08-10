<template>
  <footer class="footer">
    <div class="footer-content" v-if="!isContactPage">
      <div class="footer-section">
        <h3>Restaurant de la Halle</h3>
        <p>Une cuisine authentique et raffinée</p>
      </div>
      <div class="footer-section">
        <h3>HORAIRES</h3>
        <p>LUNDI : 8h30 - 20h30</p>
        <p>MARDI : 10h00 - 15h00</p>
        <p>MERCREDI : FERMÉ</p>
        <p>JEUDI : 10H00 - 15H00 / 18h00 - 20h30</p>
        <p>VENDREDI : 10H00 - 15H00 / 18H00 - 21h00</p>
        <p>SAMEDI : 10H00 - 21h00</p>
        <p>DIMANCHE : 10H00 - 20h30</p>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <p>Place Isaac Benserade</p>
        <p>27480 Lyons-la-Forêt, France</p>
        <p>Tél: 02 32 49 49 92</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Restaurant de la Halle. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isContactPage = computed(() => route.path === '/contact');
</script>

<style scoped>
.footer {
  color: var(--text-color);
  margin-top: 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 1rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
}

.footer-section p {
  margin: 0.5rem 0;
}

.footer-bottom {
  text-align: center;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-section {
    text-align: center;
    margin-bottom: 1.5rem;
  }
}
</style>
