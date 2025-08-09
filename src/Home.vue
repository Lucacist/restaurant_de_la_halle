<template>
  <div class="home">
    <div class="hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <h1>Restaurant de la Halle</h1>
        <p>Au coeur du village de Lyons-la-Forêt.  Notre Chef vous compose une carte pleines de découvertes</p>
        <router-link to="/carte" class="cta-button">Découvrir notre carte</router-link>
      </div>
    </div>
    
    <section class="about-section">
      <div class="container">
        <h2>Bienvenue chez nous</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              Le Restaurant de la Halle vous accueille dans un cadre chaleureux et élégant pour vous faire découvrir une cuisine française raffinée, préparée avec des produits frais et de saison.
            </p>
            <p>
              Notre chef et son équipe mettent tout leur savoir-faire à votre service pour vous offrir une expérience gastronomique inoubliable.
            </p>
            <router-link to="/contact" class="text-link">Réserver une table</router-link>
          </div>
          <div class="about-image">
            <!-- Placeholder pour une image -->
            <div class="image-placeholder">Image du restaurant</div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="specialties-section">
      <div class="container">
        <h2>Nos spécialités</h2>
        <div class="specialties-grid">
          <div class="specialty-card">
            <div class="specialty-image">
              <!-- Placeholder pour une image -->
              <div class="image-placeholder">Image du plat</div>
            </div>
            <h3>Entrées raffinées</h3>
            <p>Découvrez nos entrées préparées avec des produits frais et de saison.</p>
          </div>
          <div class="specialty-card">
            <div class="specialty-image">
              <!-- Placeholder pour une image -->
              <div class="image-placeholder">Image du plat</div>
            </div>
            <h3>Plats signature</h3>
            <p>Savourez nos plats signature, alliant tradition et créativité.</p>
          </div>
          <div class="specialty-card">
            <div class="specialty-image">
              <!-- Placeholder pour une image -->
              <div class="image-placeholder">Image du plat</div>
            </div>
            <h3>Desserts exquis</h3>
            <p>Terminez votre repas en beauté avec nos desserts faits maison.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page component
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/img/restaurant.png');
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  padding: 0 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  color: white;
  border: 2px solid var(--background-color);
  padding: 0.8rem 1.5rem;
  border-radius: 2px;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  transition: top 0.3s ease;
  z-index: -1;
}

.cta-button:hover {
  color: var(--text-color);
}

.cta-button:hover::before {
  top: 0;
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.text-link {
  color: #e0a80d;
  font-weight: bold;
  text-decoration: none;
}

.text-link:hover {
  text-decoration: underline;
}

.about-image {
  flex: 1;
}

.image-placeholder {
  background-color: #ddd;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-style: italic;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.specialty-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.specialty-card:hover {
  transform: translateY(-5px);
}

.specialty-image .image-placeholder {
  height: 200px;
}

.specialty-card h3 {
  padding: 1rem;
  margin: 0;
  color: #e0a80d;
}

.specialty-card p {
  padding: 0 1rem 1.5rem;
  margin: 0;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .specialties-grid {
    grid-template-columns: 1fr;
  }
}
</style>
