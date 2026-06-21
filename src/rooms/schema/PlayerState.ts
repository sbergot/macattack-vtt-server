import { ArraySchema, Schema, type } from "@colyseus/schema";
import { ActivableUnitState } from "./UnitState.js";

export class PlayerState extends Schema {
  @type("string") name: string;
  @type([ActivableUnitState]) units: ArraySchema<ActivableUnitState>;
}
