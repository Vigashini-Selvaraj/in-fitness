const sessionsData = [
    {
        id: 'strength-foundations',
        name: 'Strength Foundations',
        category: 'Strength',
        duration: '60 min',
        level: 'Beginner – Intermediate',
        trainer: 'Coach Alex',
        price: '₹500',
        spots: 8,
        desc: 'Build strength, stability, and proper lifting technique.',
        image: 'assets/images/about_hero.jpg',
        benefits: ['Strength', 'Stability', 'Technique', 'Confidence'],
        structure: ['Warm-up (10m)', 'Main Lifts (35m)', 'Accessory Work (10m)', 'Cool Down (5m)'],
        forWho: 'Anyone looking to learn the fundamentals of barbell and dumbbell strength training in a safe environment.',
        location: 'Main Studio'
    },
    {
        id: 'personal-training',
        name: 'Personal Training',
        category: 'Personal Training',
        duration: '60 min',
        level: 'All Levels',
        trainer: 'Coach Priya',
        price: '₹1500',
        spots: 1,
        desc: 'One-to-one coaching designed around your individual goals.',
        image: 'assets/images/about_overview.jpg',
        benefits: ['Custom Programming', '1-on-1 Focus', 'Accountability', 'Faster Progress'],
        structure: ['Assessment', 'Targeted Training', 'Conditioning', 'Mobility'],
        forWho: 'Individuals with specific goals, recovering from injury, or who prefer personalized attention.',
        location: 'PT Area'
    },
    {
        id: 'agility-performance',
        name: 'Agility & Performance',
        category: 'Agility',
        duration: '60 min',
        level: 'Intermediate',
        trainer: 'Coach Rahul',
        price: '₹600',
        spots: 12,
        desc: 'Improve speed, coordination, balance, and athletic performance.',
        image: 'assets/images/team_rahul.jpg',
        benefits: ['Speed', 'Explosiveness', 'Coordination', 'Conditioning'],
        structure: ['Dynamic Warm-up (10m)', 'Drills (20m)', 'Sprints/Plyos (20m)', 'Recovery (10m)'],
        forWho: 'Athletes and fitness enthusiasts looking to move faster and improve athletic capacity.',
        location: 'Turf Area'
    },
    {
        id: 'group-fitness',
        name: 'Group Fitness',
        category: 'Group',
        duration: '45 min',
        level: 'All Levels',
        trainer: 'Coach Ananya',
        price: '₹400',
        spots: 20,
        desc: 'High-energy coached training in a motivating group environment.',
        image: 'assets/images/team_ananya.jpg',
        benefits: ['Endurance', 'Fat Loss', 'Community', 'High Energy'],
        structure: ['Warm-up (5m)', 'Circuit Training (35m)', 'Cool Down (5m)'],
        forWho: 'Those who enjoy sweating it out in a fun, fast-paced team atmosphere.',
        location: 'Group Studio'
    },
    {
        id: 'functional-training',
        name: 'Functional Training',
        category: 'Functional',
        duration: '60 min',
        level: 'All Levels',
        trainer: 'Coach Arjun',
        price: '₹500',
        spots: 10,
        desc: 'Train movement patterns that improve everyday performance.',
        image: 'assets/images/team_arjun.jpg',
        benefits: ['Core Strength', 'Balance', 'Mobility', 'Real-world Strength'],
        structure: ['Movement Prep (10m)', 'Kettlebell/TRX (30m)', 'Core (10m)', 'Stretch (10m)'],
        forWho: 'Anyone wanting to build resilient joints and strength that carries over to daily life.',
        location: 'Functional Zone'
    },
    {
        id: 'mobility-recovery',
        name: 'Mobility & Recovery',
        category: 'Mobility',
        duration: '45 min',
        level: 'All Levels',
        trainer: 'Coach Priya',
        price: '₹300',
        spots: 15,
        desc: 'Improve flexibility, movement quality, recovery, and mobility.',
        image: 'assets/images/about_story.jpg',
        benefits: ['Flexibility', 'Injury Prevention', 'Relaxation', 'Joint Health'],
        structure: ['Breathwork (5m)', 'Active Stretching (20m)', 'Foam Rolling (15m)', 'Relaxation (5m)'],
        forWho: 'Everyone. Essential for recovering from hard training and desk jobs.',
        location: 'Recovery Room'
    }
];

