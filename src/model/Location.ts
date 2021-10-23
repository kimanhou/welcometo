import { FieldType } from "./deserialization/FieldType";
import JsonDeserializationHelper from "./deserialization/JsonDeserializationHelper";
import { Photo as Photo } from "./Photo";

export default class Location {
    readonly photos : Photo[];
    readonly name : string;
    readonly description : string;

    constructor(name : string, description : string, photos : Photo[]) {
        this.name = name;
        this.description = description;
        this.photos = photos;
    }

    static deserialize = (json : any) => {
        const name = JsonDeserializationHelper.assertField(json, 'name', FieldType.STRING);
        const description = JsonDeserializationHelper.assertField(json, 'description', FieldType.STRING);
        const photos = JsonDeserializationHelper.assertField(json, 'photos', FieldType.ARRAY(Photo.deserialize));

        return new Location(name, description, photos);
    }
}