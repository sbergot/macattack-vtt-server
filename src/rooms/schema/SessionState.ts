import { ArraySchema, MapSchema, Schema, type } from "@colyseus/schema";
import { MacState } from "./MacState.js";

export class SessionState extends Schema {
  @type("string") phase: string = "";
  @type(["string"]) initiativeDeck = new ArraySchema<string>();
  @type({ map: MacState }) units = new MapSchema<MacState>();
}
