<script setup>
// Components
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from 'vue'

// Hero section images
const desktopImage = ref('/heroA11.jpg')
const mobileImage = ref('/heroA1.jpg')
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="about-hero-section">
      <div class="hero-overlay"></div>
      
      <!-- Background Images -->
      <div class="hero-background desktop-bg">
        <img :src="desktopImage" alt="About Apexcel Ventures" class="background-image">
      </div>
      <div class="hero-background mobile-bg">
        <img :src="mobileImage" alt="About Apexcel Ventures" class="background-image">
      </div>
      
      <!-- Hero Content -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="about-hero-title">About Apexcel</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- About Content Section -->
    <section class="about-content-section">
      <div class="container">
        <div class="row align-items-center">
          <!-- Text Content -->
          <div class="col-lg-6">
            <div class="content-wrapper">
              <h2 class="section-title">Our Story</h2>
              <div class="accent-line"></div>
              
              <div class="about-text">
                <p>
                  <strong>Apexcel is a leadership development venture</strong> with the focus of growing 
                  young people into impactful and transformational leaders by equipping them with the tools 
                  necessary to identify and fill gaps in society.
                </p>
                
                <p>
                  Our programs are tailor-made to stir up curiosity and lead them on a path of continuous 
                  growth as they take part in societal change.
                </p>

                <h3 class="subsection-title">Our Background</h3>
                <p>
                  Apexcel Ventures believes in the unique potential and abilities that every young person has, 
                  and therefore it was born out of a deep conviction that young people hold the key to a safer, 
                  more prosperous, and purpose-driven society, if only they are equipped with the right tools, 
                  mindset, and opportunities.
                </p>
                
                <p>
                  Established with the objective of confronting the increasing challenges of unemployment, 
                  leadership gaps, and limited access to practical business and life skills, we ensure that 
                  young people are equipped with tools necessary for real world readiness.
                </p>
                
                <p>
                  We recognize that leadership is not just about titles, but about influence, responsibility, 
                  and the ability to solve problems. 
                </p>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="col-lg-6">
            <div class="about-image-container">
              <img 
                src="/bulbA.jpg" 
                alt="Apexcel Ventures Team"
                class="about-main-image"
              >
              <div class="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision & Values Section -->
    <section class="mission-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Our Foundation</h2>
          <p class="section-subtitle">The principles that guide everything we do</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4">
          <!-- Mission Card -->
          <div class="col-lg-4 col-md-6">
            <div class="foundation-card">
              <div class="card-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h3 class="card-title">Our Mission</h3>
              <p class="card-description">
                Apexcel Ventures exists to provide transformative training programs in leadership, 
                technology, and entrepreneurship that equip young people with practical skills to 
                navigate and thrive in our ever-evolving world.
              </p>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="col-lg-4 col-md-6">
            <div class="foundation-card">
              <div class="card-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h3 class="card-title">Our Vision</h3>
              <p class="card-description">
                Develop a generation of visionary leaders, innovative thinkers, and successful 
                entrepreneurs.
              </p>
            </div>
          </div>

          <!-- Values Card -->
          <div class="col-lg-4 col-md-6">
            <div class="foundation-card">
              <div class="card-icon">
                <i class="fas fa-star"></i>
              </div>
              <h3 class="card-title">Core Values</h3>
              <div class="values-list">
                <div class="value-item">
                  <i class="fas fa-shield-alt value-icon"></i>
                  <div><strong>Integrity:</strong> Building trust through accountability</div>
                </div>
                <div class="value-item">
                  <i class="fas fa-trophy value-icon"></i>
                  <div><strong>Excellence:</strong> Delivering beyond expectations</div>
                </div>
                <div class="value-item">
                  <i class="fas fa-bullseye value-icon"></i>
                  <div><strong>Impact:</strong> Creating lasting transformation</div>
                </div>
                <div class="value-item">
                  <i class="fas fa-users value-icon"></i>
                  <div><strong>Youth First:</strong> Prioritizing young people</div>
                </div>
                <div class="value-item">
                  <i class="fas fa-user-tie value-icon"></i>
                  <div><strong>Professionalism:</strong> Maintaining high standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Our Team</h2>
          <p class="section-subtitle">The passionate individuals driving our mission forward</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <!-- Team Members -->
          <div class="col-lg-4 col-md-6" v-for="member in teamMembers" :key="member.name">
            <div class="team-card">
              <div class="team-photo">
                <img :src="member.photo" :alt="member.name" class="member-image">
              </div>
              <div class="team-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
