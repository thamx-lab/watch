export const TIMELINE_STAGES = [
  {
    id: 'intro',
    start: 1,
    end: 40,
    title: 'THE WATCH',
    text: 'A complete precision-engineered mechanical watch.'
  },
  {
    id: 'glass',
    start: 41,
    end: 80,
    title: 'SAPPHIRE CRYSTAL',
    text: 'The sapphire crystal protects the dial while maintaining exceptional clarity and scratch resistance.'
  },
  {
    id: 'bezel',
    start: 81,
    end: 100,
    title: 'BEZEL',
    text: 'The precision-machined bezel surrounds the crystal and defines the outer structure of the watch.'
  },
  {
    id: 'dial',
    start: 101,
    end: 120,
    title: 'DIAL',
    text: 'The dial forms the visual center of the watch, combining precise markers with a carefully balanced surface.'
  },
  {
    id: 'hands',
    start: 121,
    end: 140,
    title: 'PRECISION HANDS',
    text: 'Each hand is precisely balanced around the central axis to display time with clarity and accuracy.'
  },
  {
    id: 'movement',
    start: 141,
    end: 200,
    title: 'MECHANICAL MOVEMENT',
    text: 'The mechanical movement brings together gears, bridges, and regulating components to drive the watch.'
  },
  {
    id: 'screws',
    start: 201,
    end: 220,
    title: 'PRECISION SCREW',
    text: 'Each precision screw secures a specific part of the mechanical assembly and maintains the exact alignment required by the movement.'
  },
  {
    id: 'crown',
    start: 221,
    end: 235,
    title: 'CROWN',
    text: 'The precision-machined crown provides direct control over the watch\'s adjustment mechanism.'
  },
  {
    id: 'gasket',
    start: 236,
    end: 250,
    title: 'GASKET',
    text: 'The precision-fitted gasket helps seal the case and protect the internal mechanism.'
  },
  {
    id: 'caseback',
    start: 251,
    end: 270,
    title: 'CASEBACK',
    text: 'The caseback completes the protective structure around the mechanical assembly.'
  },
  {
    id: 'strap',
    start: 271,
    end: 290,
    title: 'STRAP',
    text: 'The strap connects the engineered case to the wearer while completing the watch\'s physical design.'
  },
  {
    id: 'final',
    start: 291,
    end: 300,
    title: 'EVERY COMPONENT. ONE SYSTEM.',
    text: 'Every component is precisely engineered to work together as one complete mechanical system.'
  }
];

export const TOTAL_FRAMES = 300;

export function getStageForFrame(frameIndex) {
  // frameIndex is 0 to 299 (corresponds to frame 1 to 300)
  const frameNumber = frameIndex + 1;
  const stage = TIMELINE_STAGES.find(
    (s) => frameNumber >= s.start && frameNumber <= s.end
  );
  return stage || TIMELINE_STAGES[TIMELINE_STAGES.length - 1];
}
