<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const desktopImage = ref('/heroA11.jpg')
const mobileImage = ref('/heroA1.jpg')

// Navigate to specific program page
const navigateToProgram = (program) => {
  router.push(`/${program}`)
}
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="program-hero-section">
      <div class="hero-overlay"></div>
      
      <!-- Background Images -->
      <div class="hero-background desktop-bg">
        <img :src="desktopImage" alt="Leadership Development Program" class="background-image">
      </div>
      <div class="hero-background mobile-bg">
        <img :src="mobileImage" alt="Leadership Development Program" class="background-image">
      </div>
      
      <!-- Hero Content -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="program-hero-title">Leadership Development</h1>
            <p class="program-hero-subtitle">Empowering Transformational Leaders for Impact Beyond Themselves</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Navigation -->
    <section class="program-navigation">
      <div class="container">
        <div class="program-nav-container">
          <button 
            @click="navigateToProgram('programs')" 
            class="program-nav-btn active"
          >
            <i class="fas fa-crown program-nav-icon"></i>
            Leadership
          </button>
          <button 
            @click="navigateToProgram('tech')" 
            class="program-nav-btn"
          >
            <i class="fas fa-laptop-code program-nav-icon"></i>
            Tech Training
          </button>
          <button 
            @click="navigateToProgram('entrepreneurship')" 
            class="program-nav-btn"
          >
            <i class="fas fa-rocket program-nav-icon"></i>
            Entrepreneurship
          </button>
        </div>
      </div>
    </section>

    <!-- Program Overview -->
    <section class="program-overview">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="overview-content">
              <h2 class="section-title">Transformational Leader Program</h2>
              <div class="accent-line"></div>
              <p class="overview-text">
                A comprehensive program designed to empower young individuals with the skills, 
                knowledge, and support necessary to excel in life and create impact beyond themselves. 
                Our mentorship, transition management, and gender-specific programs are set on a 
                path of shaping the next generation of confident, capable, and visionary leaders.
              </p>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="program-image-container">
              <img src="/sam by.jpg" alt="Leadership Development" class="program-main-image">
              <div class="image-badge">
                <i class="fas fa-crown"></i>
                Leadership
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Components -->
    <section class="program-components">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Program Components</h2>
          <p class="section-subtitle">Comprehensive leadership development through specialized tracks</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4">
          <!-- Gender-Specific Programs -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-venus-mars"></i>
              </div>
              <h3 class="component-title">Gender-Specific Programs</h3>
              <p class="component-description">
                Tailored programs addressing unique challenges and opportunities for young 
                men and women through our Shujaa and Ayana initiatives.
              </p>
              
              <div class="focus-areas">
                <h4>Program Tracks:</h4>
                <div class="gender-programs">
                  <div class="gender-program shujaa">
                    <h5><i class="fas fa-male"></i> Shujaa Program</h5>
                    <p>The Shujaa Program guides young men to embrace authentic masculinity, live with purpose and values, and develop into responsible future leaders and fathers.</p>
                  </div>
                  <div class="gender-program ayana">
                    <h5><i class="fas fa-female"></i> Ayana Program</h5>
                    <p>We empower young women to celebrate authentic femininity, pursue personal development, and become values-driven leaders who positively impact their communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Transition Management -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <h3 class="component-title">Transition Management</h3>
              <p class="component-description">
                Helping young people navigate key life changes smoothly with clarity of direction 
                and a sense of purpose during critical transition periods.
              </p>
              
              <div class="focus-areas">
                <h4>Thematic Areas:</h4>
                <ul>
                  <li><i class="fas fa-user-check"></i> Leadership and Personal Development.</li>
                  <li><i class="fas fa-building"></i> Career Development</li>
                  <li><i class="fas fa-life-ring"></i> Life & Social Skills</li>
                  <li><i class="fas fa-coins"></i> Entrepreneurship and Financial literacy</li>
                  <li><i class="fas fa-pray"></i> Spiritual Formation</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Mentorship & Coaching -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-hands-helping"></i>
              </div>
              <h3 class="component-title">Mentorship & Coaching</h3>
              <p class="component-description">
                Skill building, guidance, and motivation to help young individuals attain 
                personal and professional growth through experienced mentors in various fields.
              </p>
              
              <div class="focus-areas">
                <h4>Key Focus Areas:</h4>
                <ul>
                  <li><i class="fas fa-user-check"></i> Personal Development</li>
                  <li><i class="fas fa-briefcase"></i> Career Coaching</li>
                  <li><i class="fas fa-comments"></i> Leadership Training</li>
                  <li><i class="fas fa-handshake"></i> Networking & Exposure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Approach -->
    <section class="program-approach">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="approach-content text-center">
              <h2 class="section-main-title">Our Approach</h2>
              <div class="accent-line mx-auto mb-4"></div>
              <p class="approach-text">
                We believe in practical, hands-on leadership development that combines:
              </p>
              
              <div class="approach-features">
                <div class="approach-item">
                  <i class="fas fa-user-friends approach-icon"></i>
                  <h4>One-on-One Coaching</h4>
                  <p>Personalized guidance from experienced mentors</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-users approach-icon"></i>
                  <h4>Group Mentorship</h4>
                  <p>Collaborative learning and peer support</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-project-diagram approach-icon"></i>
                  <h4>Networking Opportunities</h4>
                  <p>Connections with professionals across industries</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-hands approach-icon"></i>
                  <h4>Practical Application</h4>
                  <p>Real-world projects and community engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Formats -->
    <section class="program-formats">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Program Formats</h2>
          <p class="section-subtitle">Flexible scheduling to accommodate different needs</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <!-- Daily Format -->
          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon daily-format">
                <i class="fas fa-calendar-day"></i>
              </div>
              <h3 class="format-title">Daily Format</h3>
              <p class="format-duration">3-7 Days Intensive</p>
              <p class="format-description">
                Meeting daily at a chosen location with participants for immersive, 
                focused leadership development sessions.
              </p>
            </div>
          </div>

          <!-- Camp Format -->
          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon camp-format">
                <i class="fas fa-campground"></i>
              </div>
              <h3 class="format-title">Camp Format</h3>
              <p class="format-duration">3-5 Days Intensive</p>
              <p class="format-description">
                Residential camp experience with intensive leadership training, 
                team building, and personal development activities.
              </p>
            </div>
          </div>

          <!-- Weekly Format -->
          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon weekly-format">
                <i class="fas fa-calendar-week"></i>
              </div>
              <h3 class="format-title">Weekly Format</h3>
              <p class="format-duration">5-10 Weeks Program</p>
              <p class="format-description">
                Weekly sessions over several months, culminating with a camp experience 
                and celebration ceremony with prizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<style scoped>
