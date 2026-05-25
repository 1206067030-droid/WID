import React, { useState } from 'react';

function App() {
  // 语言状态，默认中文
  const [language, setLanguage] = useState('zh');

  // 切换语言
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  // 产品数据
  const products = [
    {
      id: 1,
      title: {
        zh: "運動款智能手錶 - 橙色",
        en: "Sports Smart Watch - Orange"
      },
      description: {
        zh: "專為運動愛好者設計的智能手錶，具備心率監測、步數統計、防水功能，適合各種運動場景。",
        en: "Smart watch designed for sports enthusiasts, with heart rate monitoring, step counting, waterproof function, suitable for various sports scenarios."
      },
      image: "/images/智能手表橙色.jpg",
      price: "$99.99"
    },
    {
      id: 2,
      title: {
        zh: "運動款智能手錶 - 白色",
        en: "Sports Smart Watch - White"
      },
      description: {
        zh: "簡約白色設計，多功能智能手錶，支援運動模式切換、睡眠監測，防水等級50米。",
        en: "Simple white design, multi-functional smart watch, support sports mode switching, sleep monitoring, waterproof rating 50 meters."
      },
      image: "/images/智能手表白.jpg",
      price: "$99.99"
    },
    {
      id: 3,
      title: {
        zh: "運動款智能手錶 - 粉色",
        en: "Sports Smart Watch - Pink"
      },
      description: {
        zh: "時尚粉色外觀，適合女性用戶的智能手錶，具備月經周期管理、運動追蹤等功能。",
        en: "Fashionable pink appearance, smart watch suitable for female users, with menstrual cycle management, sports tracking and other functions."
      },
      image: "/images/智能手表粉.jpg",
      price: "$99.99"
    },
    {
      id: 4,
      title: {
        zh: "運動款智能手錶 - 花色",
        en: "Sports Smart Watch - Floral"
      },
      description: {
        zh: "獨特花色設計，個性化智能手錶，支援多種運動模式，續航時間長達7天。",
        en: "Unique floral design, personalized smart watch, support multiple sports modes, battery life up to 7 days."
      },
      image: "/images/智能手表花.jpg",
      price: "$109.99"
    },
    {
      id: 5,
      title: {
        zh: "運動款智能手錶 - 黑色",
        en: "Sports Smart Watch - Black"
      },
      description: {
        zh: "經典黑色設計，商務運動兩相宜的智能手錶，具備消息提醒、來電顯示等功能。",
        en: "Classic black design, smart watch suitable for both business and sports, with message reminder, call display and other functions."
      },
      image: "/images/智能手表黑.jpg",
      price: "$99.99"
    }
  ];

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    alert(language === 'zh' ? '感謝您的諮詢，我們會儘快與您聯繫！' : 'Thank you for your inquiry, we will contact you soon!');
    e.target.reset();
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>WIDEAREA WORLD TRADING LIMITED</h1>
          <p>{language === 'zh' ? '批發銷售智能穿戴設備，如智能電子手錶和防水電子手錶' : 'Wholesale sales of smart wearable devices, such as smart electronic watches and waterproof electronic watches'}</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-user"></i>
              <span>{language === 'zh' ? '聯絡人：張先生' : 'Contact: Mr. Zhang'}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>Email: wordzhangjiawei@outlook.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>Phone: 17840430809</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Address: UNIT 2A, 17/F GLENEALY TOWER, NO.1 GLENEALY CENTRAL, HONG KONG</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-logo">WIDEAREA</a>
          <div className="nav-links">
            <a href="#about" className="nav-link">{language === 'zh' ? '關於我們' : 'About Us'}</a>
            <a href="#products" className="nav-link">{language === 'zh' ? '產品展示' : 'Products'}</a>
            <a href="#contact" className="nav-link">{language === 'zh' ? '聯繫我們' : 'Contact Us'}</a>
            <button onClick={toggleLanguage} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              {language === 'zh' ? 'English' : '繁體中文'}
            </button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">{language === 'zh' ? '關於我們' : 'About Us'}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{language === 'zh' ? 'WIDEAREA WORLD TRADING LIMITED 是一家專注於智能穿戴設備批發的公司，我們致力於為客戶提供高品質的智能電子手錶和防水電子手錶。' : 'WIDEAREA WORLD TRADING LIMITED is a company specializing in wholesale of smart wearable devices, we are committed to providing customers with high-quality smart electronic watches and waterproof electronic watches.'}</p>
              <p>{language === 'zh' ? '我們的產品採用最新的技術，具備多種功能，如心率監測、步數統計、睡眠監測、運動模式切換等，適合各種運動場景和日常生活使用。' : 'Our products use the latest technology, with multiple functions such as heart rate monitoring, step counting, sleep monitoring, sports mode switching, etc., suitable for various sports scenarios and daily use.'}</p>
              <p>{language === 'zh' ? '我們擁有專業的團隊，為客戶提供優質的服務和支持，確保客戶能夠獲得滿意的產品和體驗。' : 'We have a professional team to provide customers with high-quality services and support, ensuring that customers can get satisfactory products and experience.'}</p>
              <p>{language === 'zh' ? '無論您是零售商、分銷商還是企業客戶，我們都能為您提供具有競爭力的價格和靈活的合作方案。' : 'Whether you are a retailer, distributor or corporate customer, we can provide you with competitive prices and flexible cooperation plans.'}</p>
            </div>
            <div className="about-image">
              <img src="/images/智能手表黑.jpg" alt={language === 'zh' ? '智能手錶' : 'Smart Watch'} />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="section-container">
          <h2 className="section-title">{language === 'zh' ? '產品展示' : 'Products'}</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title[language]} />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title[language]}</h3>
                  <p className="product-description">{product.description[language]}</p>
                  <p className="product-price">{product.price}</p>
                  <a href="#contact" className="product-button">{language === 'zh' ? '立即諮詢' : 'Inquire Now'}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">{language === 'zh' ? '客戶諮詢' : 'Customer Inquiry'}</h2>
          <div className="contact-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{language === 'zh' ? '姓名' : 'Name'}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{language === 'zh' ? '郵箱' : 'Email'}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{language === 'zh' ? '電話' : 'Phone'}</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="product">{language === 'zh' ? '感興趣的產品' : 'Interested Product'}</label>
                <input type="text" id="product" name="product" />
              </div>
              <div className="form-group">
                <label htmlFor="message">{language === 'zh' ? '諮詢內容' : 'Inquiry Content'}</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-button">{language === 'zh' ? '提交諮詢' : 'Submit Inquiry'}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">WIDEAREA WORLD TRADING LIMITED</div>
          <div className="footer-info">
            <p>{language === 'zh' ? '聯絡人：張先生' : 'Contact: Mr. Zhang'}</p>
            <p>Email: wordzhangjiawei@outlook.com</p>
            <p>Phone: 17840430809</p>
            <p>Address: UNIT 2A, 17/F GLENEALY TOWER, NO.1 GLENEALY CENTRAL, HONG KONG</p>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} WIDEAREA WORLD TRADING LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Font Awesome CDN */}
      <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;