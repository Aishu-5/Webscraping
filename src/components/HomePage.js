import React from 'react';
import '../styles/HomePage.css'; 

function HomePage() {
    const handleExploreClick = () => {
        alert("Explore more features coming soon!");
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>Easy Web Scraping for Anyone</h1>
                <p>No-coding solution for web scraping to turn pages
                into structured data within clicks.</p>
                <button className="cta-button" onClick={handleExploreClick}>Explore Features</button>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Key Features</h2>
                <div className="features">
                    <div className="feature">
                        <h3>Fast Data Extraction</h3>
                        <p>Scrape data from multiple websites quickly and efficiently.</p>
                    </div>
                    <div className="feature">
                        <h3>Easy Integration</h3>
                        <p>Integrate scraped data into your systems or databases seamlessly.</p>
                    </div>
                    <div className="feature">
                        <h3>Schedule Scraping Tasks</h3>
                        <p>Set up automated schedules to scrape data at regular intervals.</p>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section">
                <h2>How It Works</h2>
                <iframe 
                    width="600" 
                    height="350" 
                    src="https://www.youtube.com/embed/sample_video" 
                    title="Web Scraping Intro"
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>"This platform helped me scrape data for my research project in no time!"</p>
                        <span>- Sarah K.</span>
                    </div>
                    <div className="testimonial">
                        <p>"The best tool for automating web data collection. Highly recommend!"</p>
                        <span>- John M.</span>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Web Scraping Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
