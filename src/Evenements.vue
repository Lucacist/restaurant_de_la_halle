<template>
  <div class="evenements">
    <div class="header">
      <h1>Nos Événements</h1>
      <p>Découvrez les événements spéciaux organisés au Restaurant de la Halle</p>
    </div>
    
    <div class="container">
      <div class="event-card">
        <div class="event-image">
          <img src="/img/karaoke.webp" alt="Soirée Karaoké" class="event-img" />
        </div>
      </div>
      
      <div class="external-links">
        <a href="https://domainedelorleau.ffe.com/" target="_blank" class="external-link">
          <span class="link-text">Découvrir le Domaine de l'Orleau</span>
          <span class="link-arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Événements component
</script>

<style scoped>
.evenements {
  color: var(--text-color);
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

.event-card {
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.event-image {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.event-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.event-card:hover .event-img {
  transform: scale(1.02);
}



.external-links {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.external-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--background-color-var);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  transition: all 0.3s ease;
}

.external-link:hover {
  background-color: var(--accent-color);
}

.link-arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.external-link:hover .link-arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .event-content {
    padding: 1.5rem;
  }
  
  .event-content h2 {
    font-size: 1.5rem;
  }
}
</style>
