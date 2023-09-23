import WorkSection from "@/sections/WorkSection";
import ContactSection from "@/sections/ContactSection";
import AboutSection from "@/sections/AboutSection";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="app">
      <Navbar />
      <div className="header">
        <div className="content">
          <section id="about">
            <AboutSection />
          </section>
          <section id="work">
            <div className="subtitle">Projects</div>
            <WorkSection />
          </section>
          <section id="contact">
            <div className="subtitle">Contact</div>
            <ContactSection />
            <p id="legal">Robin Flygare ©{` ${new Date().getFullYear()}`}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
