import i18n from "../i18n/config";

export interface languageState{
    language:"en"|"zh";
    languageList:{name:string,code:string}[]
}
const defaultState:languageState={
    language:"zh",
    languageList:[{name:'中文',code:"zh"},{name:"English",code:"en"}]
}
export default (state=defaultState,action)=>{
    if(action.type==="change_language"){
        i18n.changeLanguage(action.payload);
        const newState={...state,language:action.payload}
        return newState
    }
    return state
}