import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const NewsDetail = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const [currentNews, setCurrentNews] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`https://back.aoron.uz/api/news/${id}`);
                const json = await res.json();
                setCurrentNews(json.data); // API direkt { data: {...} } 
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, [id]);

    if (!currentNews) return <div>Loading...</div>;


    return (
        <div className="py-20 max-w-4xl mx-auto px-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
            >
                ← Orqaga qaytish
            </button>


            <h1 className="text-3xl font-bold mb-4">{currentNews[`title_${i18n.language}`]}</h1>
            <img
                loading='lazy'
                src={`https://back.aoron.uz/${currentNews.image}`}
                alt="news"
                className="w-full rounded-xl mb-6"
            />
            <p className="text-gray-700 whitespace-pre-line">
                {currentNews[`description_${i18n.language}`]}
            </p>
        </div>
    );
};

export default NewsDetail;
