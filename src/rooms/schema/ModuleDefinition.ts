import { Schema, type } from "@colyseus/schema";

type ModuleType = "brawl" | "weapon" | "hardware";

export class ModuleDefinition extends Schema {
  @type("string") kind: ModuleType;
  @type("string") name: string;
}

export class WeaponModule extends ModuleDefinition {
  @type("string") type: "weapon" = "weapon";
  @type("number") power: number;
  @type("string") range: string;
  @type("string") subtype: string;
}

export class BrawlModule extends ModuleDefinition {
  @type("string") type: "brawl" = "brawl";
  @type("number") power: number;
}

export class HardwareModule extends ModuleDefinition {
  @type("string") type: "hardware" = "hardware";
  @type("string") description: string;
}
