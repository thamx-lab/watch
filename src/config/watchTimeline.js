export const watchComponents = [
  {
    id: 'intro',
    shortName: 'WATCH',
    title: 'THE WATCH',
    startFrame: 1,
    endFrame: 40,
    text: 'A complete precision-engineered mechanical watch.',
    hotspot: { x: 50, y: 50 },
    spotlightZone: 'none'
  },
  {
    id: 'glass',
    shortName: 'CRYSTAL',
    title: 'SAPPHIRE CRYSTAL',
    startFrame: 41,
    endFrame: 80,
    text: 'The sapphire crystal protects the dial while maintaining exceptional clarity and scratch resistance.',
    hotspot: { x: 50, y: 22 },
    spotlightZone: 'top'
  },
  {
    id: 'bezel',
    shortName: 'BEZEL',
    title: 'BEZEL',
    startFrame: 81,
    endFrame: 100,
    text: 'The precision-machined bezel surrounds the crystal and defines the outer structure of the watch.',
    hotspot: { x: 50, y: 30 },
    spotlightZone: 'ring'
  },
  {
    id: 'dial',
    shortName: 'DIAL',
    title: 'DIAL',
    startFrame: 101,
    endFrame: 120,
    text: 'The dial forms the visual center of the watch, combining precise markers with a carefully balanced surface.',
    hotspot: { x: 50, y: 44 },
    spotlightZone: 'center'
  },
  {
    id: 'hands',
    shortName: 'HANDS',
    title: 'PRECISION HANDS',
    startFrame: 121,
    endFrame: 140,
    text: 'Each hand is precisely balanced around the central axis to display time with clarity and accuracy.',
    hotspot: { x: 50, y: 48 },
    spotlightZone: 'center'
  },
  {
    id: 'movement',
    shortName: 'MOVEMENT',
    title: 'MECHANICAL MOVEMENT',
    startFrame: 141,
    endFrame: 200,
    text: 'The mechanical movement brings together gears, bridges, and regulating components to drive the watch.',
    hotspot: { x: 50, y: 56 },
    spotlightZone: 'center'
  },
  {
    id: 'screws',
    shortName: 'SCREWS',
    title: 'PRECISION SCREW',
    startFrame: 201,
    endFrame: 220,
    text: 'Each precision screw secures a specific part of the mechanical assembly and maintains the exact alignment required by the movement.',
    hotspot: { x: 36, y: 44 },
    spotlightZone: 'side'
  },
  {
    id: 'crown',
    shortName: 'CROWN',
    title: 'CROWN',
    startFrame: 221,
    endFrame: 235,
    text: 'The precision-machined crown provides direct control over the watch\'s adjustment mechanism.',
    hotspot: { x: 70, y: 50 },
    spotlightZone: 'side'
  },
  {
    id: 'gasket',
    shortName: 'GASKET',
    title: 'GASKET',
    startFrame: 236,
    endFrame: 250,
    text: 'The precision-fitted gasket helps seal the case and protect the internal mechanism.',
    hotspot: { x: 50, y: 64 },
    spotlightZone: 'ring'
  },
  {
    id: 'caseback',
    shortName: 'CASEBACK',
    title: 'CASEBACK',
    startFrame: 251,
    endFrame: 270,
    text: 'The caseback completes the protective structure around the mechanical assembly.',
    hotspot: { x: 50, y: 72 },
    spotlightZone: 'base'
  },
  {
    id: 'strap',
    shortName: 'STRAP',
    title: 'STRAP',
    startFrame: 271,
    endFrame: 290,
    text: 'The strap connects the engineered case to the wearer while completing the watch\'s physical design.',
    hotspot: { x: 50, y: 84 },
    spotlightZone: 'base'
  },
  {
    id: 'final',
    shortName: 'FINAL',
    title: 'EVERY COMPONENT. ONE SYSTEM.',
    startFrame: 291,
    endFrame: 300,
    text: 'Every component is precisely engineered to work together as one complete mechanical system.',
    hotspot: { x: 50, y: 50 },
    spotlightZone: 'none'
  }
];

export const TOTAL_FRAMES = 300;

// Single Source of Truth helper function
export function getComponentForFrame(frameIndex) {
  const frameNumber = Math.max(1, Math.min(TOTAL_FRAMES, frameIndex + 1));
  const comp = watchComponents.find(
    (c) => frameNumber >= c.startFrame && frameNumber <= c.endFrame
  );
  return comp || watchComponents[watchComponents.length - 1];
}

// Backwards compatibility alias
export const TIMELINE_STAGES = watchComponents.map((c) => ({
  id: c.id,
  start: c.startFrame,
  end: c.endFrame,
  title: c.title,
  text: c.text
}));

export function getStageForFrame(frameIndex) {
  return getComponentForFrame(frameIndex);
}
