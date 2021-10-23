import { FieldType } from "./deserialization/FieldType";
import JsonDeserializationHelper from "./deserialization/JsonDeserializationHelper";
import Location from './Location';
import parosData from '../data/paros.json';
import Encrypt from "../business/Encrypt";

export default class Album {
    readonly test : string;
    readonly name : string;
    readonly locations : Location[];

    constructor(test : string, name : string, locations : Location[]) {
        this.test = test;
        this.name = name;
        this.locations = locations;
    }

    static deserialize = (json : any) => {
        const test = JsonDeserializationHelper.assertField(json, 'test', FieldType.STRING);
        const name = JsonDeserializationHelper.assertField(json, 'name', FieldType.STRING);
        const locations = JsonDeserializationHelper.assertField(json, 'locations', FieldType.ARRAY(Location.deserialize));

        return new Album(test, name, locations);
    }

    static PAROS_ALBUM = Album.deserialize(parosData);

    static albums = (() => {
        return Object.values(Album)
            .filter(x => x instanceof Album)
            .map(x => x as Album)
    })();

    static getAlbum = (hashKey : string) => {
        const album = Album.albums.filter(x => Encrypt.decrypt(x.test, hashKey) === "bacon")[0];
        return album != null ? album : null;
    }
}