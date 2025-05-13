import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Link bileşenini import et
import useNews from "../../store/news";

const News = () => {
  const { t, i18n } = useTranslation();
  const { news, loadNews, error } = useNews();
  const baseURL = "https://testaoron.limsa.uz/";

  useEffect(() => {
    loadNews();
  }, []);

  const currentLang = i18n.language; // Aktif dil

  return (
    <div className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-14">
          {t('latestNews')}
          <p className="text-gray-500 text-sm mt-2">
            {t('latestNewsDesc')}
          </p>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {news?.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`} // Link ile yönlendirme
              className="relative cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={`${baseURL}${item.image}`}
                  alt={item[`title_${currentLang}`]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {item[`title_${currentLang}`]}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item[`description_${currentLang}`]?.slice(0, 150)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
