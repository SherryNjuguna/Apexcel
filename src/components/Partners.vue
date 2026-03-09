<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();


 const partners = [
  {
    id: 1,
    name: 'Compassion International Kenya (KE504, KE0299, KE335)',
    description: 'Compassion International releases children from poverty in Jesus name by caring for their mind, body, and soul. Working through over 8,000 local churches across 29 countries, they equip communities to know, love, and protect vulnerable children for the long term.',
    logo: '/compasionlogo.png', 
  },
  {
    id: 2,
    name: 'Malengo',
    description: 'Malengo empowers high-potential students from low-income backgrounds to access university and vocational education abroad. Through scholarships, mentorship, and community, they have helped over 400 scholars build brighter futures — for themselves and their families.',
    logo: '/Malengo.png', 
  },
]
</script>

<template>
     <section class="partners-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <h2 class="section-main-title">Our Partners/Clients</h2>
        <p class="section-subtitle">Organizations that we have worked with, who share our vision for youth transformation</p>
        <div class="accent-line mx-auto"></div>
      </div>

      <!-- Partner Cards -->
      <div class="row g-4 justify-content-center">
        <div
          class="col-lg-5 col-md-6"
          v-for="partner in partners"
          :key="partner.id"
        >
          <div class="partner-card">
            <!-- Logo area -->
            <div class="partner-logo-wrap">
              <img
                v-if="partner.logo"
                :src="partner.logo"
                :alt="partner.name + ' logo'"
                class="partner-logo"
              />
              <!-- Placeholder if no logo provided yet -->
              <div v-else class="partner-logo-placeholder">
                {{ partner.name.charAt(0) }}
              </div>
            </div>

            <!-- Divider -->
            <div class="card-divider"></div>

            <!-- Info -->
            <div class="partner-info">
              <h3 class="partner-name">{{ partner.name }}</h3>
              <p class="partner-description">{{ partner.description }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  </template>
  
  <style scoped>
/* ===== PARTNERS SECTION ===== */ 
.partners-section {
  padding: 5rem 0;
  background: white;
}

/* ── Header — matches your existing section headers ──────── */
.section-header {
  margin-bottom: 3rem;
}
.section-main-title {
  color: rgb(20, 101, 167);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}
.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, rgb(20, 101, 167) 0%, rgb(12, 65, 107) 100%);
  border-radius: 2px;
  margin-bottom: 2rem;
}

/* ── Partner card — matches your .foundation-card style ───── */
.partner-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(20, 101, 167, 0.2);
}

/* ── Logo area ───────────────────────────────────────────── */
.partner-logo-wrap {
  width: 160px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.partner-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.partner-logo-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(20, 101, 167, 0.1);
  border: 2px solid rgba(20, 101, 167, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: rgb(20, 101, 167);
}

/* ── Divider ─────────────────────────────────────────────── */
.card-divider {
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, rgb(20, 101, 167), rgb(12, 65, 107));
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

/* ── Partner info ────────────────────────────────────────── */
.partner-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.partner-name {
  color: rgb(20, 101, 167);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
}
.partner-description {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}
.partner-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgb(20, 101, 167);
  background: rgba(20, 101, 167, 0.08);
  border: 1px solid rgba(20, 101, 167, 0.2);
  padding: 5px 14px;
  border-radius: 100px;
  margin-top: 0.25rem;
}
.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgb(20, 101, 167);
  animation: pulse 2s infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(1.5); }
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .section-main-title { font-size: 2.2rem; }
  .partner-card { padding: 2rem 1.5rem; }
}
@media (max-width: 480px) {
  .section-main-title { font-size: 1.8rem; }
}
  </style>
  