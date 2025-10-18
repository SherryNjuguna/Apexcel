<script setup>
// Components
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from 'vue'

// Hero section images
const desktopImage = ref('/heroA11.jpg')
const mobileImage = ref('/heroA1.jpg')

// FAQ data
const faqs = ref([
  {
    question: "How can I enroll in your programs?",
    answer: "You can enroll by contacting us through any of our channels - call, email. We'll guide you through the application process and program requirements.",
    open: false
  },
  {
    question: "What age groups do you work with?",
    answer: "We primarily work with young people aged 10-30 years, but our programs are tailored to different age brackets within this range to ensure age-appropriate content and delivery.",
    open: false
  },
  {
    question: "Do you offer online programs?",
    answer: "Yes, we offer both in-person and online programs to accommodate different needs and locations. Some of our tech training programs are particularly well-suited for online delivery.",
    open: false
  },
  {
    question: "Can organizations partner with Apexcel?",
    answer: "Absolutely! We welcome partnerships with churches, schools, businesses, and other organizations that share our vision for youth empowerment. Contact our partnerships director to discuss collaboration opportunities.",
    open: false
  },
  {
    question: "How can I volunteer with Apexcel?",
    answer: "We're always looking for passionate volunteers! You can volunteer as a mentor, trainer, or in various support roles. Contact us to discuss how your skills can contribute to our mission.",
    open: false
  }
])

