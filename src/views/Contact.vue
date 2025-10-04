<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from 'vue'

const desktopImage = ref('/heroA.jpg')
const mobileImage = ref('/heroA1.jpg')

const faqs = ref([
  {
    question: "How can I enroll in your programs?",
    answer: "You can enroll by contacting us through any of our channels - call, email, or visit our office. We'll guide you through the application process and program requirements.",
    open: false
  },
  {
    question: "What age groups do you work with?",
    answer: "We primarily work with young people aged 15-30 years, but our programs are tailored to different age brackets within this range to ensure age-appropriate content and delivery.",
    open: false
  },
  {
    question: "Are your programs free or paid?",
    answer: "We offer both free and paid programs depending on the duration, intensity, and resources required. We also provide scholarships and financial aid for deserving candidates.",
    open: false
  },
  {
    question: "Do you offer online programs?",
    answer: "Yes, we offer both in-person and online programs to accommodate different needs and locations. Our tech training programs are particularly well-suited for online delivery.",
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

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission here
  console.log('Form submitted:', contactForm.value)
  alert('Thank you for your message! We will get back to you soon.')
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="contact-hero-section">
      <div class="hero-overlay"></div>
      
      <div class="hero-background desktop-bg">
        <img :src="desktopImage" alt="Contact Apexcel Ventures" class="background-image">
      </div>
      
      <div class="hero-background mobile-bg">
        <img :src="mobileImage" alt="Contact Apexcel Ventures" class="background-image">
      </div>
      
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-12 text-center">
            <h1 class="contact-hero-title">Contact Us</h1>
            <p class="contact-hero-subtitle">Get in touch with Apexcel Ventures - Let's empower the next generation together</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="contact-main-section">
      <div class="container">
        <div class="row">
          <!-- Contact Information -->
          <div class="col-lg-4">
            <div class="contact-info-card">
              <h2 class="contact-info-title">Get In Touch</h2>
              <p class="contact-info-description">
                Reach out to us through any of these channels. We're always happy to hear from 
                potential partners, volunteers, and young people interested in our programs.
              </p>
              
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-text">
                    <h4>Our Location</h4>
                    <p>Mombasa CBD, Kenya</p>
                    <small>Near the central business district</small>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-text">
                    <h4>Call Us</h4>
                    <p>+254 94 967 580</p>
                    <small>Mon-Fri, 8:00 AM - 5:00 PM</small>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-text">
                    <h4>Email Us</h4>
                    <p>apexceiventures@gmail.com</p>
                    <small>We respond within 24 hours</small>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-text">
                    <h4>Office Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div class="social-links">
                <h4>Follow Us</h4>
                <div class="social-icons">
                  <a href="#" class="social-link">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
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
          
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="contact-form-card">
              <h2 class="form-title">Send Us a Message</h2>
              <p class="form-subtitle">Have questions or want to get involved? Send us a message and we'll get back to you promptly.</p>
              
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name" class="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        v-model="contactForm.name"
                        class="form-control"
                        required
                        placeholder="Enter your full name"
                      >
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email" class="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        v-model="contactForm.email"
                        class="form-control"
                        required
                        placeholder="Enter your email"
                      >
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="phone" class="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        v-model="contactForm.phone"
                        class="form-control"
                        placeholder="Enter your phone number"
                      >
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="subject" class="form-label">Subject *</label>
                      <select 
                        id="subject" 
                        v-model="contactForm.subject"
                        class="form-control"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="program-inquiry">Program Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="volunteering">Volunteering</option>
                        <option value="donation">Donation/Support</option>
                        <option value="general">General Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <div class="form-group">
                      <label for="message" class="form-label">Message *</label>
                      <textarea 
                        id="message" 
                        v-model="contactForm.message"
                        class="form-control"
                        rows="6"
                        required
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-send">
                      <i class="fas fa-paper-plane"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-main-title">Find Us in Mombasa</h2>
          <p class="section-subtitle">Visit our office in Mombasa Central Business District</p>
          <div class="accent-line mx-auto"></div>
        </div>
        
        <div class="map-container">
          <!-- Google Maps Embed -->
          <div class="map-embed">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.150442311022!2d39.66438927485275!3d-4.054557395064253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e4ddf9d911%3A0x2c1ca2e8e22f2c9c!2sMombasa%20CBD%2C%20Mombasa%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="map-iframe"
            ></iframe>
          </div>
          
          <div class="map-info">
            <div class="info-card">
              <h4><i class="fas fa-map-pin"></i> Getting Here</h4>
              <p>Our office is conveniently located in Mombasa CBD, easily accessible by public transport and private vehicles.</p>
              
              <div class="transport-options">
                <div class="transport-option">
                  <i class="fas fa-bus"></i>
                  <span>Matatus: All CBD routes</span>
                </div>
                <div class="transport-option">
                  <i class="fas fa-taxi"></i>
                  <span>Taxis: Available throughout CBD</span>
                </div>
                <div class="transport-option">
                  <i class="fas fa-car"></i>
                  <span>Parking: Available nearby</span>
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
        
        <div class="faq-cta text-center mt-5">
          <p>Still have questions? Don't hesitate to <a href="#contact-form">contact us directly</a>.</p>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<style scoped>
/* Contact Hero Section */
.contact-hero-section {
  position: relative;
  min-height: 40vh;
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

/* Contact Main Section */
.contact-main-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.contact-info-card {
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.contact-info-title {
  color: rgb(20, 101, 167);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-info-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f0f0f0;
}

.contact-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(20, 101, 167, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(20, 101, 167);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-text h4 {
  color: rgb(20, 101, 167);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.contact-text p {
  color: #333;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.contact-text small {
  color: #666;
  font-size: 0.85rem;
}

.social-links h4 {
  color: rgb(20, 101, 167);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(20, 101, 167, 0.1);
  color: rgb(20, 101, 167);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgb(20, 101, 167);
  color: white;
  transform: translateY(-3px);
}

/* Contact Form */
.contact-form-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.form-title {
  color: rgb(20, 101, 167);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.form-control {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.form-control:focus {
  outline: none;
  border-color: rgb(20, 101, 167);
  background: white;
  box-shadow: 0 0 0 3px rgba(20, 101, 167, 0.1);
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.btn-send {
  background: rgb(20, 101, 167);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-send:hover {
  background: rgb(16, 85, 140);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(20, 101, 167, 0.3);
}

/* Map Section */
.map-section {
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

.accent-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, rgb(20, 101, 167) 0%, rgb(12, 65, 107) 100%);
  border-radius: 2px;
}

.map-container {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
}

.map-embed {
  width: 100%;
}

.map-iframe {
  border: none;
}

.map-info {
  position: absolute;
  top: 20px;
  right: 20px;
  max-width: 300px;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.info-card h4 {
  color: rgb(20, 101, 167);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.transport-options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.transport-option {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #555;
}

.transport-option i {
  color: rgb(20, 101, 167);
  width: 20px;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
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
  transition: all 0.3s ease;
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
  transition: all 0.3s ease;
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
  transition: all 0.3s ease;
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

.faq-cta {
  color: #666;
}

.faq-cta a {
  color: rgb(20, 101, 167);
  text-decoration: none;
  font-weight: 600;
}

.faq-cta a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-hero-title {
    font-size: 2.5rem;
  }
  
  .contact-hero-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-info-card,
  .contact-form-card {
    padding: 2rem 1.5rem;
  }
  
  .map-info {
    position: static;
    max-width: 100%;
    margin-top: 1rem;
  }
  
  .info-card {
    margin: 0 1rem;
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
}

@media (max-width: 480px) {
  .contact-hero-title {
    font-size: 2rem;
  }
  
  .section-main-title {
    font-size: 2rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
  
  .social-icons {
    justify-content: center;
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