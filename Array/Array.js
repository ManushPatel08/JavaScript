languages = ["hindi","english","gujarati","sanskrit","tamil","marathi","punjabi"]

// const deleteLanguage = (langName) =>{
//     return languages.filter((lang)=>{
//         return lang != langName
//     })
// }

const deleteLanguage = (langName) => languages.filter((lang)=>lang != langName)


let x = deleteLanguage("hindi")
console.log(x);