/* ===== HERO SECTION STYLES ===== */
.program-hero-section {
  position: relative;
  min-height: 50vh;
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

.program-hero-section .container {
  position: relative;
  z-index: 2;
}

.program-hero-title {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0 0 1rem 0;
}

.program-hero-subtitle {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  margin: 0;
  opacity: 0.9;
}

/* ===== PROGRAM NAVIGATION STYLES ===== */
.program-navigation {
  background: white;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.program-nav-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.program-nav-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid rgb(20, 101, 167);
  border-radius: 50px;
  background: transparent;
  color: rgb(20, 101, 167);
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.program-nav-btn:hover {
  background: rgba(20, 101, 167, 0.1);
  transform: translateY(-2px);
}

.program-nav-btn.active {
  background: rgb(20, 101, 167);
  color: white;
}

.program-nav-icon {
  font-size: 1rem;
}

/* ===== PROGRAM OVERVIEW STYLES ===== */
.program-overview {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.overview-content {
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

.overview-text {
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.program-image-container {
  position: relative;
}

.program-main-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.image-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgb(20, 101, 167);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* ===== PROGRAM COMPONENTS STYLES ===== */
.program-components {
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

.component-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  border: 2px solid transparent;
}

.component-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(20, 101, 167, 0.2);
}

.component-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(20, 101, 167, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  font-size: 2rem;
  color: rgb(20, 101, 167);
}

.component-title {
  color: rgb(20, 101, 167);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

.component-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.focus-areas h4 {
  color: rgb(20, 101, 167);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.focus-areas ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.focus-areas li {
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.focus-areas i {
  color: rgb(20, 101, 167);
  font-size: 0.8rem;
}

.gender-programs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gender-program {
  padding: 1rem;
  border-radius: 10px;
  background: #f8f9fa;
}

.gender-program h5 {
  color: rgb(20, 101, 167);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.gender-program p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

/* ===== PROGRAM APPROACH STYLES ===== */
.program-approach {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.approach-content {
  max-width: 800px;
}

.approach-text {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
}

.approach-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.approach-item {
  text-align: center;
  padding: 2rem 1rem;
}

.approach-icon {
  font-size: 3rem;
  color: rgb(20, 101, 167);
  margin-bottom: 1rem;
}

.approach-item h4 {
  color: rgb(20, 101, 167);
  margin-bottom: 0.5rem;
}

.approach-item p {
  color: #666;
  margin: 0;
}

/* ===== PROGRAM FORMATS STYLES ===== */
.program-formats {
  padding: 5rem 0;
  background: white;
}

.format-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.format-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.format-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  font-size: 2rem;
  color: white;
}

.daily-format {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.camp-format {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.weekly-format {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.format-title {
  color: rgb(20, 101, 167);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.format-duration {
  color: #666;
  font-weight: 600;
  margin-bottom: 1rem;
}

.format-description {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .program-hero-title {
    font-size: 2.5rem;
  }
  
  .program-hero-subtitle {
    font-size: 1.1rem;
  }
  
  .desktop-bg {
    display: none;
  }
  
  .mobile-bg {
    display: block;
  }
  
  .overview-content {
    padding-right: 0;
    margin-bottom: 3rem;
  }
  
  .program-nav-container {
    flex-direction: column;
    align-items: center;
  }
  
  .program-nav-btn {
    width: 200px;
    justify-content: center;
  }
  
  .approach-features {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-main-title {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .component-card,
  .format-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .program-hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-main-title {
    font-size: 2rem;
  }
}
</style>