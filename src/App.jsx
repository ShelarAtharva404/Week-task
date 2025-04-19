import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const cardData = [
    { title: 'React Basics', description: 'Learn the fundamentals of React.' },
    { title: 'Vite Setup', description: 'Get started with a fast build tool.' },
    { title: 'Components', description: 'Break your UI into reusable parts.' },
    { title: 'Props & State', description: 'Pass data and handle dynamic changes.' },
  ];

  const appStyles = {
    ...styles.container,
    backgroundColor: darkMode ? '#2c3e50' : '#f4f4f4',
    color: darkMode ? '#ecf0f1' : '#2c3e50',
    transition: 'all 0.3s ease',
  };

  // Handle login form submission
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={appStyles}>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} /> // Show login form first
      ) : (
        <>
          <Header title="🚀 React Cards Demo" subtitle="Dynamic Components with Props" />
          
          {/* 🌙 Toggle Theme */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '10px 20px',
                backgroundColor: darkMode ? '#f39c12' : '#34495e',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Toggle Theme
            </button>
          </div>

          {/* 🧩 Dynamic Cards */}
          <main style={styles.main}>
            <div style={styles.cardContainer}>
              {cardData.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} />
              ))}
            </div>
          </main>

          {/* ❤️ Like Button */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
            <button
              onClick={() => setLikes(likes + 1)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#e74c3c',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              ❤️ Like {likes}
            </button>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '20px',
  },
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    maxWidth: '1000px',
  },
};

export default App;
