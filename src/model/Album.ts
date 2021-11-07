import { FieldType } from "./deserialization/FieldType";
import JsonDeserializationHelper from "./deserialization/JsonDeserializationHelper";
import parosData from '../data/paros.json';
import creteData from '../data/crete.json';
import maltaData from '../data/malta.json';
import Encrypt from "../business/Encrypt";
import Day from "./Day";

export default class Album {
    readonly test : string;
    readonly name : string;
    readonly days : Day[];

    constructor(test : string, name : string, days : Day[]) {
        this.test = test;
        this.name = name;
        this.days = days;
    }

    static deserialize = (json : any) => {
        const test = JsonDeserializationHelper.assertField(json, 'test', FieldType.STRING);
        const name = JsonDeserializationHelper.assertField(json, 'name', FieldType.STRING);
        const days = JsonDeserializationHelper.assertField(json, 'days', FieldType.ARRAY(Day.deserialize));

        return new Album(test, name, days);
    }

    static PAROS_ALBUM = Album.deserialize(parosData);
    static CRETE_ALBUM = Album.deserialize(creteData);
    static MALTA_ALBUM = Album.deserialize(maltaData);

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