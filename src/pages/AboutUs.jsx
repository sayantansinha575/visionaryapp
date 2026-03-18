import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 product-sans">
        About Visionary
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Building the Future of Intelligent Learning
          </h2>
          <p className="text-xl leading-relaxed text-gray-800">
            Visionary is an AI-powered learning and creation platform designed
            to help people truly understand what they study and build real
            skills for the future.
          </p>
          <p className="mt-6">
            Traditional education platforms often focus on delivering content —
            videos, notes, or lectures. But learning is more than consuming
            information. Real learning happens when students can see concepts
            clearly, ask questions freely, practice actively, and apply what
            they learn.
          </p>
          <p className="font-medium text-gray-900 mt-4">
            Visionary was built to enable exactly that.
          </p>
          <p className="mt-4">
            Our platform combines advanced artificial intelligence, visual
            learning technology, and a no-code building environment to create an
            experience where learning becomes interactive, adaptive, and deeply
            personalized.
          </p>
        </section>

        <section className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p>
            Our mission is to make deep understanding accessible to everyone,
            regardless of language, location, or financial background.
          </p>
          <p className="mt-4">
            We believe education should not depend on access to expensive
            coaching or limited classroom resources. By using AI, we aim to
            provide every learner with a personal teaching system that adapts to
            their pace and learning style.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Visionary Does
          </h2>
          <p className="mb-8 font-medium">
            Visionary brings together two powerful capabilities into one unified
            platform.
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Intelligent Learning Platform
              </h3>
              <p className="mb-4">Our AI teaching system helps learners:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Understand concepts through visual explanations and
                    interactive lessons
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Ask questions anytime and receive instant explanations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Practice adaptive questions tailored to their level
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Track progress and identify weak areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Learn in their preferred language</span>
                </li>
              </ul>
              <p className="mt-6 text-sm italic text-gray-600">
                Unlike static course platforms, Visionary’s AI continuously
                adapts to each student’s learning journey.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                No-Code AI Building Platform
              </h3>
              <p>
                Visionary also enables students, educators, and creators to
                build intelligent tools and projects using AI — without writing
                code.
              </p>
              <p className="mt-4">
                Users can create AI-powered systems, automate workflows, and
                build learning projects directly inside the platform.
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                This shifts education from passive consumption to active
                creation.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Designed for the Indian Education Ecosystem
          </h2>
          <p>
            Visionary is built specifically with the Indian learning ecosystem
            in mind. The platform supports multiple education boards including:
          </p>
          <div className="flex flex-wrap gap-3 mt-4 mb-6">
            {["CBSE", "ICSE", "State Boards"].map((board) => (
              <span
                key={board}
                className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium"
              >
                {board}
              </span>
            ))}
          </div>
          <p>
            We also focus on regional language accessibility, helping learners
            across India study complex subjects in the language they are most
            comfortable with.
          </p>
        </section>

        <section className="bg-gray-900 text-white p-10 rounded-[2.5rem] mt-20">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-300 mb-6">
            Our vision is to build India’s most trusted intelligent learning
            ecosystem — a platform people rely on every day to learn, teach,
            build, and grow.
          </p>
          <p className="text-lg text-gray-300 font-medium">
            By combining AI technology with education infrastructure, Visionary
            aims to create a future where every learner has access to a
            personalized digital teacher.
          </p>
        </section>
      </div>
    </div>
  );
}