// Sessions Grid Rendering
function renderSessionsGrid(filter = 'All') {
    const grid = document.getElementById('sessions-grid-container');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = filter === 'All' ? sessionsData : sessionsData.filter(s => s.category.includes(filter));

    filtered.forEach(session => {
        const card = document.createElement('div');
        card.className = 'session-card slide-up';
        card.innerHTML = `
            <div class="session-img-wrapper"><img src="${session.image}" alt="${session.name}" class="session-img"></div>
            <div class="session-content">
                <span class="session-category">${session.category}</span>
                <h3 class="session-title">${session.name}</h3>
                <p class="session-desc">${session.desc}</p>
                <div class="session-meta">
                    <div class="session-meta-item"><i data-lucide="clock"></i> ${session.duration}</div>
                    <div class="session-meta-item"><i data-lucide="bar-chart"></i> ${session.level}</div>
                    <div class="session-meta-item"><i data-lucide="user"></i> ${session.trainer}</div>
                </div>
                <div class="session-actions">
                    <a href="session-details.html?id=${session.id}" class="btn btn-outline">VIEW DETAILS</a>
                    <button class="btn btn-primary" onclick="window.location.href='pricing.html'">BOOK SESSION</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initSessionFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderSessionsGrid(e.target.getAttribute('data-filter'));
        });
    });
}

// Booking Modal Logic
let currentBookingStep = 1;
let bookingData = {};

function openBookingModal(plan = 'Drop-in', sessionId = null) {
    const modal = document.getElementById('booking-modal');
    if (!modal) return;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    currentBookingStep = 1;
    bookingData = { plan: plan };
    
    const sessionSelect = document.getElementById('book-session-select');
    if(sessionSelect) {
        sessionSelect.value = sessionId || "";
    }
    
    updateBookingStep();
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function nextBookingStep() {
    // Validate current step
    if (currentBookingStep === 1) {
        const select = document.getElementById('book-session-select');
        if (!select.value) return alert('Please select a session');
        bookingData.session = sessionsData.find(s => s.id === select.value);
    } else if (currentBookingStep === 2) {
        const date = document.getElementById('book-date').value;
        if (!date) return alert('Please select a date');
        bookingData.date = date;
    } else if (currentBookingStep === 3) {
        const time = document.getElementById('book-time').value;
        if (!time) return alert('Please select a time');
        bookingData.time = time;
    } else if (currentBookingStep === 4) {
        const name = document.getElementById('book-name').value;
        const email = document.getElementById('book-email').value;
        if (!name || !email) return alert('Please fill in required details');
        bookingData.name = name;
        bookingData.email = email;
        
        // Populate summary
        document.getElementById('summary-session').innerText = bookingData.session.name;
        document.getElementById('summary-date').innerText = bookingData.date;
        document.getElementById('summary-time').innerText = bookingData.time;
        document.getElementById('summary-plan').innerText = bookingData.plan.toUpperCase();
        
        let price = bookingData.session.price;
        if(bookingData.plan === 'Essential' || bookingData.plan === 'Performance') price = "Included in Membership";
        if(bookingData.plan === 'Personal Training') price = "₹1500";
        document.getElementById('summary-price').innerText = price;
    }

    if (currentBookingStep < 5) {
        currentBookingStep++;
        updateBookingStep();
    }
}

function prevBookingStep() {
    if (currentBookingStep > 1) {
        currentBookingStep--;
        updateBookingStep();
    }
}

function updateBookingStep() {
    document.querySelectorAll('.booking-step').forEach((el, index) => {
        el.classList.toggle('active', index + 1 === currentBookingStep);
    });
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        el.classList.toggle('active', index + 1 <= currentBookingStep);
    });
}

function confirmBooking() {
    document.getElementById('booking-step-5').classList.remove('active');
    document.getElementById('booking-success').classList.add('active');
}

// Session Details Page Render
function renderSessionDetails() {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('id');
    const session = sessionsData.find(s => s.id === sessionId);
    
    if (!session) return; // Maybe show a 404
    
    // Update HTML elements
    const setContent = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };
    
    document.title = `${session.name} | IN+ FITNESS`;
    
    const heroBg = document.getElementById('details-hero-bg');
    if (heroBg) heroBg.style.backgroundImage = `url('${session.image}')`;
    
    setContent('detail-category', session.category);
    setContent('detail-title', session.name);
    setContent('detail-desc', session.desc);
    
    setContent('detail-about', session.forWho);
    
    setContent('detail-benefits', session.benefits.map(b => `<li style="margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;"><i data-lucide="check-circle" style="color:var(--color-accent); width:18px;"></i>${b}</li>`).join(''));
    
    setContent('detail-structure', session.structure.map((s, i) => `<li style="margin-bottom:0.5rem;"><strong>Step ${i+1}:</strong> ${s}</li>`).join(''));
    
    setContent('sidebar-duration', session.duration);
    setContent('sidebar-level', session.level);
    setContent('sidebar-trainer', session.trainer);
    setContent('sidebar-location', session.location);
    setContent('sidebar-spots', session.spots);
    // Inject Session-Specific Pricing
    const sidebar = document.querySelector('.details-sidebar');
    if(sidebar) {
        // Remove old price block
        const oldPrice = document.getElementById('sidebar-price');
        if(oldPrice) oldPrice.remove();
        
        // Add new detailed pricing block before the button
        const btn = document.getElementById('detail-book-btn');
        if(btn) {
            const pricingBlock = document.createElement('div');
            pricingBlock.innerHTML = `
                <h3 style="margin-bottom: 1rem; margin-top:2rem;">SESSION PRICING</h3>
                <div style="margin-bottom: 1rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border);">
                    <strong style="display:block; color:var(--color-text);">Drop-In</strong>
                    <span style="color:var(--color-accent); font-weight:700;">${session.price} <span style="font-size:0.85rem; font-weight:400; color:var(--color-text-secondary);">/ session</span></span>
                </div>
                <div style="margin-bottom: 1rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border);">
                    <strong style="display:block; color:var(--color-text);">Essential / Performance</strong>
                    <span style="color:var(--color-text-secondary); font-weight:700;">Included in membership</span>
                </div>
                <div style="margin-bottom: 2rem;">
                    <strong style="display:block; color:var(--color-text);">Personal Training</strong>
                    <span style="color:var(--color-text-secondary); font-weight:700;">₹1500 <span style="font-size:0.85rem; font-weight:400;">/ session</span></span>
                </div>
            `;
            sidebar.insertBefore(pricingBlock, btn);
        }
    }
    
    const bookBtn = document.getElementById('detail-book-btn');
    if(bookBtn) {
        bookBtn.onclick = () => {
            window.location.href = `pricing.html?action=book&id=${session.id}`;
        };
    }
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Initializers
document.addEventListener('DOMContentLoaded', () => {
    // Check if on sessions page
    if (document.getElementById('sessions-grid-container')) {
        renderSessionsGrid();
        initSessionFilters();
    }
    
    // Populate modal select (used on pricing page)
    const sessionSelect = document.getElementById('book-session-select');
    if (sessionSelect) {
        sessionsData.forEach(s => {
            sessionSelect.innerHTML += `<option value="${s.id}">${s.name} (${s.duration})</option>`;
        });
        
        // Handle URL action
        const params = new URLSearchParams(window.location.search);
        if (params.get('action') === 'book') {
            const plan = params.get('plan') || 'Drop-in'; // default if omitted
            const id = params.get('id') || null;
            setTimeout(() => {
                openBookingModal(plan, id);
            }, 500); // slight delay for smooth load
        }
    }
    
    // Check if on details page
    if (document.getElementById('session-details-content')) {
        renderSessionDetails();
    }
});
