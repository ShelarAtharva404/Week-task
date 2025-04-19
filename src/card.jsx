function Card({ title, description }) {
    return (
      <div style={styles.card}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.desc}>{description}</p>
      </div>
    );
  }
  
  const styles = {
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '25px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      width: '100%',
      maxWidth: '280px',
    },
    title: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '8px',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.5',
    },
  };
  
  
  
  export default Card;
  