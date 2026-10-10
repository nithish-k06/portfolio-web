// Web Audio API Synthesizer for Cinematic Sound Effects
// Completely zero external audio dependencies (100% reliable, zero network latency, no 404s)

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    // Load mute preference from localStorage if available
    try {
      const saved = localStorage.getItem('nk_portfolio_muted');
      if (saved !== null) {
        this.muted = JSON.parse(saved);
      }
    } catch (e) {
      this.muted = false;
    }
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  isMuted() {
    return this.muted;
  }

  setMuted(mute) {
    this.muted = mute;
    try {
      localStorage.setItem('nk_portfolio_muted', JSON.stringify(mute));
    } catch (e) {
      // ignore
    }
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  // Iconic cinematic "TA-DUM" chord synth
  playTadum() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Deep Sub Bass Boom (Ta)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(65, now);
      subOsc.frequency.exponentialRampToValueAtTime(32, now + 1.2);
      subGain.gain.setValueAtTime(0.5, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 1.8);

      // Resonant Middle Chord (Dummm)
      const chordNotes = [98, 130.8, 196, 261.6]; // G2, C3, G3, C4
      chordNotes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = idx % 2 === 0 ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + 0.15);

        // Filter for warm cinematic analog texture
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, now + 0.15);
        filter.frequency.exponentialRampToValueAtTime(2400, now + 0.6);
        filter.frequency.exponentialRampToValueAtTime(600, now + 2.0);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.18, now + 0.35);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + 0.15);
        osc.stop(now + 2.2);
      });
    } catch (err) {
      console.warn('Audio playback error:', err);
    }
  }

  // Smooth hover click
  playHover() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {
      // ignore
    }
  }

  // Profile Selection Cinematic Whoosh
  playProfileSelect() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Rising chime
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.25); // D5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {
      // ignore
    }
  }

  // Confirmation Chime
  playSuccess() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.08, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch (e) {
      // ignore
    }
  }
}

export const sound = new SoundEngine();
