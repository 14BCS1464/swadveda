import React, { useState, useEffect } from 'react';
import './Home.css'; // Import custom CSS for the home page
import { FaWhatsapp } from 'react-icons/fa'; // For WhatsApp icon
import { db } from "../configuration";
import { collection, addDoc, getDocs, query } from "firebase/firestore"; 

const Home = () => {
  const [hoveredButton, setHoveredButton] = useState(null); 
  const [data, setData] = useState({});

  async function checkAndWriteAppData() {
    try {
      const appInfoQuery = query(collection(db, "appInfo"));
      const querySnapshot = await getDocs(appInfoQuery);
  
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => setData(doc.data()));
      } else {
        console.log("appInfo does not exist. Adding new data...");
        const docRef = await addDoc(collection(db, "appInfo"), {
          intro: {
            welcome: "Welcome to Swadveda",
            intro:
              "Discover the world’s finest spices, crafted with tradition, bursting with flavor, elevating every meal to a masterpiece.",
            buttonTitle: "Shop Now",
          },
          spices: [
            { name: "Saffron (केसर)", description: "The golden luxury from Kashmir.", color: "#FF9933" },
            { name: "Cardamom (इलायची)", description: "Aromatic green pods from Kerala.", color: "#A3C585" },
            { name: "Turmeric (हल्दी)", description: "Earthy vibrance from Tamil Nadu.", color: "#FFD700" },
            { name: "Cinnamon (दालचीनी)", description: "Warm spice with a sweet aroma from Sri Lanka.", color: "#D2691E" },
            { name: "Clove (लौंग)", description: "Pungent buds with a strong, warm essence.", color: "#5D3A1A" },
          ],
          about: {
            title: "About Us",
            description: "At Swadveda, we travel the globe to source the finest spices, blending tradition with excellence. From farm to table, our premium quality spices transform your culinary creations into unforgettable experiences.",
            buttonTitle: "Learn More",
          },
          contact: {
            title: "Contact Us",
            description: "Questions? Ideas? We’d love to hear from you! Connect with us anytime via email, phone, or WhatsApp.",
            email: "Prajapatisunil135@gmail.com",
            phone: "+91 8437513655",
            buttonTitle: "Send a Message",
          },
        });

        console.log("New appInfo document created with ID:", docRef.id);
      }
    } catch (error) {
      console.error("Error:", error);
     
    }
  }

  useEffect(() => {
    checkAndWriteAppData();
  }, []);

  return (
    <div className="home" >
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${require('../assets/images/bc.jpg')})`,}}>
        <img src={require('../assets/images/logo.png')} alt="Swadveda Logo" className="hero-logo" />
        <div className="hero-content">
          <h1>{data?.intro?.welcome}</h1>
          <p>{data?.intro?.intro}</p>
          <button
            className="shop-now-btn"
            onMouseEnter={() => setHoveredButton('shop')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              transform: hoveredButton === 'shop' ? 'scale(1.1)' : 'scale(1)',
              boxShadow: hoveredButton === 'shop' ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none',
            }}
          >
            {data?.intro?.buttonTitle}
          </button>
        </div>
        <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '40px', fontWeight: 700 }}>
          Our Signature Spices
        </h2>
      </div>

      {/* Spices Section */}
      <div
        style={{
          
          position: 'relative',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          overflow: 'hidden',
          zIndex: 1,
       background: "transparent",
        backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9))`,
        backdropFilter: 'blur(1px)',
        WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {data?.spices && data?.spices.length !== 0 && data.spices.map((spice, index) => (
          <div
            key={index}
            style={{
              backgroundColor: spice.color,
              color: '#fff',
              padding: '20px',
              borderRadius: '15px',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
              animation: `fadeInUp 1.${index + 2}s ease-out`,
              position: 'relative',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{spice.name}</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{spice.description}</p>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>{data?.about?.title}</h2>
        <p>{data?.about?.description}</p>
        <button
          className="learn-more-btn"
          onMouseEnter={() => setHoveredButton('learn')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            transform: hoveredButton === 'learn' ? 'scale(1.05)' : 'scale(1)',
            boxShadow: hoveredButton === 'learn' ? '0 5px 15px rgba(0, 0, 0, 0.2)' : 'none',
          }}
        >
          {data?.about?.buttonTitle}
        </button>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <h2>{data?.contact?.title}</h2>
        <p>{data?.contact?.description}</p>
        <div className="contact-info">
          <p>Email: <a href={`mailto:${data?.contact?.email}`} style={{ color: '#ff6f61' }}>{data?.contact?.email}</a></p>
          <p>Phone: <a href={`tel:${data?.contact?.phone}`} style={{ color: '#ff6f61' }}>{data?.contact?.phone}</a></p>
        </div>
        <button
          className="contact-btn"
          onMouseEnter={() => setHoveredButton('contact')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            transform: hoveredButton === 'contact' ? 'scale(1.1)' : 'scale(1)',
            boxShadow: hoveredButton === 'contact' ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none',
          }}
        >
          {data?.contact?.buttonTitle}
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${data?.contact?.phone?.replace(/\s/g, '')}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default Home;
