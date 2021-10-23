import { FieldType } from "./deserialization/FieldType";
import JsonDeserializationHelper from "./deserialization/JsonDeserializationHelper";

export class Photo {
    readonly urlSmall : string;
    readonly urlBig : string;
    readonly caption : string;

    constructor(urlSmall : string, urlBig : string, caption : string) {
        this.urlSmall = urlSmall;
        this.urlBig = urlBig;
        this.caption = caption;
    }

    static deserialize = (json : any) => {
        const urlSmall = JsonDeserializationHelper.assertField(json, 'urlSmall', FieldType.STRING);
        const urlBig = JsonDeserializationHelper.assertField(json, 'urlBig', FieldType.STRING);
        const caption = JsonDeserializationHelper.assertField(json, 'caption', FieldType.STRING);

        return new Photo(urlSmall, urlBig, caption);
    }
}