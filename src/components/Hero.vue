<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

/**
 * Function to check if the current route matches the given path
 */
const isActive = (path) => computed(() => route.path.startsWith(path));

</script>

<template>
    <section class="hero-section">
      <!-- Background Image -->
      <img
        src="/heroA1.jpg"
        alt="Apexcel Background"
        class="hero-image"
      />
  
      <!-- Overlay with smooth gradient -->
      <div class="hero-overlay"></div>
  
      <!-- Content -->
      <div class="hero-content container">
        <div class="text-white hero-text">
          <h1 class="hero-title">
            Building Bold Thinkers for a Dynamic World
          </h1>
          <p class="hero-description">
            We are dedicated to developing a generation of visionary leaders,
            innovative thinkers, and successful entrepreneurs.
          </p>
          <div class="hero-buttons">
            <router-link to="/programs" class="text-white text-decoration-none">
              <button class="btn btn-primary">
                Our Programs
              </button>
            </router-link>
            
            <router-link to="/about" class="text-white text-decoration-none">
              <button class="btn btn-primary">
                Learn More
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* Hero Image */
.hero-image {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  display: block;
}

@media (min-width: 640px) {
  .hero-image {
    height: 80vh;
  }
}

/* Overlay with smooth gradient */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.2) 70%,
    transparent 100%
  );
}

/* Hero Content */
.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  z-index: 2;
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-primary {
  background-color: rgb(20, 101, 167);
  color: white;
  border-radius: 1.5rem;
  border: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex: 1 1 auto; /* Allows buttons to grow and shrink as needed */
}

.btn-primary:hover {
  background-color: rgb(23, 150, 247);
  transform: translateY(-2px);
}

@media (min-width: 640px) {
  .hero-content {
    padding: 3rem 5rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-wrap: nowrap; /* Prevent wrapping on larger screens */
  }
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 3rem 8rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
}
</style>