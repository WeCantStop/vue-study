/**
 * Created by Will on 2017.5.5.
 */
function add(a,b){
    return a + b;
}
//
//module.exports = add;

//module.exports 同 export.default 一样
export default {
    add
}

/*** 下面为ES6语法形式  ****/
//export function add(a,b){
//    return a + b;
//}