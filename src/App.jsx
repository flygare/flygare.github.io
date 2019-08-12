import React from 'react';
import './App.scss';
import 'flexboxgrid';
import WorkSection from './sections/WorkSection';
import ContactSection from './sections/ContactSection';
import AboutSection from './sections/AboutSection';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <div className="content">
          <div id="about">
            <AboutSection />
          </div>
          <div id="work">
            <div className="subtitle">Work</div>
            <WorkSection />
          </div>
          <div id="contact">
            <div className="subtitle">Contact</div>
            <ContactSection />
            <p id="legal">
Robin Flygare ©
              {` ${new Date().getFullYear()}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