// Team data - moved to separate script for better organization
export default {
  data() {
    return {
      teamMembers: [
        {
          name: "Samuel Simiyu",
          role: "Partnerships and Business Development Director",
          photo: "/samvictor1 (1).jpg"
        },
        {
          name: "Hillary Soh",
          role: "Programs lead and MERL officer",
          photo: "/Hillary.jpg"
        },
        {
          name: "Grace Njuguna",
          role: "Operations, Tech and Curriculums Lead",
          photo: "/file.jpg"
        },
        {
          name: "Rebecca Mwema",
          role: "Team Admin, legal and Child protection officer",
          photo: "/becky (1).jpg"
        },
        {
          name: "Sammy Maina",
          role: "Communications and Marketing director",
          photo: "/Masamki.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* ===== CSS VARIABLES ===== */
:root {
  --primary-blue: rgb(20, 101, 167);
  --primary-dark: rgb(12, 65, 107);
  --text-dark: #333;
  --text-light: #555;
  --text-muted: #666;
  --bg-light: #f8f9fa;
  --shadow-light: 0 10px 30px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.12);
  --transition: all 0.3s ease;
}

/* ===== HERO SECTION ===== */
.about-hero-section {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Background image switching */
.desktop-bg { display: block; }
.mobile-bg { display: none; }

.about-hero-section .container {
  position: relative;
  z-index: 2;
}

.about-hero-title {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0;
}

/* ===== ABOUT CONTENT SECTION ===== */
.about-content-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.content-wrapper {
  padding-right: 2rem;
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

.about-text {
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
}

.about-text p {
  margin-bottom: 1.5rem;
}

.subsection-title {
  color: rgb(20, 101, 167);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
}

.about-image-container {
  position: relative;
  padding: 20px;
}

.about-main-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-main-image:hover {
  transform: translateY(-5px);
}

.image-decoration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgb(20, 101, 167) 0%, rgba(20, 101, 167, 0.3) 100%);
  border-radius: 50%;
  z-index: -1;
}

/* ===== MISSION SECTION ===== */
.mission-section {
  padding: 5rem 0;
  background: white;
}

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

.foundation-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  border: 2px solid transparent;
}

.foundation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(20, 101, 167, 0.2);
}

.card-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  font-size: 2rem;
  color: rgb(20, 101, 167);
  background: rgba(20, 101, 167, 0.1);
}

.card-title {
  color: rgb(20, 101, 167);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.card-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 0;
}

.values-list {
  text-align: left;
}

.value-item {
  color: #555;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.value-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.value-item strong {
  color: rgb(20, 101, 167);
}

.value-icon {
  color: rgb(20, 101, 167);
  font-size: 0.9rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

/* ===== TEAM SECTION ===== */
.team-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.team-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.team-photo {
  width: 160px;
  height: 210px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem auto;
  border: 4px solid rgba(20, 101, 167, 0.2);
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-name {
  color: rgb(20, 101, 167);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.member-role {
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .about-hero-section {
    min-height: 40vh;
  }
  
  .about-hero-title {
    font-size: 2.5rem;
  }
  
  .content-wrapper {
    padding-right: 0;
    margin-bottom: 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-main-title {
    font-size: 2.2rem;
  }
  
  .foundation-card {
    padding: 2rem 1.5rem;
  }
  
  .card-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  .team-photo {
    width: 120px;
    height: 120px;
  }
  
  .value-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  /* Switch to mobile background */
  .desktop-bg { display: none; }
  .mobile-bg { display: block; }
}

@media (max-width: 480px) {
  .about-hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-main-title {
    font-size: 1.8rem;
  }
  
  .about-text {
    font-size: 1rem;
  }
}
</style>