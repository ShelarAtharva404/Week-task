function Footer() {
  const year = new Date().getFullYear();
  const time = new Date().toLocaleTimeString();

  return (
    <footer style={styles.footer}>
      <p>&copy; {year} | React Footer</p>
      <small style={styles.time}>Current Time: {time}</small>
    </footer>
  );
}

const styles = {
  footer: {
    margin: 0, // Remove margins
    padding: '20px 0', // Padding for footer content
    backgroundColor: '#2c3e50', // Footer background color
    color: '#61dafb',
    textAlign: 'center',
    border: 'none', // No border
    boxShadow: 'none', // No shadow
    width: '100%', // Full width
  },
  time: {
    display: 'block',
    marginTop: '5px',
    fontSize: '0.8rem',
    color: '#ccc',
  },
};

export default Footer;
