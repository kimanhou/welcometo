// import Album from "../model/Album";
// import Encrypt from "./Encrypt";

// test.each([
//     ["bacon", "ParosYenMei"],
//     ["https://i.imgur.com/gLJ5OU5.jpg", "ParosYenMei"], //0
//     ["https://i.imgur.com/JgQr9Hb.jpg", "ParosYenMei"], //1
//     ["https://i.imgur.com/HTDtdTc.jpg", "ParosYenMei"], //2
//     ["https://i.imgur.com/sgd8MgO.jpg", "ParosYenMei"], //4
//     ["https://i.imgur.com/KCAIvwq.jpg", "ParosYenMei"], //5
//     ["https://i.imgur.com/oXXqcEQ.jpg", "ParosYenMei"], //6
//     ["https://i.imgur.com/74Uzhmm.jpg", "ParosYenMei"], //7
//     ["https://i.imgur.com/d2XImcJ.jpg", "ParosYenMei"], //8
//     ["https://i.imgur.com/XmOiT9F.jpg", "ParosYenMei"], //9

//     ["https://i.imgur.com/ETiohko.jpg", "ParosYenMei"], //10
//     ["https://i.imgur.com/WVxzUCk.jpg", "ParosYenMei"], //11
//     ["https://i.imgur.com/JTJwLSU.jpg", "ParosYenMei"], //12
//     ["https://i.imgur.com/8HU43C1.jpg", "ParosYenMei"], //13
//     ["https://i.imgur.com/evjC482.jpg", "ParosYenMei"], //14
//     ["https://i.imgur.com/fiOIx7m.jpg", "ParosYenMei"], //15
//     ["https://i.imgur.com/dTsZmiC.jpg", "ParosYenMei"], //16
//     ["https://i.imgur.com/gpFw6BL.jpg", "ParosYenMei"], //17
//     ["https://i.imgur.com/yIauhXi.jpg", "ParosYenMei"], //18
//     ["https://i.imgur.com/uICjL5N.jpg", "ParosYenMei"], //19
// ])
// ("Test are strings isomorphic a : %s, b : %s", (s ,key) => {
//     console.log(`${s} -> ${Encrypt.encrypt(s, key)}`);
// })

// test.each([
//     ["U2FsdGVkX1/Iw/LhT/Sc01/qInraYN7rGT4bucJkKBU=", "ParosYenMei"],
//     ["U2FsdGVkX1+V4mAmDk8VsmGOZI2INicl2UhNEsz2GbXVa8Izi5th6/j1MF2loLss", "ParosYenMei"],
// ])
// ("Test are strings isomorphic a : %s, b : %s", (s ,key) => {
//     // console.log(`${s} -> ${Encrypt.decrypt(s, key)}`);
// })

// test.only("Encrypt json", () => {
//     const album = Album.PAROS_ALBUM;
//     const hashKey = "ParosYenMei";
//     const obj = JSON.parse(JSON.stringify(album));
//     obj.locations = obj.locations.map((x : any) => {
//         x.photos = x.photos.map((y : any) => {
//             if(y.url.startsWith("https")){
//                 y.url = Encrypt.encrypt(y.url, hashKey);
//             }
//             return y;
//         })
//         return x;
//     })
//     console.log(JSON.stringify(obj, null, 4));
// })