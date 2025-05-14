import React, { useState } from 'react'
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';

function CardModal({ setOpenModal }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [comments, setComments] = useState("");

  const PostData = (e) => {
    e.preventDefault();

    fetch("https://testaoron.limsa.uz/api/contact-form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        comments,
        email,
        name,
        phone_number,
      }),
    })
      .then((res) => res.json())
      .then((item) => {
        if (item?.success) {
          toast.success("Successfully posted");
          setComments("");
          setEmail("");
          setName("");
          setPhone_number("");
          setOpenModal(false);
        } else {
          toast.error("Error occurred");
        }
      })
      .catch((err) => {
        toast.error("Failed to post");
        console.error(err);
      });
  };
  // sahifani tepaga olib chiqadi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
      >
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-2 right-2 text-white bg-red-500 px-2 py-2 cursor-pointer rounded-full"
        >
          <IoClose />
        </button>

        <form onSubmit={PostData}>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">{t("card-modal-title")}</h3>

            <div>
              <label className="block text-sm font-medium">{t("Catalog-form-name")}</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm font-medium">{t("Catalog-form-phone-text")}</label>
              <PhoneInput
                country={"us"}
                value={phone_number}
                onChange={(value) => setPhone_number(value)}
                containerClass="w-full"
                inputClass="!w-full !p-3 !pl-14 !pr-3 !text-base !rounded !border !border-gray-300 !bg-transparent"
                buttonClass="!border-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{t("Catalog-form-email-text")}</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">{t("City")}</label>
              <input
                onChange={(e) => setComments(e.target.value)}
                value={comments}
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </div>

            <button
              type="submit"
              className="bg-black py-2 px-4 rounded-lg w-full mt-6 text-white cursor-pointer hover:bg-black/90"
            >
              {t("card-modal-btn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardModal;
