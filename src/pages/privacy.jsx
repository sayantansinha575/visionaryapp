import React, { useState, useEffect } from "react";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  // Automatic Highlight on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: "introduction", title: "Introduction & Scope" },
    { id: "info-collect", title: "Comprehensive Data Collection" },
    { id: "how-use", title: "Purpose of Data Processing" },
    { id: "data-sharing", title: "Third-Party Disclosures" },
    { id: "data-security", title: "Security Protocols" },
    { id: "children-privacy", title: "Protection of Minors" },
    { id: "data-retention", title: "Data Storage & Retention" },
    { id: "user-rights", title: "Your Privacy Rights" },
    { id: "updates", title: "Policy Modifications" },
    { id: "contact", title: "Inquiries & Support" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden md:block w-80 sticky top-0 h-screen overflow-y-auto border-r border-gray-100 p-8 pt-20">
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Privacy Visionary</h3>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-[14px] leading-tight w-full transition-all duration-200 border-l-2 pl-4 py-1 hover:text-blue-600 ${
                      activeSection === section.id
                        ? "text-black font-semibold border-black"
                        : "text-gray-500 border-transparent hover:border-gray-200"
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 md:p-20 max-w-4xl leading-relaxed">
          
          {/* 1. Introduction */}
          <section id="introduction" className="mb-24 pt-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Privacy Policy</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-10">
              <span className="bg-blue-50 text-black px-3 py-1 rounded-full font-medium ">Visionary AI Platform</span>
              <span>Updated: March 9, 2026</span>
            </div>
            <p className="text-xl text-gray-600 mb-6 font-light">
              At Visionary, we treat your data as a sacred trust. Our educational mission is built on the belief that student privacy is a fundamental human right.
            </p>
            <p className="text-gray-600 mb-8">
              This policy covers all interactions within our ecosystem, including our web platform, mobile applications, and AI-powered tutoring tools. By using Visionary, you entrust us with your academic journey; we reciprocate by providing a secure, transparent, and user-centric data environment.
            </p>
          </section>

          {/* 2. Data Collection */}
          <section id="info-collect" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Data Collection</h2>
            <div className="space-y-8 text-gray-600">
              <p>We utilize advanced data collection methods to facilitate "High-Definition" learning personalization. The data points we collect include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Registration Data</h4>
                  <p className="text-sm italic">Name, email, verified phone, institutional affiliation, and academic level.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Usage Telemetry</h4>
                  <p className="text-sm italic">Browser type, IP addresses, session duration, and device hardware specifications.</p>
                </div>
              </div>
              <p>Additionally, we collect **User-Generated Instructional Materials** (PDFs, handwritten images, and voice queries) which our AI interprets to provide instant academic relief.</p>
            </div>
          </section>

          {/* 3. Purpose */}
          <section id="how-use" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Purpose of Data Processing</h2>
            <p className="text-gray-600 mb-6">Our processing logic is strictly tied to educational outcomes. We do not engage in behavioral advertising or data commercialization.</p>
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3">
                <span>Algorithmic Optimization : Refining AI models to better understand diverse student accents and handwriting styles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Custom Pedagogy : Adapting the difficulty of practice questions based on real-time performance metrics.</span>
              </li>
            </ul>
          </section>

          {/* 4. Data Sharing */}
          <section id="data-sharing" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Third-Party Disclosures</h2>
            <p className="text-gray-600 mb-6">Visionary only shares data with infrastructure partners who adhere to the **SOC 2 Type II** or higher security standards. These include:</p>
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-sm text-gray-700">
              <p className="mb-2 font-bold">Authorized Sub-processors:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Cloud Hosting: Amazon Web Services (AWS) and Google Cloud Platform (GCP).</li>
                <li>Encryption Management: HashiCorp Vault.</li>
                <li>Analytics: Privacy-first telemetry via Mixpanel.</li>
              </ul>
            </div>
          </section>

          {/* 5. Security */}
          <section id="data-security" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security Protocols</h2>
            <p className="text-gray-600 mb-6">We employ a "Defense-in-Depth" strategy. This means that if one layer of security fails, others are in place to block unauthorized access.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-2xl font-black text-gray-200 mb-2">AES-256</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">At-Rest Encryption</p>
              </div>
              <div className="text-center p-4 border-x border-gray-100">
                <div className="text-2xl font-black text-gray-200 mb-2">TLS 1.3</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">In-Transit Security</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-black text-gray-200 mb-2">2FA</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Identity Verification</p>
              </div>
            </div>
          </section>

          {/* 6. Minors */}
          <section id="children-privacy" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Protection of Minors</h2>
            <p className="text-gray-600 leading-relaxed">
              For users under the age of 13 (or 16 in the EU/UK), Visionary strictly follows COPPA and GDPR-K guidelines. We do not collect geolocation or biometric data from minors. Account creation for younger students is facilitated through teacher-managed portals or parental verification loops.
            </p>
          </section>

          {/* 7. Retention */}
          <section id="data-retention" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Storage & Retention</h2>
            <p className="text-gray-600 mb-6">We do not keep your data forever. We adhere to a strict retention schedule based on account activity:</p>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 font-bold">Data Type</th>
                  <th className="py-3 font-bold">Retention Period</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr className="border-b border-gray-50">
                  <td className="py-4">Active Learning Content</td>
                  <td className="py-4 font-mono text-black">Duration of Account Life</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-4">Session Logs</td>
                  <td className="py-4 font-mono text-black">90 Days</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-4">Deleted Account Data</td>
                  <td className="py-4 font-mono text-black">Permanent Wipe after 30 Days</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 8. User Rights */}
          <section id="user-rights" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-6">Regardless of your geography, Visionary grants all users the following "Digital Sovereignty" rights:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-gray-50">**Right to Access:** Request a copy of all data we hold about you in a machine-readable format.</div>
              <div className="p-4 rounded-lg bg-gray-50">**Right to Erasure:** Request the permanent deletion of your learning profile and uploads.</div>
              <div className="p-4 rounded-lg bg-gray-50">**Right to Rectification:** Correct inaccuracies in your academic metadata.</div>
              <div className="p-4 rounded-lg bg-gray-50">**Right to Object:** Opt-out of non-essential AI model training.</div>
            </div>
          </section>

          {/* 9. Updates */}
          <section id="updates" className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Policy Modifications</h2>
            <p className="text-gray-600">
              Technology evolves, and so does our privacy framework. If we make material changes to how we handle personal data, we will notify you via a high-visibility dashboard banner and an email notification 14 days before the changes take effect.
            </p>
          </section>

          {/* 10. Contact */}
          <section id="contact" className="mb-32">
            <div className="bg-black text-white p-12 rounded-[2.5rem] relative overflow-hidden">
              <h2 className="text-4xl font-bold mb-4">Questions?</h2>
              <p className="text-blue-100 mb-8 max-w-sm">Reach out to our Data Protection Officer (DPO) for any privacy-specific inquiries.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:support@visionary.org.in" className="bg-white text-black px-8 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition-colors">Email DPO</a>
                <button onClick={() => window.print()} className="border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">Print Copy</button>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Privacy;