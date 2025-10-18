<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const desktopImage = ref("/heroA11.jpg");
const mobileImage = ref("/heroA1.jpg");

// Navigate to specific program page
const navigateToProgram = (program) => {
  router.push(`/${program}`);
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="program-hero-section">
      <div class="hero-overlay"></div>

      <!-- Background Images -->
      <div class="hero-background desktop-bg">
        <img
          :src="desktopImage"
          alt="Leadership Development Program"
          class="background-image"
        />
      </div>
      <div class="hero-background mobile-bg">
        <img
          :src="mobileImage"
          alt="Leadership Development Program"
          class="background-image"
        />
      </div>

      <!-- Hero Content -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="program-hero-title">Leadership Development</h1>
            <p class="program-hero-subtitle">
              Empowering Transformational Leaders for Impact Beyond Themselves
            </p>
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
          <button @click="navigateToProgram('tech')" class="program-nav-btn">
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
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h2 class="section-title">Transformational Leader Program</h2>
            <div class="accent-line mx-auto"></div>
            <p class="overview-text">
              A comprehensive program designed to empower young individuals with
              the skills, knowledge, and support necessary to excel in life and
              create impact beyond themselves. Our mentorship, transition
              management, and gender-specific programs are set on a path of
              shaping the next generation of confident, capable, and visionary
              leaders.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Components -->
    <section class="program-components">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Our Leadership Programs</h2>
          <p class="section-subtitle">
            Specialized tracks designed for comprehensive personal development
          </p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="programs-grid">
          <!-- Shujaa Program -->
          <div class="program-card">
            <div class="program-image">
              <img src="/sam by.jpg" alt="Shujaa Program" class="img-fluid" />
              <div class="program-badge shujaa-badge">
                <i class="fas fa-male"></i>
                Shujaa Program
              </div>
            </div>
            <div class="program-content">
              <h3 class="program-title">Shujaa Program</h3>
              <p class="program-tagline">
                Raising a generation of men with a clear understanding of true
                manhood
              </p>
              <p class="program-description">
                The program aims to see young boys grown into good, young men,
                respectable husbands, responsible fathers, and honourable
                elders. The program formats allows them to understand manhood,
                explore identity, navigate personal and societal challenge with
                strength and build a purpose-driven life.
              </p>
              <div class="program-features">
                <div class="feature-item">
                  <i class="fas fa-user-check"></i>
                  <span>Purposeful Living</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-shield-alt"></i>
                  <span>Values-Based Leadership</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-users"></i>
                  <span>Identity Exploration</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-compass"></i>
                  <span>Purpose-Driven Life</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Ayana Program -->
          <div class="program-card">
            <div class="program-image">
              <img src="/girls.jpg" alt="Ayana Program" class="img-fluid" />
              <div class="program-badge ayana-badge">
                <i class="fas fa-female"></i>
                Ayana Program
              </div>
            </div>
            <div class="program-content">
              <h3 class="program-title">Ayana Program</h3>
              <p class="program-tagline">
                Nurture a generation of young women who embrace authentic
                womanhood, walk in godly confidence, and lead lives of purpose              </p>
              <p class="program-description">
                
                The program gently guides them through the sacred and powerful
                process of embracing womanhood as a gift, while boldly
                challenging them to step into their roles with confidence and
                purpose. This journey nurtures growth—intellectual, emotional,
                and spiritual—so that each girl may bloom into a woman of
                wisdom, dignity, and lasting impact.
              </p>
              <div class="program-features">
                <div class="feature-item">
                  <i class="fas fa-heart"></i>
                  <span>Authentic Femininity</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-star"></i>
                  <span>Personal Development</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-hands-helping"></i>
                  <span>Community Impact</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-crown"></i>
                  <span>Values-Driven Leadership</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Transition Management -->
          <div class="program-card">
            <div class="program-image">
              <img
                src="/transition.jpg"
                alt="Transition Management"
                class="img-fluid"
              />
              <div class="program-badge transition-badge">
                <i class="fas fa-exchange-alt"></i>
                Transition Management
              </div>
            </div>
            <div class="program-content">
              <h3 class="program-title">Transition Management</h3>
              <p class="program-tagline">
                Navigating life changes with clarity and purpose
              </p>
              <p class="program-description">
                Helping young people navigate key life changes smoothly with
                clarity of direction and a sense of purpose during critical
                transition periods. Our comprehensive approach supports youth
                through various life stages with practical tools and emotional
                support.
              </p>
              <div class="program-features">
                <div class="feature-item">
                  <i class="fas fa-user-check"></i>
                  <span>Leadership Development</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-building"></i>
                  <span>Career Development</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-life-ring"></i>
                  <span>Life & Social Skills</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-coins"></i>
                  <span>Financial Literacy</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-pray"></i>
                  <span>Spiritual Formation</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Mentorship & Coaching -->
          <div class="program-card">
            <div class="program-image">
              <img
                src="/mentorship1.jpg"
                alt="Mentorship & Coaching"
                class="img-fluid"
              />
              <div class="program-badge mentorship-badge">
                <i class="fas fa-hands-helping"></i>
                Mentorship & Coaching
              </div>
            </div>
            <div class="program-content">
              <h3 class="program-title">Mentorship & Coaching</h3>
              <p class="program-tagline">
                Personalized guidance for growth and success
              </p>
              <p class="program-description">
                Skill building, guidance, and motivation to help young
                individuals attain personal and professional growth through
                experienced mentors in various fields. Our mentorship program
                connects youth with industry professionals for real-world
                insights and career development.
              </p>
              <div class="program-features">
                <div class="feature-item">
                  <i class="fas fa-user-check"></i>
                  <span>Personal Development</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-briefcase"></i>
                  <span>Career Development</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-comments"></i>
                  <span>Leadership Training</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-handshake"></i>
                  <span>Networking & Exposure</span>
                </div>
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
                We believe in practical, hands-on leadership development that
                combines:
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
          <p class="section-subtitle">
            Flexible scheduling to accommodate different needs
          </p>
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
                Meeting daily at a chosen location with participants for
                immersive, focused leadership development sessions.
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
                Weekly sessions over several months, culminating with a camp experience or retreat.
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

.section-title {
  color: rgb(20, 101, 167);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgb(20, 101, 167) 0%,
    rgb(12, 65, 107) 100%
  );
  border-radius: 2px;
  margin-bottom: 2rem;
}

