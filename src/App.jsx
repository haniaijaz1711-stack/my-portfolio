
import "./App.css";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "Modern, responsive websites designed to help your business grow online.",
    tags: ["React", "JavaScript", "Responsive Design ","Next ","Supabase","Mongoose","Mongo Db","Html5","Compass","Typescript","Github"],
  },
  {
    number: "02",
    icon: "W",
    title: "WordPress",
    description:
      "Professional business websites, landing pages and customized WordPress designs.",
    tags: ["WordPress", "Elementor", "Website Design","PHP","Domian Setup","Hostinger Setup"],
  },
  {
    number: "03",
    icon: "S",
    title: "Shopify & E-commerce",
    description:
      "Online stores with beautiful product pages and a smooth shopping experience.",
    tags: ["Shopify", "Store Setup", "Product Pages","Domian Setup"],
  },
  {
    number: "04",
    icon: "↗",
    title: "Digital Marketing",
    description:
      "Creative social media content and digital strategies to improve your online presence.",
    tags: ["SEO", "Social Media", "Content Creation","Canva","Posters"],
  },
];

const projects = [
  {
    number: "01",
    category: "E-COMMERCE",
    title: "Solemates Slavy",
    description:
      "A footwear brand concept focused on elegant product presentation and online shopping.",
    color: "project-pink",
    tags: ["Shopify", "E-commerce"],
    link: "https://solematesslavy.pk/",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Umerestate",
    description:
      "A sample business website concept with responsive layouts and a clean interface.",
    color: "project-purple",
    tags: ["html", "CSS","php","Java"],
    link: "https://umerestate.pk/",
  },
  {
    number: "03",
    category: "DIGITAL MARKETING",
    title: "Social Media Campaign",
    description:
      "A sample campaign concept featuring brand visuals and promotional content.",
    color: "project-blue",
    tags: ["Canva", "Social Media"],
    link: "",
  },
  {
    number: "03",
    category: "Flappy bird",
    title: "Game Development",
    description:
      "Developed a fun Flappy Bird game featuring smooth controls, obstacle avoidance, score tracking, and interactive gameplay using HTML, CSS, and JavaScript.",
    color: "project-blue",
    tags: ["Html", "Javascript","Css"],
    link: "https://flappy-bird-blue-five.vercel.app/",
  },
];

