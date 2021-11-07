import { FieldType } from "./deserialization/FieldType";
import JsonDeserializationHelper from "./deserialization/JsonDeserializationHelper";
import Location from "./Location";

export default class Day {
    readonly name : string;
    readonly locations : Location[];

    constructor(name : string, locations : Location[]) {
        this.name = name;
        this.locations = locations;
    }

    static deserialize = (json : any) => {
        const name = JsonDeserializationHelper.assertField(json, "name", FieldType.STRING);
        const locations = JsonDeserializationHelper.assertField(json, "locations", FieldType.ARRAY(Location.deserialize));

        return new Day(name, locations);
    }
}