// Toggle FAQ accordion
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="contact-hero-section">
      <div class="hero-overlay"></div>
      
      <!-- Background Images -->
      <div class="hero-background desktop-bg">
        <img :src="desktopImage" alt="Contact Apexcel Ventures" class="background-image">
      </div>
      <div class="hero-background mobile-bg">
        <img :src="mobileImage" alt="Contact Apexcel Ventures" class="background-image">
      </div>
      
      <!-- Hero Content -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="contact-hero-title">Contact Us</h1>
            <p class="contact-hero-subtitle">Get in touch with Apexcel Ventures - Let's empower the next generation together</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="contact-main-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="contact-info-card">
              <div class="text-center mb-5">
                <h2 class="contact-info-title">Get In Touch</h2>
                <p class="contact-info-description">
                  Reach out to us through any of these channels. We're always happy to hear from 
                  potential partners, volunteers, and young people interested in our programs.
                </p>
              </div>
              
              <div class="row g-4 justify-content-center">
                <!-- Phone -->
                <div class="col-md-6 col-lg-6">
                  <div class="contact-item text-center">
                    <div class="contact-icon mx-auto">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div class="contact-text">
                      <h4>Call Us</h4>
                      <p>+254 794 967 580</p>
                      <small>Mon-Fri, 8:00 AM - 5:00 PM</small>
                    </div>
                  </div>
                </div>
                
                <!-- Email -->
                <div class="col-md-6 col-lg-6">
                  <div class="contact-item text-center">
                    <div class="contact-icon mx-auto">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-text">
                      <h4>Email Us</h4>
                      <p>apexcelventures@gmail.com</p>
                      <p>info@apexcelventures.com</p>
                      <small>We respond within 24 hours</small>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="social-section text-center mt-5">
                <h4>Follow Us on Social Media</h4>
                <p class="social-description">Stay updated with our latest programs and success stories</p>
                <div class="social-icons justify-content-center">
                  <a href="#" class="social-link">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fab fa-x-twitter"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Quick answers to common questions about Apexcel Ventures</p>
          <div class="accent-line mx-auto"></div>
        </div>
        
        <div class="faq-container">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h4>{{ faq.question }}</h4>
              <i class="fas" :class="faq.open ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </div>
            <div class="faq-answer" :class="{ 'open': faq.open }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        
        <div class="contact-cta text-center mt-5">
          <div class="cta-card">
            <h3>Still Have Questions?</h3>
            <p>Don't hesitate to reach out to us directly through phone or email. We're here to help!</p>
            <div class="cta-contacts">
              <a href="tel:+25494967580" class="btn btn-primary">
                <i class="fas fa-phone"></i>
                Call Us Now
              </a>
              <a href="mailto:apexceiventures@gmail.com" class="btn btn-outline-primary">
                <i class="fas fa-envelope"></i>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

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
.contact-hero-section {
  position: relative;
  min-height: 40vh;
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

.contact-hero-section .container {
  position: relative;
  z-index: 2;
}

.contact-hero-title {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0 0 1rem 0;
}

.contact-hero-subtitle {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  margin: 0;
  opacity: 0.9;
}

/* ===== CONTACT MAIN SECTION ===== */
.contact-main-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.contact-info-card {
  background: white;
  padding: 4rem 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.contact-info-title {
  color: rgb(20, 101, 167);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-info-description {
  color: #555;
  line-height: 1.6;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-item {
  padding: 2rem 1rem;
  transition: var(--transition);
  border-radius: 15px;
}

.contact-item:hover {
  background: rgba(20, 101, 167, 0.05);
  transform: translateY(-5px);
}

.contact-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(20, 101, 167, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(20, 101, 167);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact-text h4 {
  color: rgb(20, 101, 167);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.contact-text p {
  color: #333;
  font-weight: 500;
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}

.contact-text small {
  color: #666;
  font-size: 0.9rem;
}

.social-section {
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
}

.social-section h4 {
  color: rgb(20, 101, 167);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.social-description {
  color: #666;
  margin-bottom: 1.5rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(20, 101, 167, 0.1);
  color: rgb(20, 101, 167);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: var(--transition);
}

.social-link:hover {
  background: rgb(20, 101, 167);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(20, 101, 167, 0.3);
}

/* ===== FAQ SECTION ===== */
.faq-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
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

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, rgb(20, 101, 167) 0%, rgb(12, 65, 107) 100%);
  border-radius: 2px;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 15px;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: var(--transition);
}

.faq-item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.faq-question {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
}

.faq-question:hover {
  background: rgba(20, 101, 167, 0.05);
}

.faq-question h4 {
  color: rgb(20, 101, 167);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.faq-question i {
  color: rgb(20, 101, 167);
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 0 2rem;
  max-height: 0;
  overflow: hidden;
  transition: var(--transition);
}

.faq-answer.open {
  padding: 0 2rem 1.5rem 2rem;
  max-height: 500px;
}

.faq-answer p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.contact-cta {
  margin-top: 3rem;
}

.cta-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  margin: 0 auto;
}

.cta-card h3 {
  color: rgb(20, 101, 167);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-card p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.cta-contacts {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.btn-primary {
  background: rgb(20, 101, 167);
  color: white;
  border: 2px solid rgb(20, 101, 167);
}

.btn-primary:hover {
  background: rgb(16, 85, 140);
  border-color: rgb(16, 85, 140);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(20, 101, 167, 0.3);
}

.btn-outline-primary {
  background: transparent;
  border: 2px solid rgb(20, 101, 167);
  color: rgb(20, 101, 167);
}

.btn-outline-primary:hover {
  background: rgb(20, 101, 167);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(20, 101, 167, 0.3);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .contact-hero-title {
    font-size: 2.5rem;
  }
  
  .contact-hero-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-info-card {
    padding: 2.5rem 1.5rem;
  }
  
  .contact-info-title {
    font-size: 2rem;
  }
  
  .faq-question {
    padding: 1.25rem 1.5rem;
  }
  
  .faq-answer {
    padding: 0 1.5rem;
  }
  
  .faq-answer.open {
    padding: 0 1.5rem 1.25rem 1.5rem;
  }
  
  .cta-card {
    padding: 2rem 1.5rem;
  }
  
  .cta-contacts {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
    justify-content: center;
  }
  
  /* Switch to mobile background */
  .desktop-bg { display: none; }
  .mobile-bg { display: block; }
}

@media (max-width: 480px) {
  .contact-hero-title {
    font-size: 2rem;
  }
  
  .section-main-title {
    font-size: 2rem;
  }
  
  .contact-item {
    padding: 1.5rem 1rem;
  }
  
  .social-icons {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>