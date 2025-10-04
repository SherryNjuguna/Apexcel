<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const desktopImage = ref('/heroA11.jpg')
const mobileImage = ref('/heroA1.jpg')

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
      
      <div class="hero-background desktop-bg">
        <img :src="desktopImage" alt="Tech Training Program" class="background-image">
      </div>
      
      <div class="hero-background mobile-bg">
        <img :src="mobileImage" alt="Tech Training Program" class="background-image">
      </div>
      
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="program-hero-title">Tech Training</h1>
            <p class="program-hero-subtitle">Equipping Youth with Essential Digital Skills for the Future Economy</p>
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
            class="program-nav-btn"
          >
            <i class="fas fa-crown program-nav-icon"></i>
            Leadership
          </button>
          <button 
            @click="navigateToProgram('tech')" 
            class="program-nav-btn active"
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
              <h2 class="section-title">Technology Training Programs</h2>
              <div class="accent-line"></div>
              <p class="overview-text">
                Our technology programs are designed to equip young people with essential digital 
                and technical skills that are practical, relevant, and forward-looking. In today's 
                fast-evolving digital world, technological fluency is not optional—it's foundational. 
                Through immersive, hands-on training, we prepare participants to confidently navigate 
                and innovate in the tech-driven global economy.
              </p>
              
              <div class="program-highlights">
                <div class="highlight-item">
                  <i class="fas fa-brain highlight-icon"></i>
                  <span>Critical Thinking & Problem-Solving</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-briefcase highlight-icon"></i>
                  <span>Job-Ready Technical Skills</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-graduation-cap highlight-icon"></i>
                  <span>Career & Entrepreneurship Preparation</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-bridge highlight-icon"></i>
                  <span>Bridging the Digital Gap</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="program-image-container">
              <img src="/apexcel1.jpeg" alt="Tech Training" class="program-main-image">
              <div class="image-badge">
                <i class="fas fa-laptop-code"></i>
                Tech Training
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
          <h2 class="section-main-title">Training Modules</h2>
          <p class="section-subtitle">Comprehensive tech education through specialized tracks</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4">
          <!-- Digital Literacy -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-desktop"></i>
              </div>
              <h3 class="component-title">Digital Literacy</h3>
              <p class="component-description">
                Foundational digital skills for beginners and those looking to solidify their 
                tech basics. Learn to effectively operate, troubleshoot, and maintain computer systems.
              </p>
              
              <div class="focus-areas">
                <h4>Curriculum Includes:</h4>
                <ul>
                  <li><i class="fas fa-microchip"></i> Computer Hardware & Software Fundamentals</li>
                  <li><i class="fas fa-shield-alt"></i> Internet Safety & Responsible Online Behavior</li>
                  <li><i class="fas fa-tools"></i> Productivity Tools (Microsoft Office, Google Workspace)</li>
                  <li><i class="fas fa-wifi"></i> Basic Networking Concepts</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Cybersecurity -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <h3 class="component-title">Cybersecurity Essentials</h3>
              <p class="component-description">
                As digital threats continue to grow, we believe in raising a generation of 
                cyber-aware individuals with practical skills in securing systems and online presence.
              </p>
              
              <div class="focus-areas">
                <h4>Key Learning Areas:</h4>
                <ul>
                  <li><i class="fas fa-book"></i> Cybersecurity Principles & Theory</li>
                  <li><i class="fas fa-lock"></i> Securing Systems & Online Presence</li>
                  <li><i class="fas fa-user-secret"></i> Ethical Hacking Introduction</li>
                  <li><i class="fas fa-eye"></i> Online Privacy Best Practices</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Web Development -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-code"></i>
              </div>
              <h3 class="component-title">Web Development</h3>
              <p class="component-description">
                Hands-on training in creating modern, responsive websites and web applications. 
                From basic HTML to full-stack development concepts.
              </p>
              
              <div class="focus-areas">
                <h4>Development Stack:</h4>
                <ul>
                  <li><i class="fab fa-html5"></i> HTML5 & CSS3 Fundamentals</li>
                  <li><i class="fab fa-js-square"></i> JavaScript & Interactive Web Pages</li>
                  <li><i class="fas fa-mobile-alt"></i> Responsive Design Principles</li>
                  <li><i class="fas fa-server"></i> Basic Backend Concepts</li>
                  <li><i class="fab fa-git-alt"></i> Version Control with Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Objectives -->
    <section class="program-approach">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="approach-content text-center">
              <h2 class="section-main-title">Our Key Objectives</h2>
              <div class="accent-line mx-auto mb-4"></div>
              
              <div class="approach-features">
                <div class="approach-item">
                  <i class="fas fa-lightbulb approach-icon"></i>
                  <h4>Critical Thinking</h4>
                  <p>Foster problem-solving abilities through hands-on experience with real-world tech projects</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-tools approach-icon"></i>
                  <h4>Practical Skills</h4>
                  <p>Equip participants with job-ready technical skills for the digital economy</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-briefcase approach-icon"></i>
                  <h4>Career Preparation</h4>
                  <p>Prepare for future careers or entrepreneurial ventures in technology-driven fields</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-hands-helping approach-icon"></i>
                  <h4>Digital Inclusion</h4>
                  <p>Bridge the digital gap by making tech education accessible to youth from all backgrounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Approach -->
    <section class="program-formats">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Our Training Approach</h2>
          <p class="section-subtitle">Practical, industry-aligned learning methodology</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon project-based">
                <i class="fas fa-project-diagram"></i>
              </div>
              <h3 class="format-title">Project-Based Learning</h3>
              <p class="format-description">
                Learn by doing with real-world projects that simulate industry scenarios and 
                build practical problem-solving skills.
              </p>
              <div class="approach-benefits">
                <span class="benefit-tag">Portfolio Building</span>
                <span class="benefit-tag">Real Experience</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon industry-led">
                <i class="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 class="format-title">Industry-Aligned Training</h3>
              <p class="format-description">
                Led by industry professionals who bring current market insights and practical 
                knowledge to the classroom.
              </p>
              <div class="approach-benefits">
                <span class="benefit-tag">Expert Instructors</span>
                <span class="benefit-tag">Market Relevant</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon peer-learning">
                <i class="fas fa-users"></i>
              </div>
              <h3 class="format-title">Peer-to-Peer Learning</h3>
              <p class="format-description">
                Collaborative environment with workshops, group projects, and knowledge sharing 
                among participants.
              </p>
              <div class="approach-benefits">
                <span class="benefit-tag">Team Collaboration</span>
                <span class="benefit-tag">Network Building</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon mentorship">
                <i class="fas fa-hands-helping"></i>
              </div>
              <h3 class="format-title">Professional Mentorship</h3>
              <p class="format-description">
                Guidance from seasoned tech professionals providing career advice, technical 
                insights, and industry connections.
              </p>
              <div class="approach-benefits">
                <span class="benefit-tag">Career Guidance</span>
                <span class="benefit-tag">Industry Network</span>
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
          <p class="section-subtitle">Flexible training schedules to suit different learning needs</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon intensive-format">
                <i class="fas fa-bolt"></i>
              </div>
              <h3 class="format-title">Intensive Bootcamp</h3>
              <p class="format-duration">4-8 Weeks Full-Time</p>
              <p class="format-description">
                Immersive, full-day training for rapid skill acquisition and career transition 
                into the tech industry.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon parttime-format">
                <i class="fas fa-clock"></i>
              </div>
              <h3 class="format-title">Part-Time Program</h3>
              <p class="format-duration">12-16 Weeks Evening/Weekend</p>
              <p class="format-description">
                Flexible schedule for students and working professionals to learn tech skills 
                while maintaining other commitments.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon workshop-format">
                <i class="fas fa-gem"></i>
              </div>
              <h3 class="format-title">Specialized Workshops</h3>
              <p class="format-duration">1-3 Days Intensive</p>
              <p class="format-description">
                Focused training on specific tech skills like cybersecurity, web development, 
                or digital tools mastery.
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
/* Reusing the same CSS structure from Leadership page with tech-specific colors */

/* Tech-specific badge color */
.image-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Tech-specific format colors */
.project-based {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.industry-led {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.peer-learning {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.mentorship {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.intensive-format {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.parttime-format {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.workshop-format {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

/* Benefit tags for approach section */
.approach-benefits {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.benefit-tag {
  background: rgba(20, 101, 167, 0.1);
  color: rgb(20, 101, 167);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* All other CSS remains the same as Leadership page */
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

/* Program Navigation */
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

/* Program Overview */
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

.program-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.highlight-icon {
  color: rgb(20, 101, 167);
  font-size: 1.2rem;
  width: 30px;
  text-align: center;
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
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Program Components */
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

/* Program Approach */
.program-approach {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.approach-content {
  max-width: 1000px;
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

/* Program Formats */
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


/* Responsive Design */
@media (max-width: 768px) {
  .program-hero-title {
    font-size: 2.5rem;
  }
  
  .program-hero-subtitle {
    font-size: 1.1rem;
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
}

@media (max-width: 480px) {
  .program-hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-main-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .desktop-bg {
    display: none;
  }
  .mobile-bg {
    display: block;
  }
}
</style>