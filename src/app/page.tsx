// src/pages/index.tsx
import Header from './components/header';
import Footer from './components/footer';
import './styles/layout.css';

export default function Home() {
  return (
    <>
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <h1>Secure Your World with Smart CCTV Solutions</h1>
            <p>We provide cutting-edge surveillance systems for homes, offices, and industries.</p>
            <button className="cta-button">Explore Products</button>
          </div>
          <img
            src="/images/c1.png"
            alt="CCTV Camera"
            className="hero-image"
          />
        </section>

        {/* Features */}
        <section className="features">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/100/lock--v1.png" height={20} alt="Security" />
              <h3>Advanced Security</h3>
              <p>High-definition cameras with night vision and motion detection.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/100/camera--v1.png" alt="Installation" />
              <h3>Easy Installation</h3>
              <p>Professional setup with seamless integration into your space.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/100/online-support.png" alt="Support" />
              <h3>24/7 Support</h3>
              <p>Our team is always available to assist with your queries and issues.</p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="products">
          <h2>Our Best-Selling Cameras</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="https://via.placeholder.com/300x200.png?text=Camera+Model+1" alt="Camera 1" />
              <h3>Outdoor Dome Camera</h3>
              <p>Weatherproof, Full HD, Night Vision</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/300x200.png?text=Camera+Model+2" alt="Camera 2" />
              <h3>Indoor PTZ Camera</h3>
              <p>Pan-Tilt-Zoom, Mobile View, Motion Alerts</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/300x200.png?text=Camera+Model+3" alt="Camera 3" />
              <h3>Mini Hidden Camera</h3>
              <p>Discreet, Wireless, Long Battery Life</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-card">
            <p>"These cameras gave me peace of mind. Installation was quick and service was excellent!"</p>
            <h4>—Suraj ,Pune</h4>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
