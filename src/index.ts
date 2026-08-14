// S0UL-666AX — clean-room action-rpg. Deterministic by construction.
// Inspiration (mechanics only, not source material): action RPG conventions (stamina, i-frames, boss loops)
// Target engine for the render layer: three-js (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { StaminaPool, IFrameRules, BossPhaseLoop } from "./archetype";

export const SPEC = "action RPG conventions (stamina, i-frames, boss loops)";
export const MODULES = [{ id: "StaminaPool", name: "S0UL-666AX :: StaminaPool" }, { id: "IFrameRules", name: "S0UL-666AX :: IFrameRules" }, { id: "BossPhaseLoop", name: "S0UL-666AX :: BossPhaseLoop" }];
export { seededRandom };