.overview-text {
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
  margin: 0 auto;
  max-width: 800px;
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

.programs-grid {
  display: grid;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.program-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.program-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.program-card:nth-child(even) .program-image {
  order: 2;
}

.program-card:nth-child(even) .program-content {
  order: 1;
}

.program-image {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.program-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.program-card:hover .program-image img {
  transform: scale(1.05);
}

.program-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.shujaa-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.ayana-badge {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.transition-badge {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.mentorship-badge {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.program-content {
  padding: 2.5rem;
}

.program-title {
  color: rgb(20, 101, 167);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.program-tagline {
  color: #666;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-style: italic;
}

.program-description {
  color: #555;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.program-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-size: 0.9rem;
}

.feature-item i {
  color: rgb(20, 101, 167);
  font-size: 0.8rem;
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

  .program-nav-container {
    flex-direction: column;
    align-items: center;
  }

  .program-nav-btn {
    width: 200px;
    justify-content: center;
  }

  .program-card {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .program-card:nth-child(even) .program-image,
  .program-card:nth-child(even) .program-content {
    order: unset;
  }

  .program-image {
    height: 250px;
  }

  .program-content {
    padding: 2rem;
  }

  .program-features {
    grid-template-columns: 1fr;
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

  .program-content {
    padding: 1.5rem;
  }
}
</style>
