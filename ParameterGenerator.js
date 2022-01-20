export default function ParameterGenerator({obj = {}}) {
    if(obj != {} || obj != undefined){
        let findnotempty = Object.fromEntries(Object.entries(obj).filter(([key, value]) => value != ""));
        let arrayContainer = []
        for(const [key, val] of Object.entries(findnotempty)){
          let stringparams = `${key}=${val}&`
          arrayContainer.push(stringparams)
        }
        return arrayContainer.join('')
    }
    else{
        return ""
    }

}
