<template>
  <div class="carte">
    <div class="menu-header">
      <h1>Notre Carte</h1>
      <p>Découvrez notre sélection de plats préparés avec des produits frais et de saison</p>
    </div>
    
    <div class="container">
      <div class="menu-navigation">
        <button 
          v-for="category in categories" 
          :key="category.id" 
          @click="activeCategory = category.id"
          :class="{ active: activeCategory === category.id }"
          class="menu-nav-button"
        >
          {{ category.name }}
        </button>
      </div>
      
      <div class="menu-section" v-for="category in categories" :key="category.id" v-show="activeCategory === category.id">
        <h2>{{ category.name }}</h2>
        <div class="menu-items">
          <div class="menu-item" v-for="item in category.items" :key="item.id">
            <div class="menu-item-header">
              <h3>{{ item.name }}</h3>
              <span class="price">{{ item.price }}€</span>
            </div>
            <p class="description">{{ item.description }}</p>
            <p class="allergens" v-if="item.allergens">Allergènes: {{ item.allergens }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Catégories de menu avec plats
const categories = [
  {
    id: 'entrees',
    name: 'Entrées',
    items: [
      {
        id: 'e1',
        name: 'Salade de chèvre chaud',
        description: 'Salade verte, toasts de chèvre, miel, noix et vinaigrette balsamique',
        price: '12',
        allergens: 'Lactose, Fruits à coque'
      },
      {
        id: 'e2',
        name: 'Foie gras maison',
        description: 'Foie gras mi-cuit, chutney de figues et pain brioché toasté',
        price: '16',
        allergens: 'Gluten'
      },
      {
        id: 'e3',
        name: 'Velouté de saison',
        description: 'Velouté de légumes de saison avec croutons et crème fraîche',
        price: '9',
        allergens: 'Gluten, Lactose'
      }
    ]
  },
  {
    id: 'plats',
    name: 'Plats',
    items: [
      {
        id: 'p1',
        name: 'Filet de bœuf Rossini',
        description: 'Filet de bœuf, escalope de foie gras poêlée, sauce aux truffes et purée maison',
        price: '28',
        allergens: 'Lactose'
      },
      {
        id: 'p2',
        name: 'Suprême de volaille fermière',
        description: 'Suprême de volaille, sauce aux morilles et légumes de saison',
        price: '22',
        allergens: 'Lactose'
      },
      {
        id: 'p3',
        name: 'Risotto aux champignons',
        description: 'Risotto crémeux aux champignons des bois et parmesan',
        price: '18',
        allergens: 'Lactose'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        id: 'd1',
        name: 'Crème brûlée à la vanille',
        description: 'Crème brûlée parfumée à la vanille de Madagascar',
        price: '9',
        allergens: 'Œufs, Lactose'
      },
      {
        id: 'd2',
        name: 'Fondant au chocolat',
        description: 'Fondant au chocolat noir, cœur coulant et glace vanille',
        price: '10',
        allergens: 'Gluten, Œufs, Lactose'
      },
      {
        id: 'd3',
        name: 'Assiette de fromages affinés',
        description: 'Sélection de fromages affinés et pain aux noix',
        price: '12',
        allergens: 'Lactose, Gluten, Fruits à coque'
      }
    ]
  },
  {
    id: 'boissons',
    name: 'Boissons',
    items: [
      {
        id: 'b1',
        name: 'Sélection de vins au verre',
        description: 'Demandez notre carte des vins pour plus de détails',
        price: '6-12',
        allergens: 'Sulfites'
      },
      {
        id: 'b2',
        name: 'Eaux minérales',
        description: 'Plate ou gazeuse (75cl)',
        price: '4',
        allergens: ''
      },
      {
        id: 'b3',
        name: 'Café gourmand',
        description: 'Expresso accompagné de mignardises',
        price: '8',
        allergens: 'Gluten, Œufs, Lactose'
      }
    ]
  }
];

// Catégorie active par défaut
const activeCategory = ref('entrees');
</script>

<style scoped>
.carte {
  width: 100%;
}

.menu-header {
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.menu-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #e0a80d;
}

.menu-header p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.menu-navigation {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.menu-nav-button {
  background-color: transparent;
  border: 2px solid #e0a80d;
  color: #333;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-nav-button:hover, .menu-nav-button.active {
  background-color: #e0a80d;
  color: white;
}

.menu-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
}

.menu-section h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #e0a80d;
  margin: 0.5rem auto;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.menu-item {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.menu-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.menu-item h3 {
  margin: 0;
  color: #333;
  font-size: 1.2rem;
}

.price {
  font-weight: bold;
  color: #e0a80d;
  font-size: 1.2rem;
}

.description {
  color: #666;
  margin-bottom: 0.5rem;
}

.allergens {
  font-size: 0.8rem;
  color: #999;
  font-style: italic;
}

@media (max-width: 768px) {
  .menu-header h1 {
    font-size: 2.5rem;
  }
  
  .menu-items {
    grid-template-columns: 1fr;
  }
  
  .menu-navigation {
    flex-direction: column;
    align-items: center;
  }
  
  .menu-nav-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
