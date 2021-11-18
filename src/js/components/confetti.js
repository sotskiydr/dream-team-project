import ConfettiGenerator from 'confetti-js';

export default function showConfetti() {
  const confettiSettings = { target: 'my-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
