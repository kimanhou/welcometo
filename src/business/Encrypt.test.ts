import Album from "../model/Album";
import Encrypt from "./Encrypt";

test.only("Encrypt json", () => {
    const album = Album.PAROS_ALBUM;
    const hashKey = "";
    const obj = JSON.parse(JSON.stringify(album));
    obj.locations = obj.locations.map((x : any) => {
        x.photos = x.photos.map((y : any) => {
            if(y.urlSmall.startsWith("https")){
                y.urlSmall = Encrypt.encrypt(y.urlSmall, hashKey);
            }
            if(y.urlBig.startsWith("https")){
                y.urlBig = Encrypt.encrypt(y.urlBig, hashKey);
            }
            return y;
        })
        return x;
    })
    console.log(JSON.stringify(obj, null, 4));
})