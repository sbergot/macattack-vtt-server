import { ArraySchema, Schema, type } from "@colyseus/schema";
import { PositionAngle } from "./Position.js";

type SlotHealth = "normal" | "damaged" | "destroyed";

export class SlotState extends Schema {
  @type("string") moduleName: string;
  @type("string") health: SlotHealth;
}

export class MacState extends Schema {
  @type("string") name: string = "";
  @type("number") macClass: number;
  @type([SlotState]) slots: ArraySchema<SlotState>;
  @type("number") heat: number;
  @type("number") motion: number;
  @type("number") jolt: number;
  @type("number") rad: number;
  @type("number") internalDamage: number;
  @type("boolean") crashed: boolean;
  @type(PositionAngle) position: PositionAngle;
}
