import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductStore from "../../store/productStore";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";



function ProductDetail() {


  const { t } = useTranslation()


  const { id } = useParams();
  const [data, setData] = useState([]);




  const { products, loadProducts } = useProductStore()

  useEffect(() => {
    loadProducts()
  }, [])

  console.log("products :", products);



  useEffect(() => {
    fetch(`https://back.aoron.uz/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, [id]);
  console.log(" data ", data);




  return (
    <section className="container mx-auto px-10 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="aspect-square bg-secondary/20 overflow-hidden">
            {data.images && data.images.length > 0 && (
              <img
                src={`https://back.aoron.uz/${data.images[0]}`}
                alt="Asosiy rasm"
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            )}
          </div>
          <div className="flex space-x-2">
            <button className="aspect-square w-20 bg-secondary/20 p-1 transition-all ring-2 ring-primary">
              <img
                src={`https://back.aoron.uz/${data.images[0]}`}
                alt="Asosiy rasm"
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            </button>
            <button className="aspect-square w-20 bg-secondary/20 p-1 transition-all ring-2 ring-primary">
             <img
                src={`https://back.aoron.uz/${data.images[1]}`}
                alt="Asosiy rasm"
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-light mb-4">Мужской костюм ID1020</h1>
          <div className="flex items-baseline space-x-3">
            <span className="text-xl md:text-2xl font-medium">
              $43
            </span>
          </div>
          <p className="text-muted-foreground">
            Предлагаем мужской костюм. Этот стильный и элегантный костюм идеально подходит для бизнес- и корпоративных закупок, а также для магазинов и бутиков. Костюм сочетает в себе утонченную классику и современную моду, обеспечивая комфорт и стиль для мужчин, ценящих высокое качество.
            Основные характеристики:
            Цвет: Темно-синий
            Крой: Классический, с двойным рядом пуговиц
            Размеры: 44, 46, 48, 50, 52
          </p>
          <div>
            <h3 className="text-sm font-medium mb-1">{t("Material")}</h3>
            <p className="text-sm text-muted-foreground">Вискоза: 100%</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">{t("Size")}</h3>
            <div className="flex flex-wrap gap-2">
              <p className="min-w-[3rem] p-2 text-sm border rounded-md transition-all hover:border-primary/50 hover:bg-primary hover:text-white">44-52</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">{t("Color")}</h3>
            <div className="flex items-center space-x-1 mt-2">
              <p className="w-7 h-7 rounded-full bg-black border hover:ring-2 hover:ring-primary"></p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">{t("Quantity")}</h3>
            <div className="flex items-center border border-input rounded-md w-32">
              <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-50">-</button>
              <input type="text" name="" id="" className="w-12 h-10 text-center border-none focus:outline-none" />
              <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground">+</button>
            </div>
          </div>
          <button className="w-full bg-black hover:bg-black/90 cursor-pointer py-4 rounded-[12px] text-white">{t("add-card-btn")}</button>
          <div className="border-t border-border pt-4 space-y-4">
            <div>
              <button className="flex justify-between items-center w-full py-2">
                <h3 className="font-medium">Product Details</h3>
                <IoIosArrowUp />
              </button>
              {/* open modal */}
              <div className="py-3 text-sm text-muted-foreground animate-accordion-down">
                <p>This contains suits Вискоза: 100%, ensuring both comfort and durability. Designed with attention to detail, it features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Regular fit for everyday comfort</li>
                  <li>Regular fit for everyday comfort</li>
                  <li>Regular fit for everyday comfort</li>
                  <li>Regular fit for everyday comfort</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex items-center justify-between w-full mt-10">
          <p className="text-4xl font-light">{t("product-title")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {products.slice(0, 4).map((element, index) => (
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
      </div>
    </section>
  );
}

export default ProductDetail;

