import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://testaoron.limsa.uz/api/product?page=1&limit=10&min_sell=2")
      .then((response) => response.json())
      .then((item) => {
        setData(item?.data.products);
      })
      .catch((err) => {
        console.log("Ошибка при получении данных:", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // sahifani tepaga olib chiqadi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className="relative h-screen flex items-center overflow-hidden mt-5">
        <img
          src="/images/home_bg-img.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-1/3 left-[12%] xl:left-[3%] md:left-[12%] lg:left-[4%] max-sm:left-[5%] right-0 text-white flex flex-col gap-5 justify-start items-start w-full"
        >
          <motion.p
            variants={childVariants}
            className="p-2 bg-white/40 backdrop-blur-md text-xs md:text-sm"
          >
            SPRING/SUMMER 2025
          </motion.p>

          <motion.p
            variants={childVariants}
            className="text-7xl max-sm:text-5xl max-md:text-6xl max-lg:text-7xl font-light leading-tight"
          >
            {t("homeTitle")}
          </motion.p>

          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg md:text-xl text-[#EAEADC]"
          >
            {t("homeQuality")}
          </motion.p>

          <Link to="/catalog">
            <motion.button
              variants={childVariants}
              className="bg-white p-2 sm:p-4 text-black rounded-xl cursor-pointer flex items-center gap-2 group text-sm sm:text-base"
            >
              <p>{t("exploreCollection")}</p>
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <p className="text-center text-4xl font-light mt-15">
          {t("featuredProducts")}
        </p>
        <p className="text-center mt-5 text-gray-600">
          {t("featuredProductsSubtitle")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {data.map((element, index) => (
            <Link key={index} to={`/product/${element.id}`}>
              <div className="flex flex-col gap-2">
                <div className="relative group overflow-hidden cursor-pointer">
                  {element.images?.length > 0 && (
                    <img
                      loading="lazy"
                      src={`https://testaoron.limsa.uz/${element.images[0]}`}
                      alt="image"
                      className="w-full h-auto transform transition-transform duration-500 group-hover:scale-150"
                    />
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{element.title_en}</p>
                  <p>{`$${element.price}`}</p>
                </div>
                <p className="text-gray-500">
                  {element.description_en.length > 99
                    ? element.description_en.slice(
                      0,
                      element.description_en.lastIndexOf(" ", 100)
                    ) + "..."
                    : element.description_en}
                </p>
                <div className="flex gap-2 mt-2">
                  {element.colors?.map((color, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full border"
                      style={{ backgroundColor: color.color_en }}
                      title={color.color_en}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/catalog">
          <motion.button
            variants={childVariants}
            className="bg-white p-3 sm:p-4 border border-gray-200 mx-auto text-black rounded-xl cursor-pointer flex items-center gap-2 group text-sm sm:text-base"
          >
            {t("viewAllProducts")}
            <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </motion.button>
        </Link>
        <div className="flex items-center justify-between w-full mt-10">
          <p className="text-4xl font-light">{t("newArrivals")}</p>
          <Link to="/catalog">
            <motion.button
              variants={childVariants}
              className="bg-white p-3 sm:p-4 border border-gray-200 text-black rounded-xl cursor-pointer flex items-center gap-2 group text-sm sm:text-base"
            >
              {t("viewAllProducts")}
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {data.slice(0, 4).map((element, index) => (
            <Link key={index} to={`/product/${element.id}`}>
              <div className="flex flex-col gap-2">
                <div className="relative group overflow-hidden cursor-pointer">
                  {element.images?.length > 0 && (
                    <img
                      loading="lazy"
                      src={`https://testaoron.limsa.uz/${element.images[0]}`}
                      alt="image"
                      className="w-full h-auto transform transition-transform duration-500 group-hover:scale-150"
                    />
                  )}
                  <p className="bg-black px-3 py-1 text-sm text-white absolute top-2">
                    NEW
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{element.title_en}</p>
                  <p>{`$${element.price}`}</p>
                </div>
                <p className="text-gray-500">
                  {element.description_en.length > 99
                    ? element.description_en.slice(
                      0,
                      element.description_en.lastIndexOf(" ", 100)
                    ) + "..."
                    : element.description_en}
                </p>
                <div className="flex gap-2 mt-2">
                  {element.colors?.map((color, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full border"
                      style={{ backgroundColor: color.color_en }}
                      title={color.color_en}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between w-full my-20">
          <p className="text-4xl font-light">{t("sale")}</p>
          <Link to="/catalog">
            <motion.button
              variants={childVariants}
              className="bg-white p-3 sm:p-4 border border-gray-200 text-black rounded-xl cursor-pointer flex items-center gap-2 group text-sm sm:text-base"
            >
              {t("viewAllProducts")}
              <FaArrowRight className="flex transform transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
