import React, { useEffect, useState } from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { SlSocialFacebook } from 'react-icons/sl';
import { LuTwitter } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { footerItem } from '../utils/consttanta';
import { FaArrowRight } from 'react-icons/fa6';
import useCategoryStore from '../store/categoryStore';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

function Footer() {
  const { categories, loadCategories } = useCategoryStore();

  useEffect(() => {
    loadCategories();
  }, []);

  //send email
  const [email, setEmail] = useState('');
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://testaoron.limsa.uz/api/email-bot/send-message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success('Seng email');
        setEmail('');
      }
    } catch (error) {
      toast.error("Xatolik: ma'lumot yuborilmadi ");
    }
  };

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section className='container mx-auto px-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
        <div className='space-y-4'>
          <img
            loading='lazy'
            src='/images/logo-st.png'
            alt='logo'
            className='w-20 mb-4'
          />
          <p className='text-sm text-gray-500'>{t('footer_logo-text')}</p>
          <div className='flex space-x-4'>
            <Link
              to='https://www.instagram.com/'
              target='_blank'
              className='p-2 rounded-full hover:bg-background transition-colors'
            >
              <IoLogoInstagram />
            </Link>
            <Link
              to='https://www.facebook.com/'
              target='_blank'
              className='p-2 rounded-full hover:bg-background transition-colors'
            >
              <SlSocialFacebook />
            </Link>
            <Link
              to='https://x.com/i/flow/login'
              target='_blank'
              className='p-2 rounded-full hover:bg-background transition-colors'
            >
              <LuTwitter />
            </Link>
          </div>
        </div>
        <div className='space-y-4'>
          <h4 className='font-medium text-sm uppercase tracking-wider'>
            {t('shop')}
          </h4>
          <nav className='flex flex-col space-y-2'>
            {categories.map((data, i) => (
              <Link
                key={i}
                to={`/catalog?category=${encodeURIComponent(
                  data[`name_${currentLang}`]
                )}`}
                className='text-sm text-gray-500 hover:text-gray-400 transition-colors'
              >
                {data[`name_${currentLang}`]}
              </Link>
            ))}
          </nav>
        </div>
        <div className='space-y-4'>
          <h4 className='font-medium text-sm uppercase tracking-wider'>
            {t('company')}
          </h4>
          <nav className='flex flex-col space-y-2'>
            {footerItem.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className='text-sm text-gray-500 hover:text-gray-400 transition-colors'
              >
                {t(item.item)}
              </Link>
            ))}
          </nav>
        </div>
        <div className='space-y-4'>
          <h4 className='font-medium text-sm uppercase tracking-wider'>
            {t('subscribe-title')}
          </h4>
          <p className='text-sm text-gray-500'>{t('subscribe-text')}</p>
          <div>
            <form className='flex' onSubmit={sendEmail}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                required
                placeholder={t('email')}
                className='w-full px-3 py-2 text-[15px]  border border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"'
              />
              <button className='flex items-center justify-center bg-black text-white px-4 py-2 rounded-r-md cursor-pointer  transition-colors'>
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='pt-8 border-t border-gray-200'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-xs text-gray-500'>{t('footer_bottom-text')}</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
