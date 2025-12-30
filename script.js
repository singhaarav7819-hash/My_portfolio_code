// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
}

// Resume Download Function
function downloadResume() {
    const resumeContent = `AARAV SINGH
B.Tech Computer Science | Frontend Developer
Rungta International Skills University

📧 CONTACT INFORMATION
Email: singhaarav7819@gmail.com
LinkedIn: https://www.linkedin.com/in/aarav-singh-653b58284
GitHub: https://github.com/singhaarav7819-hash

💻 TECHNICAL SKILLS
• HTML5, CSS3, JavaScript (Advanced)
• React, Tailwind CSS, Git/GitHub
• Responsive Design, UI/UX Design
• VS Code, Figma, Netlify, Vercel

🎯 PROJECT EXPERIENCE
Personal Portfolio Website
• Fully responsive single-page application
• Vanilla HTML/CSS/JavaScript
• Mobile-first design with hamburger menu
• Smooth scrolling animations & glass morphism effects

🎓 EDUCATION
B.Tech Computer Science
Rungta International Skills University
Expected Graduation: 2027

📱 AVAILABILITY
• Available for Internships
• Open to Freelance Projects
• Collaboration Opportunities`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aarav-Singh-Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    // Success feedback
    setTimeout(() => {
        alert('✅ Resume downloaded successfully!\n\n💡 Check your Downloads folder.\n📁 Upload PDF version to GitHub for direct access.');
    }, 500);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
        // Close mobile menu after navigation
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(33, 150, 243, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(33, 150, 243, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(el => observer.observe(el));

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
