import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { BsCircle } from "react-icons/bs";
import useTeamSection from "../../store/teamSection";


const About = () => {

  // Team Section
  const { t, i18n } = useTranslation();
  const { teamSection, loadTeamSection, error } = useTeamSection();
  const baseURL = "https://testaoron.limsa.uz/";

  useEffect(() => {
    loadTeamSection();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 max-w-4xl mt-20">
        <div className="rounded-2xl shadow-lg p-8 md:p-12 space-y-10 bg-white text-neutral-900">
          {/* About */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold">{t("about.title")}</h2>
            <p className="text-lg text-neutral-700">{t("about.description")}</p>
            <h3 className="text-xl font-bold text-primary mt-6">{t("about.subtitle")}</h3>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2">
              <li>{t("about.point1")}</li>
              <li>{t("about.point2")}</li>
            </ul>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* Production */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold">{t("production.title")}</h2>
            <p className="text-lg text-neutral-700">{t("production.description")}</p>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* Why choose us */}
          <section>
            <h3 className="text-xl font-bold text-primary mt-6 mb-6">{t("why.title")}</h3>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2">
              <li>{t("why.1")}</li>
              <li>{t("why.2")}</li>
              <li>{t("why.3")}</li>
              <li>{t("why.4")}</li>
              <li>{t("why.5")}</li>
            </ul>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* New assortment */}
          <section>
            <h3 className="text-xl font-bold text-primary mt-8">{t("assortment.title")}</h3>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2 mt-6">
              <li>{t("assortment.1")}</li>
              <li>{t("assortment.2")}</li>
              <li>{t("assortment.3")}</li>
              <li>{t("assortment.4")}</li>
            </ul>
          </section>

          <hr className="border-t border-neutral-300" />

          {/* Cooperation */}
          <section>
            <h3 className="text-xl font-bold text-primary mt-8">{t("cooperation.title")}</h3>
            <ul className="list-disc pl-6 text-neutral-800 space-y-2 mt-6">
              <li>{t("cooperation.1")}</li>
              <li>{t("cooperation.2")}</li>
              <li>{t("cooperation.3")}</li>
              <li>{t("cooperation.4")}</li>
              <li>{t("cooperation.5")}</li>
            </ul>
            <hr className="border-t border-neutral-300 mt-6 mb-4" />
            <p className="text-lg text-neutral-900 mt-2">{t("contact")}</p>
          </section>
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-16 bg-black text-white mt-15">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">{t("mission.title")}</h2>
            <p className="text-xl font-light leading-relaxed">{t("mission.text")}</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 px-[5px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-10 text-center">{t("values.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center space-y-4 p-6 transition-all hover:bg-gray-300/10 rounded-lg">
              <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <BsCircle className="w-6 h-6 text-gray-950" />
              </div>
              <h3 className="text-lg font-medium">{t("values.quality")}</h3>
              <p className="text-muted-foreground">{t("values.quality.text")}</p>
            </div>

            <div className="text-center space-y-4 p-6 transition-all hover:bg-gray-300/10 rounded-lg">
              <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <BsCircle className="w-6 h-6 text-gray-950" />
              </div>
              <h3 className="text-lg font-medium">{t("values.sustainability")}</h3>
              <p className="text-muted-foreground">{t("values.sustainability.text")}</p>
            </div>

            <div className="text-center space-y-4 p-6 transition-all hover:bg-gray-300/10 rounded-lg">
              <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <BsCircle className="w-6 h-6 text-gray-950" />
              </div>
              <h3 className="text-lg font-medium">{t("values.ethical")}</h3>
              <p className="text-muted-foreground">{t("values.ethical.text")}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-10 text-center">{t("team.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamSection.map((member) => {
              const position =
                i18n.language === "ru"
                  ? member.position_ru
                  : i18n.language === "de"
                    ? member.position_de
                    : member.position_en;

              return (
                <div className="text-center space-y-3" key={member.id}>
                  <div className="aspect-square overflow-hidden rounded-full max-w-[200px] mx-auto">
                    <img
                      loading="lazy"
                      src={baseURL + member.image}
                      className="w-full h-full object-cover"
                      alt={member.full_name}
                    />
                  </div>
                  <h3 className="font-medium text-lg">{member.full_name}</h3>
                  <p className="text-neutral-400">{position}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
