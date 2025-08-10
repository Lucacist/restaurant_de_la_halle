<template>
  <div class="carte">
    <div class="menu-header">
      <h1>{{ currentLanguage === 'fr' ? 'Notre Carte' : 'Our Menu' }}</h1>
      <p>{{ currentLanguage === 'fr' ? 'Découvrez notre sélection de plats préparés avec des produits frais et de saison' : 'Discover our selection of dishes prepared with fresh, seasonal products' }}</p>
      
      <div class="language-selector">
        <button 
          @click="currentLanguage = 'fr'"
          :class="{ active: currentLanguage === 'fr' }"
          class="lang-button"
        >
          FR
        </button>
        <button 
          @click="currentLanguage = 'en'"
          :class="{ active: currentLanguage === 'en' }"
          class="lang-button"
        >
          EN
        </button>
      </div>
    </div>
    
    <div class="container">
      <div class="menu-title">
        <h2>{{ menuData[currentLanguage].title }}</h2>
      </div>
      
      <div class="menu-content">
        <div v-for="(section, index) in menuData[currentLanguage].sections" :key="index" class="menu-section">
          <h3 class="section-title">{{ section.name }}</h3>
          
          <div class="menu-items">
            <div class="menu-item" v-for="(item, itemIndex) in section.items" :key="itemIndex">
              <div class="menu-item-header">
                <h4>{{ item.name }}</h4>
                <span class="price">{{ item.price }}</span>
              </div>
              <p class="description" v-if="item.description">{{ item.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="menu-specials">
          <div class="menu-item special" v-for="(menu, menuIndex) in menuData[currentLanguage].menus" :key="menuIndex">
            <div class="menu-item-header">
              <h4>{{ menu.name }}</h4>
              <span class="price">{{ menu.price }}</span>
            </div>
            <p class="description" v-if="menu.description">{{ menu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import menuData from './data/menu.json';

// Langue actuelle (fr par défaut)
const currentLanguage = ref('fr');
</script>

<style scoped>
.carte {
  padding: 2rem 0;
  color: var(--text-color);
}

.menu-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.menu-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.language-selector {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.lang-button {
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid var(--accent-color);
  color: var(--text-color);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-button.active {
  background-color: var(--accent-color);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.menu-title {
  text-align: center;
  margin-bottom: 2rem;
}

.menu-title h2 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.2rem;
  color: var(--accent-color);
}

.menu-content {
  max-width: 900px;
  margin: 0 auto;
}

.menu-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  font-family: 'Playfair Display', serif;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background-color: var(--accent-color);
  margin: 0.5rem auto;
}

.menu-items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.menu-item {
  padding: 1rem 0;
  border-bottom: 1px dotted #ccc;
  transition: all 0.3s ease;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.menu-item h4 {
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
}

.price {
  font-weight: 700;
  color: var(--accent-color);
}

.description {
  color: #666;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.menu-specials {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--accent-color);
}

.menu-item.special {
  background-color: rgba(224, 168, 13, 0.05);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--accent-color);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .menu-header h1 {
    font-size: 2rem;
  }
  
  .menu-title h2 {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .lang-button {
    width: 100%;
    max-width: 120px;
  }
}
</style>
