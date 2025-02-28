

import React from 'react';

const Services = () => {
  return (
    <div style={styles.page}>
      <h1>Our Services</h1>
      <ul>
        <li>Web Development</li>
        <li>App Development</li>
        <li>Digital Marketing</li>
      </ul>
    </div>
  );
};

const styles = {
  page: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#ffecb3',
  },
};

export default Services;
