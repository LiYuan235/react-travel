export const CHANGE_LANGUAGE="change_language";
interface ChangeLanguageAction{
    type:typeof CHANGE_LANGUAGE,
    payload:"zh"|"en"
}
export const changelanguageActionCreator=(languageCode:'zh'|'en'):ChangeLanguageAction=>{
    return{
        type:CHANGE_LANGUAGE,
        payload:languageCode,
    }
}