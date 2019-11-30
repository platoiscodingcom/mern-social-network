import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Developer Connector</h1>
          <p class="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div class="buttons">
          <div class="buttons">
          <Link to="/register" className="btn btn-primary">Register</Link>
          <Link to="/login" className="btn btn-default">Login</Link>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;