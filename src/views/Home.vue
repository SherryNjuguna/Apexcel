<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const desktopImage = ref('/heroA.jpg')
const mobileImage = ref('/heroA1.jpg')

// Scroll to programs section smoothly
const scrollToPrograms = () => {
  const programsSection = document.getElementById('programs-section')
  if (programsSection) {
    programsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Navigate to about page
const navigateToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      
      <!-- Background Images -->
      <div class="hero-background desktop-bg">
        <img :src="desktopImage" alt="Apexcel Ventures - Developing Leaders" class="background-image">
      </div>
      <div class="hero-background mobile-bg">
        <img :src="mobileImage" alt="Apexcel Ventures - Developing Leaders" class="background-image">
      </div>
      
      <!-- Hero Content -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <p class="intro-statement">We build:</p>
            <h1 class="main-headline">
              <span class="headline-item">Visionary Leaders.</span>
              <span class="headline-item">Innovative Thinkers.</span>
              <span class="headline-item">Successful Entrepreneurs.</span>
            </h1>
            <p class="tagline">Equipping people for the journey ahead.</p>
            
            <div class="action-buttons">
              <button @click="scrollToPrograms" class="btn btn-primary btn-program">
                Our Programs
              </button>
              <button @click="navigateToAbout" class="btn btn-outline-light btn-learn-more">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section id="who-we-are" class="who-we-are-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="section-header">
              <h2 class="section-title">Who We Are</h2>
              <div class="accent-line"></div>
            </div>
            
            <p class="lead-text">
              Apexcel Ventures is a <span class="highlight">leadership development venture</span> 
              born from a deep conviction that <span class="highlight">young people hold the key</span> 
              to a safer, more prosperous, and purpose-driven society.
            </p>

            <div class="core-pillars">
              <div class="pillar">
                <div class="pillar-icon">👑</div>
                <span class="pillar-text">Leadership</span>
              </div>
              <div class="pillar">
                <div class="pillar-icon">💻</div>
                <span class="pillar-text">Technology</span>
              </div>
              <div class="pillar">
                <div class="pillar-icon">🚀</div>
                <span class="pillar-text">Entrepreneurship</span>
              </div>
            </div>

            <p class="description-text">
              We equip young people with the <strong>right tools, mindset, and opportunities</strong> 
              to confront unemployment, leadership gaps, and limited access to practical skills. 
              Our approach blends leadership development, entrepreneurship training, and tech 
              innovation in every program.
            </p>

            <div class="impact-stats">
              <div class="stat-item">
                <div class="stat-number">01</div>
                <div class="stat-label">Youth First</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Practical Skills</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">360°</div>
                <div class="stat-label">Holistic Approach</div>
              </div>
            </div>

            <div class="cta-buttons">
              <button @click="$router.push('/about')" class="btn btn-primary">
                Learn Our Story
              </button>
              <button @click="scrollToPrograms" class="btn btn-outline-primary">
                See Programs
              </button>
            </div>
          </div>

          <div class="col-md-6">
            <div class="image-container">
              <img 
                src="/apexce2.jpg" 
                alt="Apexcel Ventures - Empowering Youth"
                class="main-image"
              >
              <div class="floating-element element-1"></div>
              <div class="floating-element element-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Programs Section -->
    <section id="programs-section" class="programs-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">Our Programs</h2>
          <p class="section-subtitle">Transforming young lives through comprehensive development programs</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4">
          <!-- Leadership Development Program -->
          <div class="col-lg-4 col-md-6">
            <div class="program-card">
              <div class="card-image">
                <img src="/sam by.jpg" alt="Leadership Development" class="img-fluid">
              </div>
              <div class="card-content">
                <h3 class="program-name">Leadership Development</h3>
                <p class="program-description">
                  Empowering young individuals with skills, knowledge, and support to excel in life 
                  and create impact beyond themselves through mentorship, transition management, 
                  and gender-specific programs.
                </p>
                <div class="program-features">
                  <span class="feature-tag">Mentorship</span>
                  <span class="feature-tag">Coaching</span>
                  <span class="feature-tag">Personal Development</span>
                </div>
                <button @click="$router.push('/programs')" class="btn-program-card">
                  Explore Leadership Program
                </button>
              </div>
            </div>
          </div>

          <!-- Tech Training Program -->
          <div class="col-lg-4 col-md-6">
            <div class="program-card">
              <div class="card-image">
                <img src="/tech.jpg" alt="Tech Training" class="img-fluid">
              </div>
              <div class="card-content">
                <h3 class="program-name">Tech Training</h3>
                <p class="program-description">
                  Equipping young people with essential digital and technical skills through 
                  hands-on training in digital literacy, cybersecurity, and web development 
                  to thrive in the digital economy.
                </p>
                <div class="program-features">
                  <span class="feature-tag">Digital Literacy</span>
                  <span class="feature-tag">Web Development</span>
                  <span class="feature-tag">Cybersecurity</span>
                </div>
                <button @click="$router.push('/tech')" class="btn-program-card">
                  Explore Tech Program
                </button>
              </div>
            </div>
          </div>

          <!-- Entrepreneurship Program -->
          <div class="col-lg-4 col-md-6">
            <div class="program-card">
              <div class="card-image">
                <img src="/sam ml.jpg" alt="Entrepreneurship" class="img-fluid">
              </div>
              <div class="card-content">
                <h3 class="program-name">Entrepreneurship (Kuza)</h3>
                <p class="program-description">
                  Instilling an entrepreneurial mindset and equipping youth with business skills 
                  for success. Developing creativity, resilience, and problem-solving abilities 
                  to identify opportunities and create impact.
                </p>
                <div class="program-features">
                  <span class="feature-tag">Business Skills</span>
                  <span class="feature-tag">Financial Literacy</span>
                  <span class="feature-tag">Innovation</span>
                </div>
                <button @click="$router.push('/entrepreneurship')" class="btn-program-card">
                  Explore Kuza Program
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-5">
          <p class="cta-text">Ready to start your transformation journey?</p>
          <button @click="$router.push('/programs')" class="btn btn-primary btn-lg">
            View All Programs
          </button>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<style scoped>
/* ===== HERO SECTION STYLES ===== */
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.desktop-bg {
  display: block;
}

.mobile-bg {
  display: none;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.intro-statement {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.main-headline {
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.headline-item {
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.tagline {
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 2.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ===== BUTTON STYLES ===== */
.btn-primary {
  background: rgb(20, 101, 167);
  border: 2px solid rgb(20, 101, 167);
  padding: 12px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(20, 101, 167, 0.3);
  color: white;
}

.btn-primary:hover {
  background: rgb(16, 85, 140);
  border-color: rgb(16, 85, 140);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(20, 101, 167, 0.4);
  color: white;
}

.btn-outline-light {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 12px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  background: white;
  color: rgb(20, 101, 167);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
}

.btn-outline-primary {
  background: transparent;
  border: 2px solid rgb(20, 101, 167);
  color: rgb(20, 101, 167);
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: rgb(20, 101, 167);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(20, 101, 167, 0.3);
}

/* ===== WHO WE ARE SECTION STYLES ===== */
.who-we-are-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.section-header {
  position: relative;
  margin-bottom: 2rem;
}

.section-title {
  color: rgb(20, 101, 167);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, rgb(20, 101, 167) 0%, rgb(12, 65, 107) 100%);
  border-radius: 2px;
  margin-bottom: 2rem;
}

.image-container {
  position: relative;
  padding: 20px;
}

.main-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.main-image:hover {
  transform: translateY(-5px);
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(20, 101, 167) 0%, rgba(20, 101, 167, 0.3) 100%);
  animation: float 3s ease-in-out infinite;
}

.element-1 {
  width: 80px;
  height: 80px;
  top: -10px;
  right: -10px;
  animation-delay: 0s;
}

.element-2 {
  width: 60px;
  height: 60px;
  bottom: 20px;
  left: -20px;
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.lead-text {
  font-size: 1.3rem;
  color: #333;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 2rem;
}

.highlight {
  background: linear-gradient(120deg, rgba(20, 101, 167, 0.2) 0%, rgba(20, 101, 167, 0.1) 100%);
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-weight: 600;
}

.core-pillars {
  display: flex;
  gap: 1.5rem;
  margin: 2rem 0;
}

.pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.pillar-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: rgba(20, 101, 167, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.pillar:hover .pillar-icon {
  transform: scale(1.1);
}

.pillar-text {
  font-weight: 600;
  color: rgb(20, 101, 167);
  font-size: 0.9rem;
}

.description-text {
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.impact-stats {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(20, 101, 167, 0.05);
  border-radius: 15px;
  border-left: 4px solid rgb(20, 101, 167);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: rgb(20, 101, 167);
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ===== PROGRAMS SECTION STYLES ===== */
.programs-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.programs-section .section-header {
  margin-bottom: 3rem;
}

.programs-section .section-title {
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

.program-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.program-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.program-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.program-name {
  color: rgb(20, 101, 167);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.program-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.program-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: rgba(20, 101, 167, 0.1);
  color: rgb(20, 101, 167);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.btn-program-card {
  background: rgb(20, 101, 167);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
}

.btn-program-card:hover {
  background: rgb(16, 85, 140);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(20, 101, 167, 0.3);
}

.cta-text {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
    padding: 2rem 0;
  }
  
  .desktop-bg {
    display: none;
  }
  
  .mobile-bg {
    display: block;
  }
  
  .main-headline {
    font-size: 2.5rem;
  }
  
  .headline-item {
    font-size: 2.2rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .intro-statement {
    font-size: 1.1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-outline-light {
    width: 200px;
    margin: 0.25rem 0;
  }

  .section-title {
    font-size: 2rem;
  }
  
  .lead-text {
    font-size: 1.1rem;
  }
  
  .core-pillars {
    justify-content: center;
    gap: 1rem;
  }
  
  .impact-stats {
    gap: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .floating-element {
    display: none;
  }
  
  .programs-section {
    padding: 3rem 0;
  }
  
  .programs-section .section-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .card-image {
    height: 200px;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .program-name {
    font-size: 1.3rem;
  }
  
  .program-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 60vh;
  }
  
  .main-headline {
    font-size: 2rem;
  }
  
  .headline-item {
    font-size: 1.8rem;
  }
  
  .tagline {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }
  
  .program-card {
    margin-bottom: 2rem;
  }
  
  .program-features {
    justify-content: center;
  }
}

/* ===== ANIMATIONS ===== */
.hero-section .container > * {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>