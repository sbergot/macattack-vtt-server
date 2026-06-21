import { ArraySchema, Schema, type } from "@colyseus/schema";
import { PositionAngle } from "./Position.js";

export class ActivableUnitState extends Schema {
  @type("string") type: string;
  @type("string") name: string;
}

export class UnitState extends ActivableUnitState {
  @type("string") type: string;
  @type(PositionAngle) position: PositionAngle;
}

export class AuxiliaryUnitFormationState extends ActivableUnitState {
  @type("string") type: "Formation" = "Formation";
  @type("string") subtype: "Infantry" | "Vehicle";
  @type(["string"]) modules: ArraySchema<string>;
  @type([UnitState]) units: ArraySchema<UnitState>;
}

type SlotHealth = "normal" | "damaged" | "destroyed";

export class SlotState extends Schema {
  @type("string") moduleName: string;
  @type("string") health: SlotHealth;
}

export class MacState extends UnitState {
  @type("string") type: "Mac" = "Mac";
  @type("number") macClass: number;
  @type([SlotState]) slots: ArraySchema<SlotState>;
  @type("number") heat: number;
  @type("number") motion: number;
  @type("number") jolt: number;
  @type("number") rad: number;
  @type("number") internalDamage: number;
  @type("boolean") crashed: boolean;
}
