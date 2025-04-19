function Header({ title, subtitle }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.subtitle}>{subtitle}</p>
    </header>
  );
}

const styles = {
  header: {
    margin: 0, // Remove margins
    padding: '30px 0', // Add padding for content
    backgroundColor: '#34495e', // Header background color
    color: '#fff',
    textAlign: 'center',
    border: 'none', // No border
    boxShadow: 'none', // No shadow
    width: '100%', // Full width
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '300',
  },
};

export default Header;
