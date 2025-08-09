<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Restaurant de la Halle</h3>
        <p>Une cuisine authentique et raffinée</p>
      </div>
      <div class="footer-section">
        <h3>Horaires</h3>
        <p>Lundi - Vendredi: 12h - 14h30 | 19h - 22h30</p>
        <p>Samedi - Dimanche: 12h - 15h | 19h - 23h</p>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <p>123 Rue de la Halle</p>
        <p>75001 Paris, France</p>
        <p>Tél: 01 23 45 67 89</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Restaurant de la Halle. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
// Footer component
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
