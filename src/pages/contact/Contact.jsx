import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function Contact() {
  const { t, i18n } = useTranslation();
  const [comments, setComments] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const PostData = (e) => {
    e.preventDefault();

    fetch("https://testaoron.limsa.uz/api/contact-form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        comments: comments,
        email: email,
        name: name,
        phone_number: phone_number,
      }),
    })
      .then((res) => res.json())
      .then((item) => {
        if (item?.success) {
          console.log("Successfully posted");
          setComments("");
          setEmail("");
          setName("");
          setPhone_number("");
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.error("Failed to post", err);
      });
  };

  // sahifani tepaga olib chiqadi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Helmet>
        <title>Suitique | Biz bilan aloqa</title>
        <meta
          name="description"
          content="Suitique bilan bog‘laning. Savollar, takliflar yoki buyurtmalar bo‘yicha biz bilan bevosita aloqa qiling."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Suitique | Biz bilan aloqa" />
        <meta
          property="og:description"
          content="Suitique bilan bog‘laning. Savollar, takliflar yoki buyurtmalar bo‘yicha biz bilan bevosita aloqa qiling."
        />
        <meta property="og:image" content="https://suitique.uz/images/your-og-image.jpg" />
        <meta property="og:url" content="https://suitique.uz/contact" />
      </Helmet>

      <div className="text-center w-full py-22 px-10 bg-[#F4F4F5]">
        <p className="text-4xl font-light">{t("Catalog-Header-text1")}</p>
        <p className="text-lg text-gray-500 mt-4">
          {t("Catalog-Header-text2")}
        </p>
      </div>
      <div
        className="w-full max-w-7xl mx-auto grid grid-cols-2 justify-between m-20 px-10 
                max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center"
      >
        <div className="flex flex-col gap-5 w-full max-lg:mb-10">
          <p className="text-2xl font-semibold">{t("Catalog-form-text1")}</p>
          <div className="flex gap-5 items-center">
            <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
              <MdEmail className="text-2xl" />
            </div>
            <div>
              <p>{t("Catalog-form-email-text")}</p>
              <p className="text-gray-500">msmukhlisss@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p>{t("Catalog-form-phone-text")}</p>
              <p className="text-gray-500">+998887666051</p>
              <p className="text-gray-500">Mon-Fri, 9am-6pm</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
              <IoLocationOutline className="text-2xl" />
            </div>
            <div>
              <p>{t("Catalog-form-address")}</p>
              <p className="text-gray-500">Toshkent,Yunusobod</p>
            </div>
          </div>
        </div>

        <form
          className="w-full flex flex-col justify-center gap-5"
          onSubmit={PostData}
        >
          <p className="text-xl font-semibold">{t("Catalog-form-text2")}</p>
          <div className="flex gap-2 max-lg:flex-col">
            <div className="flex w-full flex-col">
              <label className="text-lg">{t("Catalog-form-name")}</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
                value={name}
                className="border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-lg">{t("Catalog-form-email-text")}</label>
              <input
                type="email"
                className="border border-gray-300 p-3 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-lg">{t("Catalog-form-phone-text")}</label>
            <PhoneInput
              country={"us"}
              value={phone_number}
              onChange={(value) => setPhone_number(value)}
              containerClass="w-full"
              inputClass="!w-full !p-7 !pl-14 !pr-3 !text-base !rounded !border !border-gray-300 !bg-transparent"
              buttonClass="!border-none"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-lg">{t("Catalog-form-message")}</label>
            <textarea
              type="number"
              className="border border-gray-300 p-3 rounded-md"
              onChange={(e) => setComments(e.target.value)}
              required
              value={comments}
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white text-md p-3 w-50 rounded-md cursor-pointer"
          >
            {t("Catalog-form-btn-text")}
          </button>
        </form>
      </div>
      <div className="bg-[#F4F4F5] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-3xl font-light text-center">
            {t("FrequentlyAskedQ")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white rounded-xl p-6 w-full max-w-md flex flex-col items-start">
              <p className="text-lg font-semibold">{t("Catalog-q-1")}</p>
              <p className="text-gray-500 mt-2">{t("Catalog-ans-1")}</p>
            </div>

            <div className="bg-white rounded-xl p-6 w-full max-w-md flex flex-col items-start">
              <p className="text-lg font-semibold">{t("Catalog-q-2")}</p>
              <p className="text-gray-500 mt-2">{t("Catalog-ans-2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
