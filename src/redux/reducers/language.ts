import i18n from 'i18next'
import { ADD_NEWLAGNUAGE, CHANGE_LANGUAGE } from '../actions/language'

interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" }
  ]
}

export default (state = defaultState, action: any) => {
  const { languageList } = state
  const { type, data } = action
  switch (type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(data)
      return { ...state, language: data }
    case ADD_NEWLAGNUAGE:
      return { ...state, languageList: [...languageList, data] }
    default:
      return state;
  }
}
