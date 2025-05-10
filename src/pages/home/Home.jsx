import React, { useEffect, useState } from "react";
import useProductStore from "../../store/productStore";
import backgoundImage from "../../assets/homePage background image/Background.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  const {products , loadProducts} = useProductStore()
  useEffect(()=>{
    loadProducts()
  },[])
  // api dai ma'lumotlar mana shu products da
  console.log(products);
    
  // const { products, loadProducts } = useProductStore();
  const [data, setData] = useState([]);
  const [images, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getData = () => {
    fetch("https://back.aoron.uz/api/product")
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
          src={backgoundImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-1/3 left-[10%] text-white flex flex-col gap-5 justify-start items-start max-w-[90%] md:max-w-[50%]"
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
            Премиальная <br /> мужская одежда
          </motion.p>

          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg md:text-xl text-[#EAEADC]"
          >
            Качественные ткани. Идеальная посадка. <br /> Неподвластный времени
            стиль.
          </motion.p>

          <motion.button
            variants={childVariants}
            className="bg-white p-3 sm:p-4 text-black rounded-xl cursor-pointer flex gap-2 group text-sm sm:text-base"
          >
            <p>Смотреть коллекцию</p>
            <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </motion.button>
        </motion.div>
      </section>
      <div className="container mx-auto">
        <p className="text-center text-4xl font-light mt-15">
          Рекомендуемые товары
        </p>
        <p className="text-center mt-5 text-gray-600">
          Откройте для себя нашу тщательно отобранную коллекцию мужской одежды
          <br />
          премиум-класса, изготовленную из лучших материалов с вниманием к
          деталям.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {data.map((element, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="relative group overflow-hidden cursor-pointer">
                {element.images?.length > 0 && (
                  <img
                    src={`https://back.aoron.uz/${element.images[0]}`}
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
          ))}
        </div>
        <motion.button
          variants={childVariants}
          className="bg-white p-3 sm:p-4 border border-gray-200 mx-auto text-black rounded-xl cursor-pointer flex gap-2 group text-sm sm:text-base"
        >
          <p>Посмотреть все продукты</p>
          <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
        </motion.button>
        <div className="flex items-center justify-between w-full mt-10">
          <p className="text-4xl font-light">Новинки</p>
          <motion.button
            variants={childVariants}
            className="bg-white p-3 sm:p-4 border border-gray-200 text-black rounded-xl cursor-pointer flex gap-2 group text-sm sm:text-base"
          >
            <p>Посмотреть все продукты</p>
            <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {data.slice(0, 4).map((element, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="relative group overflow-hidden cursor-pointer">
                {element.images?.length > 0 && (
                  <img
                    src={`https://back.aoron.uz/${element.images[0]}`}
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
          ))}
        </div>
        <div className="flex items-center justify-between w-full my-20">
          <p className="text-4xl font-light">Распродажа</p>
          <motion.button
            variants={childVariants}
            className="bg-white p-3 sm:p-4 border border-gray-200 text-black rounded-xl cursor-pointer flex gap-2 group text-sm sm:text-base"
          >
            <p>Посмотреть все продукты</p>
            <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
