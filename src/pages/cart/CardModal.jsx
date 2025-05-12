import React from 'react'
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
function CardModal() {
  return (
    <div className='fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-y-auto'>
      <div className='relative bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar'>
        <button className='absolute top-2 right-2 text-white bg-red-500 px-2 py-[2px] cursor-pointer rounded-full'>x</button>
        <form>
          <div className='space-y-4'>
            <h3 className='text-xl font-bold mb-4'>Contact Information</h3>
            <div>
              <label className='block text-sm font-medium'>Name</label>
              <input type="text" className='w-full p-2 border border-gray-300 rounded mb-2' />
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
            <div>
              <label className='block text-sm font-medium'>Email</label>
              <input type="email" className='w-full p-2 border border-gray-300 rounded mb-2' />
            </div>
            //country
            <div>
              <label className='block text-sm font-medium'>City</label>
              <input type="text" className='w-full p-2 border border-gray-300 rounded mb-2' />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-lg">what</label>
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default CardModal