<template>
  <div class="home">
    <div class="hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <h1>Restaurant de la Halle</h1>
        <p>
          Au coeur du village de Lyons-la-Forêt. Notre Chef vous compose une
          carte pleines de découvertes
        </p>
        <router-link to="/carte" class="cta-button"
          >Découvrir notre carte</router-link
        >
      </div>
    </div>

    <section class="about-section">
      <div class="container">
        <h2>Bienvenue chez nous</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              RESTAURANT DE LA HALLE est un établissement familial situé au cœur
              de Lyons-la-Forêt, en Normandie. Depuis notre ouverture, nous nous
              engageons à offrir à nos clients une expérience culinaire
              exceptionnelle, en mettant l'accent sur des produits frais et de
              saison.
            </p>
            <p>
              Notre équipe de professionnels passionnés travaille chaque jour
              pour vous proposer des plats savoureux et raffinés, dans une
              ambiance chaleureuse et conviviale. Que ce soit pour un déjeuner
              rapide, un dîner romantique ou une célébration spéciale, nous
              sommes là pour faire de chaque repas un moment inoubliable.
            </p>
            <router-link to="/contact" class="text-link"
              >Réserver une table</router-link
            >
          </div>
          <div class="about-image">
            <img
              class="image-placeholder"
              src="/img/presentation_restau.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="specialties-section">
      <div class="container">
        <div class="specialties-grid">
          <div class="specialty-card">
            <div class="specialty-image">
              <img class="image-placeholder2" src="/img/plat1.webp" alt="" />
            </div>
            <h3>Cuisine Normande</h3>
            <p>
              Savourez des plats authentiques préparés avec des produits locaux
              et de saison.
            </p>
          </div>
          <div class="specialty-card">
            <div class="specialty-image">
              <img class="image-placeholder2" src="/img/plat2.webp" alt="" />
            </div>
            <h3>Menus du jour</h3>
            <p>
              Découvrez nos menus du jour, élaborés à partir d'ingrédients frais
              pour des saveurs exceptionnelles.
            </p>
          </div>
          <div class="specialty-card">
            <div class="specialty-image">
              <img class="image-placeholder2" src="/img/plat3.webp" alt="" />
            </div>
            <h3>Événements privés</h3>
            <p>
              Organisez vos événements privés dans un cadre chaleureux avec des
              solutions sur mesure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Témoignages -->
    <section class="testimonials-section">
      <div class="container letter">
        <h2>Ce que nos clients disent</h2>

        <!-- Témoignage principal -->
        <div class="main-testimonial">
          <div class="testimonial-content">
            <div class="quote-icon">❝</div>
            <p class="testimonial-text">
              Un endroit incroyablement chaleureux avec une cuisine exquise. Le
              service est excellent et les plats sont un véritable délice. Je
              recommande vivement !
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Marie Dupont</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Témoignages secondaires -->
        <div class="secondary-testimonials">
          <div class="testimonial-card">
            <div class="quote-icon">❝</div>
            <p>
              Superbe petit restaurant plein de charme. Il y fait bon se poser
              en terrasse sur la très belle place. L'intérieur est cosy. Les
              serveur sont tous adorable et ont été aux petits soins avec nous.
              Très bonne cuisine généreuse !
            </p>
            <div class="testimonial-author">
              <h4>Laetitia Villemin</h4>
              <p>Local Guide</p>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="quote-icon">❝</div>
            <p>
              EXTRA. Que dire? On s’est régalés. Entrée plat dessert pour 38€
              par personne. Tout était délicieux, mention spéciale pour le
              porcelet laqué et confit au cidre. Le service était rapide.
              Vraiment rien à redire !
            </p>
            <div class="testimonial-author">
              <h4>Sandra Irz</h4>
              <p>Local Guide</p>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="quote-icon">❝</div>
            <p>
              J’ai adoré ce restaurant. La cuisine était excellente. La purée de
              patates douces était divine et le gratin dauphinois incroyable.
              Tarte tatin superbe aussi. Cuisson impeccable. Service très
              sympathique. Assez rapide bien que ultra plein. Très très contente
              et agréablement surprise car nous sommes venus là par hasard.
            </p>
            <div class="testimonial-author">
              <h4>Florence FLAIX</h4>
              <p>Local Guide</p>
            </div>
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
  background-image: url("/img/restaurant.png");
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
  content: "";
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

.letter {
  font-family: "Times New Roman", Times, serif;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
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
  color: var(--text-color);
  font-weight: bold;
  border-radius: 2px;
  border: 2px solid var(--text-color);
  padding: 0.5rem 1rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.text-link::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--text-color);
  transition: top 0.3s ease;
  z-index: -1;
}

.text-link:hover {
  color: var(--background-color);
}

.text-link:hover::before {
  top: 0;
}

.about-image {
  display: flex;
  align-items: center;
  justify-content: center;
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

.image-placeholder2 {
  height: 500px;
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
  color: var(--text-color);
}

.specialty-card p {
  padding: 0 1rem 1.5rem;
  margin: 0;
}

.testimonials-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-family: EsRebond, Times, serif;
  color: var(--text-color);
}

/* Témoignage principal */
.main-testimonial {
  background-color: var(--background-color-var);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.quote-icon {
  font-size: 3rem;
  color: var(--text-color);
  position: absolute;
  top: -2rem;
  left: -1rem;
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
  font-style: italic;
  text-align: left;
}

.testimonial-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-info h4 {
  margin: 0;
  font-weight: bold;
  color: var(--text-color);
}

.author-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

/* Témoignages secondaires */
.secondary-testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial-card {
  background-color: var(--background-color-var);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  gap: 1rem;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-card .quote-icon {
  font-size: 2rem;
  top: 0.2rem;
  left: 1rem;
}

.testimonial-card p {
  font-style: italic;
  line-height: 1.6;
  margin: 0;
}

.testimonial-card .testimonial-author h4 {
  margin: 0;
  font-weight: bold;
  color: var(--text-color);
}

.testimonial-card .testimonial-author p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  font-style: normal;
}

@media (max-width: 950px) {
  .about-content {
    flex-direction: column;
  }

  .secondary-testimonials {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.2rem;
  }

  .specialties-grid {
    grid-template-columns: 1fr;
  }

  .secondary-testimonials {
    grid-template-columns: 1fr;
  }

  .image-placeholder {
    width: 100%;
    height: auto;
  }

  .image-placeholder2 {
    width: 100%;
    height: auto;
  }
}
</style>
