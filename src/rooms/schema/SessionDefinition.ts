import { MapSchema, Schema, type } from "@colyseus/schema";
import { ModuleDefinition } from "./ModuleDefinition.js";

export class SessionDefinition extends Schema {
  @type("string") phase: string;
  @type({ map: ModuleDefinition }) units: MapSchema<ModuleDefinition>;
  @type({ map: "string"}) owners: MapSchema<string>;
}
