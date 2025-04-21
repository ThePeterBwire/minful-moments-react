import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container mt-5">
    <h1>Welcome to Mindful Moments</h1>
    <Link to="/journal" className="btn btn-primary mt-3">
      Start Journaling
    </Link>
  </div>
);

export default Home;