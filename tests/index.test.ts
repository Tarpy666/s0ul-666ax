import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { StaminaPool, IFrameRules, BossPhaseLoop } from "../src/archetype";

describe("S0UL-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(3);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const sp = new StaminaPool(100);
sp.spend(70);
expect(sp.spend(40)).toBe(false);
sp.regen(50);
expect(sp.value).toBe(80);
const i = new IFrameRules();
expect(i.hit()).toBe(true);
expect(i.hit()).toBe(false);
const b = new BossPhaseLoop();
expect(b.hp(100)).toBe(100);
b.advance();
expect(b.hp(100)).toBe(200);
  });
});