const App = () => {
  return (
    <div className="site-wrapper">
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">H<span>D</span></span>
          <span className="brand-name">
            HANIA <small>DIGITAL STUDIO</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-cta">Let's Talk ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              YOUR DIGITAL GROWTH PARTNER
            </div>

            <p className="eyebrow">HELLO, WELCOME TO MY STUDIO</p>

            <h1>
              Turning your ideas into
              <span className="gradient-text"> digital experiences.</span>
            </h1>

            <p className="hero-description">
              I'm Hania, a web developer and digital marketer helping
              businesses build a stronger online presence through creative
              websites, e-commerce and digital content.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Let's Collaborate
              </a>
            </div>

            <div className="hero-skills">
              <span>React</span>
              <span>WordPress</span>
              <span>Shopify</span>
              <span>Digital Marketing</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="hero-card">
              <div className="card-top">
                <span className="mini-logo">HD.</span>
                <span className="card-label">CREATIVE STUDIO</span>
              </div>

              <div className="monogram">H<span>D</span></div>

              <h2>Design. Develop.<br />Grow.</h2>
              <p>Ideas built for the digital world.</p>

              <div className="card-bottom">
                <span>WEB DESIGN</span>
                <span>DIGITAL GROWTH ↗</span>
              </div>
            </div>

            <div className="floating-tag tag-top">✳ Creative Design</div>
            <div className="floating-tag tag-bottom">{"</>"} Clean Code</div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 2 }, (_, index) => (
              <span key={index}>
                WEB DEVELOPMENT <b>✳</b> WORDPRESS <b>✳</b> SHOPIFY
                <b>✳</b> DIGITAL MARKETING <b>✳</b> CREATIVE DESIGN
                <b>✳</b>
              </span>
            ))}
          </div>
        </div>

        <section className="section-container about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Creativity meets
              <span className="gradient-text"> technology.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-badge">
              <div className="about-initials">H<span>D</span></div>
              <p>HANIA DIGITAL STUDIO</p>
              <span>DESIGN • DEVELOP • GROW</span>
            </div>

            <div className="about-copy">
              <h3>Building meaningful digital experiences.</h3>
              <p>
                I work across web development and digital marketing, combining
                thoughtful design with practical solutions for businesses.
              </p>
              <p>
                From website creation to online store setup and social media
                content, my goal is to help brands present themselves
                professionally online.
              </p>

              <div className="about-points">
                <span>✦ Creative problem-solving</span>
                <span>✦ Responsive web experiences</span>
                <span>✦ Business-focused design</span>
                <span>✦ Continuous learning</span>
              </div>

              <a className="text-link" href="#contact">
                Have a project in mind? Let's talk ↗
              </a>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-container">
            <div className="section-heading centered">
              <p className="eyebrow">WHAT I CAN DO FOR YOU</p>
              <h2>
                Services built around
                <span className="gradient-text"> your goals.</span>
              </h2>
              <p className="section-subtitle">
                Digital solutions for businesses ready to build, improve and grow.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="tag-list">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="service-link"
                    href="#contact"
                    aria-label={`Ask about ${service.title}`}
                  >
                    Discuss your project ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                Ideas into
                <span className="gradient-text"> reality.</span>
              </h2>
            </div>
            <p className="projects-intro">
              A showcase of projects and creative concepts across web design,
              e-commerce and digital marketing.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.color}`}>
                  <span className="project-count">PROJECT {project.number}</span>
                  <div className="project-window">
                    <div className="window-dots"><i></i><i></i><i></i></div>
                    <div className="window-heading">Build your<br /><span>online presence.</span></div>
                    <div className="window-line"></div>
                    <div className="window-blocks"><i></i><i></i><i></i></div>
                  </div>
                  <span className="project-art-label">{project.category}</span>
                </div>

                <div className="project-details">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-footer">
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer"
                        className="project-link" aria-label={`View ${project.title}`}>
                        ↗
                      </a>
                    ) : (
                      <a href="#contact" className="project-link"
                        aria-label={`Ask about ${project.title}`}>
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          
        </section>

        <section className="skills-section">
          <div className="section-container skills-inner">
            <div>
              <p className="eyebrow">MY TOOLKIT</p>
              <h2>
                Tools that bring
                <span className="gradient-text"> ideas to life.</span>
              </h2>
            </div>

            <div className="skills-list">
              {["HTML & CSS", "JavaScript", "React", "Next.js", "WordPress","Github","MongoDb","Compass","Mongoose","Typescript",
                "Shopify", "SEO Basics", "Canva", "Social Media Marketing"].map(
                (skill) => <span key={skill}>{skill}</span>
              )}
            </div>
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <div className="contact-card">
            <div className="contact-glow"></div>
            <p className="eyebrow">LET'S CREATE SOMETHING GREAT</p>
            <h2>
              Your next big idea
              <span className="gradient-text"> starts here.</span>
            </h2>
            <p className="contact-description">
              Need a website, an online store or help with your digital presence?
              Let's discuss your project.
            </p>

            <div className="contact-buttons">
              <a className="button button-primary"
                href="mailto:ijazhania34@gmail.com">
                Email Me ↗
              </a>
              <a className="button button-secondary"
                href="https://wa.me/923094346202"
                target="_blank" rel="noreferrer">
                WhatsApp Me ↗
              </a>
            </div>

            <p className="contact-email">ijazhania34@gmail.com</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-brand">HANIA <span>DIGITAL STUDIO</span></a>
        <p>Designed with creativity. Built for growth.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Hania Digital Studio</span>
          <span>DESIGN • DEVELOP • GROW</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
