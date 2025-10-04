<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const desktopImage = ref('/heroA.jpg')
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
        <img :src="desktopImage" alt="Entrepreneurship Program" class="background-image">
      </div>
      
      <div class="hero-background mobile-bg">
        <img :src="mobileImage" alt="Entrepreneurship Program" class="background-image">
      </div>
      
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="program-hero-title">Entrepreneurship</h1>
            <p class="program-hero-subtitle">Kuza Program - Instilling Entrepreneurial Mindsets for Business Success</p>
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
            class="program-nav-btn"
          >
            <i class="fas fa-laptop-code program-nav-icon"></i>
            Tech Training
          </button>
          <button 
            @click="navigateToProgram('entrepreneurship')" 
            class="program-nav-btn active"
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
              <h2 class="section-title">Kuza Entrepreneurship Program</h2>
              <div class="accent-line"></div>
              <p class="overview-text">
                Kuza, our entrepreneurship program, aims at instilling an entrepreneurial mindset 
                in young people and equipping them with business skills necessary for success. 
                We work on moulding a confident, capable, and impactful young adult equipped to 
                shape their own future and contribute meaningfully to society.
              </p>
              
              <div class="program-highlights">
                <div class="highlight-item">
                  <i class="fas fa-seedling highlight-icon"></i>
                  <span>Entrepreneurial Mindset Development</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-lightbulb highlight-icon"></i>
                  <span>Creativity & Innovation Focus</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-hand-holding-usd highlight-icon"></i>
                  <span>Financial Literacy & Money Management</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-chart-line highlight-icon"></i>
                  <span>Business Strategy & Growth Planning</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="program-image-container">
              <img src="/samA.jpeg" alt="Entrepreneurship Program" class="program-main-image">
              <div class="image-badge">
                <i class="fas fa-rocket"></i>
                Kuza Program
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
              <h2 class="section-main-title">Program Objectives</h2>
              <div class="accent-line mx-auto mb-4"></div>
              
              <div class="approach-features">
                <div class="approach-item">
                  <i class="fas fa-brain approach-icon"></i>
                  <h4>Develop Creativity</h4>
                  <p>Help young people develop creativity, resilience, and problem-solving skills for business innovation</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-bullseye approach-icon"></i>
                  <h4>Identify Opportunities</h4>
                  <p>Help young people identify opportunities in the problems within their environment</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-chart-line approach-icon"></i>
                  <h4>Growth Mindset</h4>
                  <p>Instill a growth mindset in young individuals to embrace challenges and learning</p>
                </div>
                <div class="approach-item">
                  <i class="fas fa-money-bill-wave approach-icon"></i>
                  <h4>Financial Skills</h4>
                  <p>Equip them with money management skills for both personal and business growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Program Modules -->
    <section class="program-components">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Key Kuza Programs</h2>
          <p class="section-subtitle">Comprehensive entrepreneurship training through specialized modules</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4">
          <!-- Mindset & Leadership -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h3 class="component-title">Entrepreneurial Mindset & Leadership</h3>
              <p class="component-description">
                Developing the core mindset and leadership qualities needed to identify opportunities, 
                take calculated risks, and lead business ventures with confidence and vision.
              </p>
              
              <div class="focus-areas">
                <h4>Focus Areas:</h4>
                <ul>
                  <li><i class="fas fa-eye"></i> Opportunity Recognition</li>
                  <li><i class="fas fa-shield-alt"></i> Risk Management</li>
                  <li><i class="fas fa-users"></i> Team Leadership</li>
                  <li><i class="fas fa-bullseye"></i> Vision Casting</li>
                  <li><i class="fas fa-fist-raised"></i> Resilience Building</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Financial Literacy -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-chart-pie"></i>
              </div>
              <h3 class="component-title">Financial Literacy & Money Management</h3>
              <p class="component-description">
                Essential financial skills for both personal finance management and business 
                financial planning, including budgeting, saving, and investment principles.
              </p>
              
              <div class="focus-areas">
                <h4>Financial Skills:</h4>
                <ul>
                  <li><i class="fas fa-wallet"></i> Personal Budgeting</li>
                  <li><i class="fas fa-piggy-bank"></i> Savings Strategies</li>
                  <li><i class="fas fa-file-invoice-dollar"></i> Basic Accounting</li>
                  <li><i class="fas fa-chart-bar"></i> Financial Planning</li>
                  <li><i class="fas fa-hand-holding-usd"></i> Investment Basics</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Business Strategy -->
          <div class="col-lg-4 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-chess-board"></i>
              </div>
              <h3 class="component-title">Business Strategy & Growth</h3>
              <p class="component-description">
                Comprehensive business planning and strategy development, from initial concept 
                to sustainable growth and scaling operations for long-term success.
              </p>
              
              <div class="focus-areas">
                <h4>Strategic Elements:</h4>
                <ul>
                  <li><i class="fas fa-clipboard-list"></i> Business Plan Development</li>
                  <li><i class="fas fa-target"></i> Market Analysis</li>
                  <li><i class="fas fa-expand-arrows-alt"></i> Scaling Strategies</li>
                  <li><i class="fas fa-sync-alt"></i> Operational Planning</li>
                  <li><i class="fas fa-tachometer-alt"></i> Performance Metrics</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Additional Modules Row -->
          <div class="col-lg-6 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-bullhorn"></i>
              </div>
              <h3 class="component-title">Marketing & Branding</h3>
              <p class="component-description">
                Effective marketing strategies and brand development to reach target audiences, 
                build customer loyalty, and create compelling value propositions.
              </p>
              
              <div class="focus-areas">
                <h4>Marketing Focus:</h4>
                <ul>
                  <li><i class="fas fa-tag"></i> Brand Identity</li>
                  <li><i class="fas fa-hashtag"></i> Digital Marketing</li>
                  <li><i class="fas fa-users"></i> Customer Acquisition</li>
                  <li><i class="fas fa-chart-line"></i> Sales Strategies</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="component-card">
              <div class="component-icon">
                <i class="fas fa-hands-helping"></i>
              </div>
              <h3 class="component-title">Social Entrepreneurship & Impact</h3>
              <p class="component-description">
                Combining business principles with social impact to create ventures that 
                address community challenges while maintaining financial sustainability.
              </p>
              
              <div class="focus-areas">
                <h4>Impact Areas:</h4>
                <ul>
                  <li><i class="fas fa-heart"></i> Social Problem Solving</li>
                  <li><i class="fas fa-leaf"></i> Sustainable Business Models</li>
                  <li><i class="fas fa-handshake"></i> Community Engagement</li>
                  <li><i class="fas fa-award"></i> Impact Measurement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Approach -->
    <section class="program-formats">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Our Learning Approach</h2>
          <p class="section-subtitle">Practical, hands-on entrepreneurship education</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon practical-learning">
                <i class="fas fa-hand-holding"></i>
              </div>
              <h3 class="format-title">Practical Application</h3>
              <p class="format-description">
                Learn by doing with real business projects, market research, and hands-on 
                exercises that simulate entrepreneurial challenges.
              </p>
              <div class="approach-benefits">
                <span class="benefit-tag">Real Projects</span>
                <span class="benefit-tag">Market Testing</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon mentorship">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3 class="format-title">Entrepreneur Mentorship</h3>
              <p class="format-description">
                Guidance from successful entrepreneurs and business professionals who provide 
                real-world insights and practical advice.
              </p>
              <div class="approach-benefits">
                <span class="benefit-tag">Industry Experts</span>
                <span class="benefit-tag">Networking</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon collaborative">
                <i class="fas fa-users"></i>
              </div>
              <h3 class="format-title">Collaborative Learning</h3>
              <p class="format-description">
                Work in teams to develop business ideas, receive peer feedback, and build 
                a supportive entrepreneurial community.
              </p>
              <div class="approach-benefits">
                <span class="benefit-tag">Team Projects</span>
                <span class="benefit-tag">Peer Support</span>
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
          <p class="section-subtitle">Flexible training options to suit different entrepreneurial journeys</p>
          <div class="accent-line mx-auto"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon intensive-format">
                <i class="fas fa-bolt"></i>
              </div>
              <h3 class="format-title">Entrepreneurship Bootcamp</h3>
              <p class="format-duration">5-7 Days Intensive</p>
              <p class="format-description">
                Immersive daily sessions focused on rapid business idea development, 
                validation, and initial planning at a chosen location.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon camp-format">
                <i class="fas fa-campground"></i>
              </div>
              <h3 class="format-title">Business Innovation Camp</h3>
              <p class="format-duration">3-5 Days Residential</p>
              <p class="format-description">
                Intensive residential experience combining entrepreneurship training with 
                team building and business plan development.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="format-card">
              <div class="format-icon weekly-format">
                <i class="fas fa-calendar-week"></i>
              </div>
              <h3 class="format-title">Weekly Incubator Program</h3>
              <p class="format-duration">8-12 Weeks (Weekly Sessions)</p>
              <p class="format-description">
                Extended program with weekly sessions, mentorship, and progressive business 
                development culminating in a pitch celebration.
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
/* Entrepreneurship-specific styles */

/* Kuza program badge */
.image-badge {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

/* Learning approach format colors */
.practical-learning {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.mentorship {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.collaborative {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

/* Program format colors */
.intensive-format {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.camp-format {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.weekly-format {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

/* Success sectors */
.success-sectors {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.sector-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  min-width: 120px;
}

.sector-item i {
  font-size: 2rem;
  color: rgb(20, 101, 167);
}

.sector-item span {
  font-weight: 600;
  color: #555;
  text-align: center;
  font-size: 0.9rem;
}

/* Benefit tags */
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

/* All other CSS remains consistent with previous program pages */
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

.approach-text {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
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

/* CTA Section */
.program-cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, rgb(20, 101, 167) 0%, rgb(12, 65, 107) 100%);
  color: white;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: rgb(20, 101, 167);
  border: 2px solid white;
  padding: 12px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: transparent;
  color: white;
  transform: translateY(-2px);
}

.btn-outline-primary {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 12px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: white;
  color: rgb(20, 101, 167);
  transform: translateY(-2px);
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
  
  .success-sectors {
    gap: 1rem;
  }
  
  .sector-item {
    min-width: 100px;
    padding: 0.8rem;
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
  
  .success-sectors {
    flex-direction: column;
    align-items: center;
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