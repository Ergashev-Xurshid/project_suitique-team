import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 max-w-4xl mt-20">
        <div className="rounded-2xl shadow-lg p-8 md:p-12 space-y-10 bg-white text-neutral-900">
          {/* About */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold">About AORON</h2>
            <p className="text-lg text-neutral-700">
              AORON is a manufacturing brand offering stylish, quality and competitive apparel for B2B partnerships. We have been operating since 1991 and specialize in creating men's and women's clothing, focused on wholesale, retail chains and custom orders for brands and boutiques.
            </p>
            <h3 className="text-xl font-bold text-primary mt-6">Today we develop two directions:</h3>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2">
              <li>Prince - a classic line of men's suits, proven by time and quality;</li>
              <li>AORON - a modern brand with an expanded assortment: from casual wear to accessories and shoes.</li>
            </ul>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* Production */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold">Production Facilities</h2>
            <p className="text-lg text-neutral-700">
              Our company started with a team of 4 people and today employs over 100 people. In the summer of 2025, we are launching a new factory with the ability to scale production - up to 500 employees and 5000+ units per month.
            </p>
            <h3 className="text-xl font-bold text-primary mt-6">We offer:</h3>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2">
              <li>Stable volumes and delivery terms</li>
              <li>Quality control at every stage</li>
              <li>Flexibility to work under private label</li>
              <li>Individual approach to B2B clients</li>
            </ul>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* Why choose us */}
          <section>
            <h3 className="text-xl font-bold text-primary mt-6 mb-6">Why Choose Us</h3>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2">
              <li>More than 30 years of experience in the market of Uzbekistan</li>
              <li>Full cycle of production - from design to packaging</li>
              <li>Ability to create collections for your brand</li>
              <li>Modern models inspired by global trends</li>
              <li>Favorable conditions for distributors, marketplaces and stores</li>
            </ul>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* New assortment */}
          <section>
            <h3 className="text-xl font-bold text-primary mt-8">New Assortment 2025</h3>
            <h2 className="text-xl font-light text-primary mt-2">Men's and women's T-shirts, shirts, shorts</h2>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2 mt-6">
              <li>Men's and women's T-shirts, shirts, shorts</li>
              <li>Shoes, bags, belts, accessories</li>
              <li>Custom tailoring</li>
              <li>Collaborations and capsule collections to your specifications</li>
            </ul>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* Cooperation */}
          <section>
            <h3 className="text-xl font-bold text-primary mt-8">Ready for cooperation</h3>
            <h2 className="text-xl font-light text-primary mt-2">We are open to cooperation with:</h2>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2 mt-6">
              <li>wholesale buyers</li>
              <li>clothing stores</li>
              <li>marketplaces</li>
              <li>international buyers</li>
              <li>brands willing to produce collections under their name</li>
            </ul>
            <hr className="border-t border-neutral-300 mt-6 mb-4" />
            <p className="text-lg text-neutral-900 mt-2">📞 Contact us to get catalog, samples</p>
          </section>
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-16 bg-black text-white mt-15">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">Our Mission</h2>
            <p className="text-xl font-light leading-relaxed">
              To create exceptional menswear that empowers men to look and feel their best, while maintaining a commitment to quality, sustainability, and ethical practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 px-[5px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 transition-all hover:bg-teal-200/20 rounded-lg">
              <div className="w-12 h-12 mx-auto bg-teal-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Quality First</h3>
              <p className="text-muted-foreground">We never compromise on quality. From fabrics to construction, every element is carefully chosen for excellence.</p>
            </div>

            <div className="text-center space-y-4 p-6 transition-all hover:bg-teal-200/20 rounded-lg">
              <div className="w-12 h-12 mx-auto bg-teal-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Sustainability</h3>
              <p className="text-muted-foreground">We're committed to reducing our environmental impact through responsible sourcing and sustainable practices.</p>
            </div>
            <div className="text-center space-y-4 p-6 transition-all hover:bg-teal-200/20 rounded-lg">
              <div className="w-12 h-12 mx-auto bg-teal-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Innovation</h3> {/* Burada başlığı düzelttim */}
              <p className="text-muted-foreground">We continually strive to innovate and integrate the latest trends in fashion and technology into our designs.</p> {/* Burada açıklamayı düzelttim */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-10 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Üye 1 */}
            <div className="text-center space-y-3">
              <div className="aspect-square overflow-hidden rounded-full max-w-[200px] mx-auto">
                <img
                  src="https://back.aoron.uz/0d6da4f2-78cf-4458-9fc6-7c98783ed79e.jpeg"
                  className="w-full h-full object-cover"
                  alt="Muhammed Aziz"
                />
              </div>
              <h3 className="font-medium text-lg">Muhammed Aziz</h3>
              <p className="text-muted-foreground">Founder & Creative Director</p>
            </div>

            {/* Üye 2 */}
            <div className="text-center space-y-3">
              <div className="aspect-square overflow-hidden rounded-full max-w-[200px] mx-auto">
                <img
                  src="https://back.aoron.uz/bf22c304-3c26-404c-adee-fa04945aaa19.png"
                  className="w-full h-full object-cover"
                  alt="Abdulloh Hamid"
                />
              </div>
              <h3 className="font-medium text-lg">Abdulloh Hamid</h3>
              <p className="text-muted-foreground">Head of Design</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
