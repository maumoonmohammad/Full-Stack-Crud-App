import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome Developers!</h1>
      </header>
      <main>
        <p>Thank you for visiting our website. We hope you find it useful.</p>
        <p>Start building amazing things with React.js!</p>
      </main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default Home