export const CHANGE_LANGUAGE = "change-laguage"
export const ADD_NEWLAGNUAGE = "add-newlanguage"

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE
  data: 'zh' | 'en'
}

interface AddLanguageAction {
  type: typeof ADD_NEWLAGNUAGE
  data: { name: string, code: string }
}

export type LanguageActionTypes = AddLanguageAction | ChangeLanguageAction

export const createChangeLanguageAction = (languageCode: "zh" | "en"): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    data: languageCode
  }
}

export const createAddLanguageAction = (name: string, code: string): AddLanguageAction => {
  return {
    type: ADD_NEWLAGNUAGE,
    data: { name, code }
  }
}