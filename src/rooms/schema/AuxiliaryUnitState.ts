import { ArraySchema, Schema, type } from "@colyseus/schema";
import { PositionAngle } from "./Position.js";

type AuxiliaryUnitType = "Infantry" | "Vehicle";

export class AuxiliaryUnitState extends Schema {
  @type("string") name: string;
  @type(PositionAngle) position: PositionAngle;
}

export class AuxiliaryUnitFormationState extends Schema {
  @type("string") name: string;
  @type("string") type: AuxiliaryUnitType;
  @type(["string"]) modules: ArraySchema<string>;
  @type([AuxiliaryUnitState]) units: ArraySchema<AuxiliaryUnitState>;
}