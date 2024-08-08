import { createI18n } from 'vue-i18n'

// 本地语言包
import en from './en'
import zh from './zh'
import es from './es'
import th from './th'
import ja from './ja'
import ko from './ko'
import ar from './ar'

function siphonI18n(prefix = 'zh') {
  return Object.fromEntries(
    Object.entries(import.meta.glob('./**/*.ts', { eager: true })).map(([key, value]: any) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1]
      return [matched, value.default]
    })
  )[prefix]
}

const messages = {
  zh: {
    ...zh,
    ...siphonI18n('zh')
  },
  en: {
    ...en,
    ...siphonI18n('en')
  },
  es: {
    ...es,
    ...siphonI18n('es')
  },
  th: {
    ...th,
    ...siphonI18n('th')
  },
  ja: {
    ...ja,
    ...siphonI18n('ja')
  },
  ko: {
    ...ko,
    ...siphonI18n('ko')
  },
  ar: {
    ...ar,
    ...siphonI18n('ar')
  }
}

const i18n = createI18n({
  legacy: false, // 如果想在composition api中使用需要设置为false
  locale: sessionStorage.getItem('locale') || 'en', // 设置语言
  messages: messages,
  globalInjection: true // 如果设置true, $t() 函数将注册到全局
})

export default i18n
