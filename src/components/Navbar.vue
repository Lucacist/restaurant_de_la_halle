<template>
  <nav class="navbar">
    <div class="nav-content">
      <div class="logo">
        <router-link to="/">Restaurant de la Halle</router-link>
      </div>
      
      <!-- Navigation desktop -->
      <div class="nav-links desktop-nav">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/carte" class="nav-link">Carte</router-link>
        <router-link to="/evenements" class="nav-link">Evénements</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
      
      <!-- Burger menu button -->
      <div class="burger-menu" @click="toggleMenu">
        <div :class="['burger-bar', { 'open': isMenuOpen }]"></div>
        <div :class="['burger-bar', { 'open': isMenuOpen }]"></div>
      </div>
    </div>
    
    <!-- Mobile navigation menu -->
    <div :class="['mobile-nav', { 'open': isMenuOpen }]">
      <router-link to="/" class="nav-link" @click="closeMenu">Accueil</router-link>
      <router-link to="/carte" class="nav-link" @click="closeMenu">Carte</router-link>
      <router-link to="/evenements" class="nav-link" @click="closeMenu">Evénements</router-link>
      <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'; // Empêche le défilement du body quand le menu est ouvert
  } else {
    document.body.style.overflow = ''; // Rétablit le défilement
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  z-index: 1000;
  display: flex;
  padding: 0rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  max-width: 1200px;
  padding: 1rem 0rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 1001; 
}

.logo a {
  color: var(--text-color);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #e0a80d;
}

/* Burger menu styles */
.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 1001; /* Pour rester au-dessus du menu mobile */
}

.burger-bar {
  width: 100%;
  height: 3px;
  background-color: var(--text-color);
  border-radius: 5px;
  transition: all 0.3s ease;
}

.burger-bar.open:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}


.burger-bar.open:nth-child(2) {
  transform: translateY(-5px) rotate(-45deg);
}

/* Mobile navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.mobile-nav.open {
  transform: translateY(0);
}

.mobile-nav .nav-link {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .burger-menu {
    display: flex;
  }
}

@media (min-width: 769px) {
  .mobile-nav {
    display: none;
  }
}
</style>
