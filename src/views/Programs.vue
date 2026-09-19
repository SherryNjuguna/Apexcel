<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const desktopImage = ref("/heroA11.jpg");
const mobileImage = ref("/heroA1.jpg");
const generalSoftSkillsImage = ref("/Transition2.jpeg"); 

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
          alt="Soft Skills Development Program"
          class="background-image"
        />
      </div>
      <div class="hero-background mobile-bg">
        <img
          :src="mobileImage"
          alt="Soft Skills Development Program"
          class="background-image"
        />
      </div>

      <!-- Hero Content -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="program-hero-title">Soft Skills Development</h1>
            <p class="program-hero-subtitle">
              Building the core human skills for work, relationships, and everyday life
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
            <i class="fas fa-brain program-nav-icon"></i>
            Soft Skills
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
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="overview-image-wrapper">
              <img
                :src="generalSoftSkillsImage"
                alt="Soft Skills Program"
                class="img-fluid overview-img"
              />
              <div class="overview-image-badge">
                <i class="fas fa-check-circle me-2"></i> Real Skills for Real Life
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <h2 class="section-title text-start">The Soft Skills Program</h2>
            <div class="accent-line"></div>
            <p class="overview-text text-start">
              Hard skills might land you an interview, but soft skills build your career. 
              The Soft Skills Program at Apexcel Ventures gives young adults and professionals 
              the practical habits, confidence, and communication tools needed to stand out 
              and succeed in real-world environments.
            </p>
            <p class="overview-text text-start mt-3">
              Through interactive sessions, practical exercises, and honest feedback, we help you 
              speak clearly, stay composed under pressure, and build strong relationships wherever you go.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Components -->
    <section class="program-components">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Our Focus Areas</h2>
          <p class="section-subtitle">
            Practical learning tracks tailored for growth at every step
          </p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="tracks-grid">
          <!-- Track 1: Communication -->
          <div class="track-card">
            <div class="track-header">
              <div class="track-icon-wrapper comm-bg">
                <i class="fas fa-comments"></i>
              </div>
              <span class="track-badge comm-badge">Communication</span>
            </div>
            <div class="track-content">
              <h3 class="track-title">Effective Communication & Personal Branding</h3>
              <p class="track-tagline">
                Speak clearly, present with confidence, and make a strong impression
              </p>
              <p class="track-description">
                Learn how to express your ideas simply and persuasively. We cover how to speak comfortably 
                in front of others, write professional emails, listen actively, and build a positive personal brand.
              </p>
              <div class="track-features">
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Public Speaking & Speaking Confidence</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Business Writing & Everyday Email Etiquette</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Active Listening & Clear Dialogue</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Building Your Personal Brand</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Track 2: Emotional Intelligence -->
          <div class="track-card">
            <div class="track-header">
              <div class="track-icon-wrapper eq-bg">
                <i class="fas fa-heart"></i>
              </div>
              <span class="track-badge eq-badge">Self-Awareness & Relationships</span>
            </div>
            <div class="track-content">
              <h3 class="track-title">Emotional Intelligence & People Skills</h3>
              <p class="track-tagline">
                Understand how you work and connect genuinely with others
              </p>
              <p class="track-description">
                Good relationships start with self-awareness. Learn to stay calm under stress, 
                understand different perspectives, handle difficult conversations smoothly, and work well in teams.
              </p>
              <div class="track-features">
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Managing Emotions Under Pressure</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Empathy & Healthy Relationships</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Conflict Resolution Without Drama</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Teamwork & Everyday Collaboration</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Track 3: Critical Thinking -->
          <div class="track-card">
            <div class="track-header">
              <div class="track-icon-wrapper think-bg">
                <i class="fas fa-lightbulb"></i>
              </div>
              <span class="track-badge think-badge">Problem Solving</span>
            </div>
            <div class="track-content">
              <h3 class="track-title">Critical Thinking & Decision Making</h3>
              <p class="track-tagline">
                Think on your feet and solve problems with clarity
              </p>
              <p class="track-description">
                Gain practical frameworks to analyze challenges objectively, weigh your options, 
                make sound decisions, and adjust quickly when things don't go according to plan.
              </p>
              <div class="track-features">
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Practical Problem-Solving Steps</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Creative Thinking for Daily Challenges</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Making Smart Decisions Under Pressure</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Adapting Easily to Change</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Track 4: Career Readiness -->
          <div class="track-card">
            <div class="track-header">
              <div class="track-icon-wrapper career-bg">
                <i class="fas fa-briefcase"></i>
              </div>
              <span class="track-badge career-badge">Career Readiness</span>
            </div>
            <div class="track-content">
              <h3 class="track-title">Workplace Readiness & Professional Skills</h3>
              <p class="track-tagline">
                Move from learning environments to the workplace with confidence
              </p>
              <p class="track-description">
                Prepare for the modern working world with practical guidance on writing solid resumes, 
                acing job interviews, managing your time, and navigating workplace culture.
              </p>
              <div class="track-features">
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Time Management & Focus Tools</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Resume Building & Interview Practice</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Workplace Culture & Etiquette</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Work Ethic & Professional Integrity</span>
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
              <h2 class="section-main-title">How We Teach</h2>
              <div class="accent-line mx-auto mb-4"></div>
              <p class="approach-text">
                Soft skills aren't learned by just sitting through lectures. You build them by practicing in a supportive space:
              </p>

              <div class="approach-features">
                <div class="approach-item">
                  <i class="fas fa-chalkboard-user approach-icon"></i>
                  <h4>Practical Workshops</h4>
                  <p>Real-life simulations, discussions, and hands-on activities</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-toolbox approach-icon"></i>
                  <h4>Simple Toolkits</h4>
                  <p>Easy-to-use habits and templates you can apply starting day one</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-users-gear approach-icon"></i>
                  <h4>Group Exercises</h4>
                  <p>Collaborative tasks that build teamwork and listening skills</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-comments-dollar approach-icon"></i>
                  <h4>Honest Feedback</h4>
                  <p>Direct, supportive guidance from facilitators to track your growth</p>
                </div>
              </div>
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

.overview-image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.overview-img {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  display: block;
}

.overview-image-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(20, 101, 167, 0.9);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
}

.section-title {
  color: rgb(20, 101, 167);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
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
  margin-bottom: 1.5rem;
}

.overview-text {
  color: #555;
  line-height: 1.7;
  font-size: 1.05rem;
  margin: 0;
}

/* ===== TRACK CARDS (NO IMAGE) STYLES ===== */
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

.tracks-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.track-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid #f0f0f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.track-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(20, 101, 167, 0.12);
  border-color: rgba(20, 101, 167, 0.2);
}

.track-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.track-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: white;
}

.comm-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.eq-bg {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.think-bg {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.career-bg {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.track-badge {
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.comm-badge {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.eq-badge {
  background: rgba(245, 87, 108, 0.1);
  color: #f5576c;
}

.think-badge {
  background: rgba(79, 172, 254, 0.1);
  color: #00c6ff;
}

.career-badge {
  background: rgba(67, 233, 123, 0.15);
  color: #21b363;
}

.track-title {
  color: rgb(20, 101, 167);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.track-tagline {
  color: #666;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-style: italic;
}

.track-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.track-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  border-top: 1px dashed #e9ecef;
  padding-top: 1.25rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #444;
  font-size: 0.95rem;
}

.feature-item i {
  color: rgb(20, 101, 167);
  font-size: 0.9rem;
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
@media (max-width: 992px) {
  .tracks-grid {
    grid-template-columns: 1fr;
  }
}

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

  .track-card {
    padding: 1.5rem;
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
}
</style>