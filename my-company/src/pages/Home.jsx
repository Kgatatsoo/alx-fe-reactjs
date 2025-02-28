

import React from 'react';

const Home = () => {
  return (
    <div style={styles.page}>
      <h1>Welcome to Our Company</h1>
      <p>We are glad to have you here!</p>
    </div>
  );
};

const styles = {
  page: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f5f5f5',
  },
};

export default Home;
