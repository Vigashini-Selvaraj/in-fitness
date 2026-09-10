/**
 * Reusable Components Logic
 */

function renderNavbar() {
    const navbarHTML = `
        <nav class="navbar">
            <div class="container">
                <a href="index.html" class="nav-brand">
                    <img src="assets/images/in_plus_logo.png" alt="IN+ Fitness Logo" class="logo-image" style="height: 140px; border-radius: 4px; margin-top: 10px;">
                </a>
                
                <div class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="home-2.html">Home 2</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="sessions.html">Sessions</a>
                    <a href="blog.html">Blog</a>
                    <a href="contact.html">Contact</a>
                </div>

                <div class="nav-actions">
                    <button class="icon-btn direction-toggle" aria-label="Toggle RTL/LTR" title="LTR / RTL">
                        <span style="font-family: 'Sora', sans-serif; font-weight: 700; font-size: 0.875rem;">LTR</span>
                    </button>
                    <button class="icon-btn theme-toggle" aria-label="Toggle theme">
                        <i data-lucide="moon" class="theme-icon"></i>
                    </button>
                    <div class="profile-menu desktop-only">
                        <button class="icon-btn profile-btn" aria-label="Profile">
                            <i data-lucide="user"></i>
                        </button>
                        <div class="profile-dropdown">
                            <a href="login.html">Login / Register</a>
                            <a href="admin.html">Admin Dashboard</a>
                            <a href="dashboard.html">User Dashboard</a>
                        </div>
                    </div>
                    <button class="hamburger" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div class="nav-mobile-menu">
            <div class="mobile-links">
                <a href="index.html">Home</a>
                <a href="home-2.html">Home 2</a>
                <a href="about.html">About Us</a>
                <a href="services.html">Services</a>
                <a href="sessions.html">Sessions</a>
                <a href="blog.html">Blog</a>
                <a href="contact.html">Contact</a>
            </div>

            <!-- Account Section -->
            <div class="mobile-links" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; color: #ffffff; margin-bottom: 1rem;">
                    <i data-lucide="user"></i>
                    <span style="font-family: 'Sora', sans-serif; font-size: 1.125rem; font-weight: 600;">Account</span>
                </div>
                <a href="login.html" style="font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; font-weight: 500; text-transform: none; color: rgba(255,255,255,0.7); margin-left: 0.5rem;"><i data-lucide="log-in" style="width: 18px; height: 18px;"></i> Login / Register</a>
                <a href="dashboard.html" style="font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; font-weight: 500; text-transform: none; color: rgba(255,255,255,0.7); margin-left: 0.5rem;"><i data-lucide="layout-dashboard" style="width: 18px; height: 18px;"></i> User Dashboard</a>
                <a href="admin.html" style="font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; font-weight: 500; text-transform: none; color: rgba(255,255,255,0.7); margin-left: 0.5rem;"><i data-lucide="shield" style="width: 18px; height: 18px;"></i> Admin Dashboard</a>
            </div>
        </div>
    `;

    document.getElementById('navbar').innerHTML = navbarHTML;
}

function renderFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <a href="index.html" class="nav-brand">
                            <img src="assets/images/in_plus_logo.png" alt="IN+ Fitness Logo" class="logo-image" style="height: 60px; border-radius: 4px; margin-bottom: 0.5rem;">
                        </a>
                        <h4 style="color: var(--color-accent); margin-top: 0.5rem; margin-bottom: 0;">Train. Move. Progress.</h4>
                        <p>A premium fitness experience dedicated to strength, performance, and building a supportive community.</p>
                        
                            <div class="footer-socials">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <i class="fa-brands fa-facebook-f"></i>
    </a>

    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
        <i class="fa-brands fa-x-twitter"></i>
    </a>

    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <i class="fa-brands fa-youtube"></i>
    </a>
</div>
   



                        
                    </div>
                    
                    <div>
                        <h4>Quick Links</h4>
                        <div class="footer-links">
                            <a href="index.html">Home</a>
                            <a href="home-2.html">Home 2</a>
                            <a href="about.html">About</a>
                            <a href="services.html">Services</a>
                            <a href="blog.html">Blog</a>
                        </div>
                    </div>

                    <div>
                        <h4>Support</h4>
                        <div class="footer-links">
                           <div class="footer-links">
    <a href="faq.html">FAQ</a>
    <a href="measurement-guide.html">Measurement Guide</a>
    <a href="membership.html">Membership</a>
    <a href="privacy.html">Privacy Policy</a>
    <a href="terms.html">Terms & Conditions</a>
    <a href="contact.html">Contact Us</a>
</div>
                        </div>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul class="footer-contact">
                            <li><i data-lucide="map-pin"></i> Chennai, Tamil Nadu</li>
                            <li><i data-lucide="phone"></i> +91 98765 43210</li>
                            <li><i data-lucide="mail"></i> <a href="mailto:hello@inplusfitness.com">hello@inplusfitness.com</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2026 IN+ FITNESS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    document.getElementById('footer').innerHTML = footerHTML;
}
