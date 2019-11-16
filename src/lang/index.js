import Vue from 'vue'
import Cookies from 'js-cookie'
import VueI18n from 'vue-i18n'
import twLocale from './zh_tw'
import enLocale from './en'
import jpLocale from './jp'
// element ui的locale設置
import locale from 'element-ui/lib/locale'

Vue.use(VueI18n)
// element ui 所使用的多語系切換
locale.i18n((key, value) => i18n.t(key, value)) // i18n.t(key, value) = $t(key, value)

const messages = {
  en: {
    ...enLocale
  },
  zh_tw: {
    ...twLocale
  },
  jp: {
    ...jpLocale
  }
}

const languageKey = 'language'
const chooseLanguage = Cookies.get('language')

export const getLanguage = () => {
  Cookies.get(languageKey)
  if (chooseLanguage) { return chooseLanguage }

  // 如果沒有選擇任何一項語言
  const language = (navigator.language).toLocaleLowerCase() // 瀏覽器回傳value統一為小寫
  const locales = Object.keys(messages) // (en, zh_tw, jp)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh_tw' // 預設中文
}

export const setLanguage = (language) => {
  i18n.locale = language
  Cookies.set(languageKey, language)
} 

const i18n = new VueI18n({
  // set locale
  // options : en | zh | jp
  locale: getLanguage(),
  messages,
  silentTranslationWarn: true
})

export default i18n
