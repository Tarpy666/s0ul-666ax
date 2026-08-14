export class StaminaPool {
  constructor(private max = 100) { this.value = max; }
  value: number;
  spend(n: number): boolean {
    if (this.value < n) return false;
    this.value -= n;
    return true;
  }
  regen(n = 3): void { this.value = Math.min(this.max, this.value + n); }
}
export class IFrameRules {
  private frames = 0;
  hit(): boolean { if (this.frames > 0) return false; this.frames = 24; return true; }
  tick(): void { this.frames = Math.max(0, this.frames - 1); }
}
export class BossPhaseLoop {
  constructor(private phase = 1) {}
  advance(): void { this.phase++; }
  hp(scaled: number): number { return scaled * this.phase; }
}