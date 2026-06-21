import { ArraySchema, MapSchema, Schema, type } from "@colyseus/schema";
import { PlayerState } from "./PlayerState.js";

export class SessionState extends Schema {
  @type("string") phase: string = "";
  @type(["string"]) initiativeDeck = new ArraySchema<string>();
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
}
