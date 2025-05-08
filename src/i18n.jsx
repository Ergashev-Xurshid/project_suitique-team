import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import laungageDetector from "i18next-browser-languagedetector";

import enTranslation from "./translations/en.json"
import deTranslation from "./translations/de.json"
import ruTranslation from "./translations/ru.json"


const laungage = localStorage.getItem("i18nextLng") || "en"


i18n
.use(laungageDetector)
.use(initReactI18next)
.init({
  fallback:"en",
  lng:laungage,
  debug:true,
  resources:{
    en:{translation:enTranslation},
    de:{translation:deTranslation},
    ru:{translation:ruTranslation},
  }

})

export default i18n