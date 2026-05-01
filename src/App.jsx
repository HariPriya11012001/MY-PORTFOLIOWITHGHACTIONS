import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Priya 👋</h1>
        <p>Puppet Developer | Python Automation Engineer</p>
      </section>

      {/* About */}
      <section className="card">
        <h2>About Me</h2>
        <p>
          I work on automation using Puppet and Python, building solutions like 
          auto ticket creation systems and security scanning tools for enterprise environments.
        </p>
      </section>

      {/* Projects */}
      <section className="card">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <h3>Puppet Auto Ticket System</h3>
            <p>Automated ticket creation based on Puppet failure reports.</p>
          </div>

          <div className="project">
            <h3>SpotCop Scanner</h3>
            <p>Scans servers for clear text passwords and open shares.</p>
          </div>

          <div className="project">
            <h3>Windows Patch Automation</h3>
            <p>Automated patching using SCCM for enterprise systems.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>Python</span>
          <span>Puppet</span>
          <span>AWS</span>
          <span>Linux</span>
          <span>Git</span>
        </div>
      </section>

      {/* Contact */}
      <section className="card">
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Priya</p>
      </footer>

    </div>
  );
}