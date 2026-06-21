import { Schema, type } from "@colyseus/schema";

export class Position extends Schema {
  @type("number") x: number = 0;
  @type("number") y: number = 0;
}

export class PositionAngle extends Position {
  @type("number") angle: number = 0;
}
