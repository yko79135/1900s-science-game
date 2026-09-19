import { useId } from 'react';
import type { JSX, ReactNode } from 'react';
import type { CharacterId } from '../../types';

/**
 * Twelve lives, drawn rather than photographed.
 *
 * These are real people, and a portrait of a real person is a claim about what
 * they looked like. We decline to make that claim: nothing here is traced from
 * or modelled on any photograph, painting or famous image. Every figure is an
 * invention — a period bust built from hair mass, collar, posture and one motif
 * taken from that person's own work in `src/data/content/characters/`. There are
 * no faces. A faceless bust cannot be a bad likeness, and the motif carries the
 * identification a face would otherwise have to carry.
 *
 * The palette is the game's palette, reached through the CSS custom properties
 * in `src/index.css` rather than a second set of hexadecimal colours that would
 * drift away from the theme the first time the theme changed. Three ink tones —
 * ground, shade, figure — plus one accent, which is `currentColor` so a caller
 * can tint a portrait with that character's own `color` field simply by setting
 * `--portrait-accent` on any ancestor.
 *
 * Everything is flat: no filters, no shadows, and a single low-opacity gradient
 * on the backing plate. These are used both as 96px avatars in lists and as
 * large panels, so each silhouette has to survive being four times smaller than
 * it was designed — hence big shapes, no hairlines that vanish, and motifs sized
 * to read as a mark rather than as a diagram.
 */

/** The deep field a figure is cut out of, and the colour used for internal cuts. */
const GROUND = 'var(--portrait-ground, var(--ocean-deep, #081521))';
/** The middle tone: hair, cloth, anything that is neither skin nor background. */
const SHADE = 'var(--portrait-shade, var(--panel-border, #325674))';
/** The light plane: the head and neck, and — for one figure — a laboratory coat. */
const FIGURE = 'var(--portrait-figure, var(--panel-text, #eae3ce))';
/** The motif tone. `currentColor`, so an ancestor can retint the whole set. */
const ACCENT = 'currentColor';
/** What `currentColor` resolves to when nobody has said otherwise. */
const ACCENT_SOURCE = 'var(--portrait-accent, var(--accent, #d9b866))';

/* ------------------------------------------------------------------ *
 * Shared anatomy
 *
 * Only what genuinely is shared lives here: a bust outline, a hairline,
 * a head. Collars, hair mass and motifs are written out per figure on
 * purpose — they are the whole point, and a parameterised collar would
 * quietly turn twelve people into twelve cousins.
 * ------------------------------------------------------------------ */

interface BustShape {
  /** Distance from the frame edge at the hem: small is broad-shouldered. */
  inset?: number;
  /** Height of the shoulder point. Lower numbers sit higher and read squarer. */
  shoulder?: number;
  /** Half-width where the neck meets the cloth. */
  neck?: number;
}

/**
 * The outline that makes a bust read as a bust rather than as a hill: the cloth
 * climbs the trapezius from the shoulder point and only then turns up the neck.
 */
function bustPath({ inset = 12, shoulder = 148, neck = 15 }: BustShape = {}): string {
  const left = 100 - neck;
  const right = 100 + neck;
  const shoulderLeft = inset + 50;
  const shoulderRight = 200 - inset - 50;
  return [
    `M ${inset} 200`,
    `C ${inset + 2} 178 ${inset + 18} 158 ${shoulderLeft} ${shoulder}`,
    `C ${left - 16} ${shoulder - 6} ${left - 4} 139 ${left} 128`,
    `L ${right} 128`,
    `C ${right + 4} 139 ${right + 16} ${shoulder - 6} ${shoulderRight} ${shoulder}`,
    `C ${200 - inset - 18} 158 ${200 - inset - 2} 178 ${200 - inset} 200`,
    'Z',
  ].join(' ');
}

interface CapShape {
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
  /** How far the hair stands proud of the skull. */
  rise?: number;
  /** How high the hairline sits: larger is a higher forehead. */
  brow?: number;
  /** How far down the sides of the face the hair comes. */
  side?: number;
}

/**
 * A hairline, drawn over the head rather than behind it. Without one the light
 * plane runs all the way to the crown and every figure reads as bald; with one,
 * the mass above it is most of what tells the twelve apart.
 */
function capPath({ cx = 100, cy = 84, rx = 27, ry = 30, rise = 8, brow = 12, side = 6 }: CapShape = {}): string {
  const top = cy - ry - rise;
  const leftX = cx - rx - side * 0.35;
  const rightX = cx + rx + side * 0.35;
  const sideY = cy + side;
  return [
    `M ${leftX} ${sideY}`,
    `C ${leftX - 3} ${cy - ry * 0.7} ${cx - rx * 0.85} ${top} ${cx} ${top}`,
    `C ${cx + rx * 0.85} ${top} ${rightX + 3} ${cy - ry * 0.7} ${rightX} ${sideY}`,
    `C ${cx + rx * 0.72} ${cy - brow} ${cx - rx * 0.72} ${cy - brow} ${leftX} ${sideY}`,
    'Z',
  ].join(' ');
}

interface NeckProps {
  cx?: number;
  top?: number;
  bottom?: number;
  width?: number;
  /** How far the neck spreads as it reaches the shoulders. */
  flare?: number;
}

/**
 * Drawn over the cloth and under the collar, which is what decides where it
 * ends. It flares at the base: a neck of constant width reads as a column and
 * makes every figure look like a bust on a plinth.
 */
function Neck({ cx = 100, top = 106, bottom = 138, width = 18, flare = 8 }: NeckProps): JSX.Element {
  const half = width / 2;
  return (
    <path
      d={`M ${cx - half} ${top} h ${width} L ${cx + half + flare} ${bottom} L ${cx - half - flare} ${bottom} Z`}
      fill={FIGURE}
    />
  );
}

interface HeadProps {
  cx?: number;
  cy?: number;
  rx?: number;
  ry?: number;
}

/** A head with no features. Proportion is the only characterisation allowed. */
function Head({ cx = 100, cy = 84, rx = 27, ry = 30 }: HeadProps): JSX.Element {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={FIGURE} />;
}

interface MotifProps {
  children: ReactNode;
  /** Motifs sit behind the figure and must never compete with it. */
  opacity?: number;
}

/** Every motif is a line drawing in the accent, held back from the silhouette. */
function Motif({ children, opacity = 0.66 }: MotifProps): JSX.Element {
  return (
    <g opacity={opacity} fill="none" stroke={ACCENT} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </g>
  );
}

/* ------------------------------------------------------------------ *
 * The twelve
 * ------------------------------------------------------------------ */

/**
 * Einstein — starlight bent past an eclipsed disc: the 1919 measurement that
 * turned his field equations from mathematics into an observed fact, and the
 * single event that made him a public figure rather than a professor.
 */
function einsteinFigure(): ReactNode {
  return (
    <>
      <Motif>
        <path d="M 2 14 L 198 76" strokeDasharray="5 7" strokeWidth={1.6} opacity={0.65} />
        <path d="M 2 14 C 60 26 112 30 142 44 C 162 54 174 74 180 98" />
        <circle cx={150} cy={36} r={13} fill={GROUND} />
        <circle cx={150} cy={36} r={13} />
        <circle cx={150} cy={36} r={20} strokeWidth={1.2} strokeDasharray="3 6" opacity={0.75} />
      </Motif>

      {/* Soft collarless wool: he had no chair when the work was done, and dressed like it. */}
      <path d={bustPath({ inset: 10, shoulder: 152, neck: 15 })} fill={SHADE} />
      <Neck top={106} bottom={140} width={17} />
      <path d="M 85 128 L 100 158 L 115 128 Z" fill={GROUND} />
      <path d="M 85 126 C 92 137 95 147 95 156 L 84 146 Z" fill={SHADE} />
      <path d="M 115 126 C 108 137 105 147 105 156 L 116 146 Z" fill={SHADE} />

      {/* An unkempt mass built from uneven lumps, so it never resolves into a shape a face could fit. */}
      <g fill={SHADE}>
        <ellipse cx={100} cy={58} rx={40} ry={24} />
        <circle cx={62} cy={78} r={16} />
        <circle cx={138} cy={78} r={16} />
        <circle cx={74} cy={46} r={13} />
        <circle cx={128} cy={44} r={12} />
        <circle cx={150} cy={66} r={10} />
        <circle cx={50} cy={66} r={10} />
      </g>
      <Head cx={100} cy={86} rx={27} ry={30} />
      <path d={capPath({ cx: 100, cy: 86, rx: 27, ry: 30, rise: 16, brow: 17, side: 4 })} fill={SHADE} />
    </>
  );
}

/**
 * Curie — a sealed tube throwing off measured radiation. Her method was to treat
 * activity as a quantity to be read off an instrument, tonne of pitchblende
 * after tonne, until two new elements fell out of the arithmetic.
 */
function curieFigure(): ReactNode {
  return (
    <>
      <Motif>
        <path d="M 28 36 h 12 v 24 a 6 6 0 0 1 -12 0 z" fill={GROUND} />
        <path d="M 28 36 h 12 v 24 a 6 6 0 0 1 -12 0 z" />
        <path d="M 31 29 h 6 v 7 h -6 z" />
        <path d="M 54 26 A 22 22 0 0 1 54 70" strokeWidth={2} />
        <path d="M 64 16 A 34 34 0 0 1 64 80" strokeWidth={1.7} opacity={0.75} />
        <path d="M 74 8 A 46 46 0 0 1 74 90" strokeWidth={1.4} opacity={0.5} />
      </Motif>

      {/* A plain buttoned working dress with a standing collar: laboratory clothes. */}
      <path d={bustPath({ inset: 18, shoulder: 152, neck: 14 })} fill={SHADE} />
      <Neck cx={99} top={106} bottom={134} width={16} />
      <path d="M 82 122 C 93 130 105 130 116 122 L 116 137 C 105 145 93 145 82 137 Z" fill={GROUND} />
      <g fill={ACCENT} opacity={0.85}>
        <circle cx={99} cy={156} r={2.6} />
        <circle cx={99} cy={170} r={2.6} />
        <circle cx={99} cy={184} r={2.6} />
      </g>

      {/* Centre-parted, flat to the skull and gathered low at the nape: the plainest hair here. */}
      <ellipse cx={67} cy={99} rx={14} ry={13} fill={SHADE} />
      <Head cx={99} cy={84} rx={26} ry={30} />
      <path d={capPath({ cx: 99, cy: 84, rx: 26, ry: 30, rise: 5, brow: 16, side: 7 })} fill={SHADE} />
      <path d="M 99 54 v 10" stroke={GROUND} strokeWidth={2} strokeLinecap="round" />
    </>
  );
}

/**
 * Bohr — an electron dropping between two stationary orbits: the quantised atom
 * of 1913, and the image his whole institute was built to argue about.
 */
function bohrFigure(): ReactNode {
  return (
    <>
      <Motif>
        <circle cx={46} cy={50} r={12} />
        <circle cx={46} cy={50} r={23} strokeWidth={1.8} opacity={0.8} />
        <circle cx={46} cy={50} r={34} strokeWidth={1.5} opacity={0.55} />
        <circle cx={70} cy={26} r={4} fill={ACCENT} stroke="none" />
        <path d="M 68 30 L 55 43" strokeWidth={2.4} />
        <path d="M 55 43 l 9 1 l -9 -9 z" fill={ACCENT} stroke="none" />
        <path d="M 76 58 q 6 5 12 0 q 6 -5 12 0" strokeWidth={1.6} opacity={0.7} />
      </Motif>

      {/* Heavy suit, wide lapels: the director of an institute, dressed for the part. */}
      <path d={bustPath({ inset: 2, shoulder: 146, neck: 17 })} fill={SHADE} />
      <Neck top={104} bottom={136} width={19} />
      <path d="M 79 127 L 100 172 L 121 127 Z" fill={GROUND} />
      <path d="M 87 125 L 100 153 L 113 125 Z" fill={FIGURE} />
      <path d="M 95 133 h 10 l 4 40 l -9 8 l -9 -8 z" fill={ACCENT} opacity={0.85} />

      {/* Broad cranium, wide jaw, hair flat and parted high on the left. */}
      <Head cx={100} cy={82} rx={29} ry={30} />
      <path d={capPath({ cx: 100, cy: 82, rx: 29, ry: 30, rise: 7, brow: 18, side: 3 })} fill={SHADE} />
      <path d="M 85 56 L 79 70" stroke={GROUND} strokeWidth={3.4} strokeLinecap="round" />
    </>
  );
}

/**
 * Noether — a rotation closing on itself around an axis that does not move: her
 * theorem, that every continuous symmetry of a system hands you a conserved
 * quantity, stated as the two things it actually relates.
 */
function noetherFigure(): ReactNode {
  return (
    <>
      <Motif>
        <path d="M 150 24 A 26 26 0 1 1 126 64" strokeWidth={2.6} />
        <path d="M 126 64 l 13 3 l -5 -13 z" fill={ACCENT} stroke="none" />
        <path d="M 112 50 H 188" strokeWidth={2.2} />
        <path d="M 112 43 v 14 M 188 43 v 14" strokeWidth={1.6} />
        <circle cx={150} cy={50} r={3.4} fill={ACCENT} stroke="none" />
      </Motif>

      {/* Square shoulders, a plain round neckline, one pin. Nothing decorative. */}
      <path d={bustPath({ inset: 8, shoulder: 146, neck: 15 })} fill={SHADE} />
      <Neck cx={101} top={106} bottom={136} width={16} />
      <path d="M 84 124 C 92 141 110 141 118 124 L 118 138 L 84 138 Z" fill={GROUND} />
      <circle cx={101} cy={150} r={4.5} fill={ACCENT} opacity={0.9} />
      <circle cx={101} cy={150} r={8.5} fill="none" stroke={ACCENT} strokeWidth={1.4} opacity={0.7} />

      {/* A blunt bob cut level with the jaw, and a lecturer's slightly raised chin. */}
      <path d="M 68 70 C 68 44 84 34 101 34 C 118 34 134 44 134 70 L 134 100 Q 134 107 127 107 L 75 107 Q 68 107 68 100 Z" fill={SHADE} />
      <Head cx={101} cy={82} rx={26} ry={29} />
      <path d={capPath({ cx: 101, cy: 82, rx: 26, ry: 29, rise: 7, brow: 16, side: 5 })} fill={SHADE} />
    </>
  );
}

/**
 * Hilbert — twenty-three marks in a block: the problems he set the century in
 * 1900, which is the form his influence actually took. The only motif here that
 * is a list, because setting the agenda was the work.
 */
function hilbertFigure(): ReactNode {
  const marks: ReactNode[] = [];
  for (let i = 0; i < 23; i += 1) {
    marks.push(
      <rect
        key={i}
        x={12 + (i % 5) * 11}
        y={18 + Math.floor(i / 5) * 11}
        width={7}
        height={2.6}
        rx={1.3}
        fill={ACCENT}
        stroke="none"
      />,
    );
  }

  return (
    <>
      <Motif opacity={0.7}>
        {marks}
        <path d="M 7 12 v 62" strokeWidth={1.6} opacity={0.6} />
      </Motif>

      <path d={bustPath({ inset: 12, shoulder: 150, neck: 14 })} fill={SHADE} />
      <Neck top={108} bottom={132} width={15} />

      {/* Wing collar and bow tie: he belonged to the generation before soft shirts. */}
      <path d="M 87 129 L 100 148 L 113 129 L 109 123 L 91 123 Z" fill={FIGURE} />
      <path d="M 100 144 L 84 137 L 84 153 Z M 100 144 L 116 137 L 116 153 Z" fill={ACCENT} opacity={0.9} />

      <circle cx={76} cy={92} r={9} fill={SHADE} />
      <circle cx={124} cy={92} r={9} fill={SHADE} />
      <Head cx={100} cy={88} rx={25} ry={28} />
      {/* The short beard of an older German professor, narrowing to the point of the chin. */}
      <path d="M 83 98 C 85 122 94 132 100 132 C 106 132 115 122 117 98 Z" fill={SHADE} />

      {/* The Panama hat he wore about Göttingen: the most distinctive outline in the set. */}
      <ellipse cx={100} cy={56} rx={54} ry={9} fill={SHADE} />
      <path d="M 75 56 C 75 29 81 22 100 22 C 119 22 125 29 125 56 Z" fill={SHADE} />
      <path d="M 75 45 h 50 v 9 h -50 z" fill={ACCENT} opacity={0.85} />
    </>
  );
}

/**
 * Ramanujan — a Ferrers staircase, the diagram of one partition of an integer.
 * Counting those partitions is the result he and Hardy are remembered for, and
 * it is the rare piece of his work that draws itself.
 */
function ramanujanFigure(): ReactNode {
  const rows = [5, 4, 3, 3, 1];
  const cells: ReactNode[] = [];
  rows.forEach((count, row) => {
    for (let column = 0; column < count; column += 1) {
      cells.push(
        <rect
          key={`${row}-${column}`}
          x={120 + column * 9}
          y={20 + row * 9}
          width={6}
          height={6}
          fill={ACCENT}
          stroke="none"
          opacity={0.9}
        />,
      );
    }
  });

  return (
    <>
      <Motif opacity={0.66}>
        {cells}
        <path d="M 115 16 v 49" strokeWidth={1.6} opacity={0.6} />
        <path d="M 115 70 H 172" strokeWidth={1.6} opacity={0.6} />
      </Motif>

      {/* A collarless tunic with a shawl over one shoulder: how he dressed in Madras. */}
      <path d={bustPath({ inset: 20, shoulder: 152, neck: 14 })} fill={SHADE} />
      <Neck top={106} bottom={134} width={16} />
      <path d="M 86 124 C 93 140 107 140 114 124 L 114 138 L 86 138 Z" fill={GROUND} />
      <path d="M 20 200 C 26 176 46 158 72 148 L 98 200 Z" fill={GROUND} />
      <path d="M 73 149 L 99 200" stroke={ACCENT} strokeWidth={2.4} opacity={0.7} strokeLinecap="round" />
      <path d="M 87 125 C 94 141 106 141 113 125" fill="none" stroke={ACCENT} strokeWidth={1.6} opacity={0.7} />

      {/* Thick hair swept straight back with no parting, standing taller than the skull. */}
      <Head cx={100} cy={86} rx={26} ry={29} />
      <path d={capPath({ cx: 100, cy: 86, rx: 26, ry: 29, rise: 15, brow: 19, side: 4 })} fill={SHADE} />
    </>
  );
}

/**
 * Gödel — a formal system with one true sentence walking out through its own
 * wall. Incompleteness is not a picture of anything, so the motif states the
 * shape of the result instead: the box cannot hold what it implies.
 */
function godelFigure(): ReactNode {
  return (
    <>
      <Motif>
        <rect x={116} y={22} width={64} height={56} rx={3} strokeWidth={2} />
        <path d="M 126 36 H 166" strokeWidth={1.8} opacity={0.8} />
        <path d="M 126 48 H 158" strokeWidth={1.8} opacity={0.8} />
        <path d="M 126 60 H 168" strokeWidth={1.8} opacity={0.8} />
        <path d="M 126 72 H 194" strokeWidth={2.4} />
        <circle cx={194} cy={72} r={3.2} fill={ACCENT} stroke="none" />
      </Motif>

      {/* A heavy overcoat worn indoors with the collar up: a small head inside a large coat. */}
      <path d={bustPath({ inset: 0, shoulder: 142, neck: 13 })} fill={SHADE} />
      <Neck top={100} bottom={134} width={14} />
      <path d="M 81 127 L 100 176 L 119 127 Z" fill={GROUND} />
      <path d="M 79 127 L 90 110 L 96 136 L 79 146 Z" fill={SHADE} />
      <path d="M 121 127 L 110 110 L 104 136 L 121 146 Z" fill={SHADE} />
      <path d="M 86 122 C 95 130 105 130 114 122 L 114 132 C 105 140 95 140 86 132 Z" fill={ACCENT} opacity={0.8} />

      {/* Thin hair flat to a narrow skull; the whole figure is understated on purpose. */}
      <Head cx={100} cy={78} rx={21} ry={27} />
      <path d={capPath({ cx: 100, cy: 78, rx: 21, ry: 27, rise: 3, brow: 20, side: 2 })} fill={SHADE} />
      <path d="M 91 55 L 87 66" stroke={GROUND} strokeWidth={2.8} strokeLinecap="round" />
    </>
  );
}

/**
 * Turing — a tape running past a reading window. The universal machine of 1936
 * was a tape and a rule for moving along it, and every machine he later built or
 * broke was that idea wearing hardware.
 */
function turingFigure(): ReactNode {
  const holes: ReactNode[] = [];
  for (let x = 10; x < 200; x += 15) {
    holes.push(<circle key={`h${x}`} cx={x} cy={34} r={3.2} fill={GROUND} stroke={ACCENT} strokeWidth={1.4} />);
    holes.push(<circle key={`s${x}`} cx={x} cy={45} r={1.3} fill={ACCENT} stroke="none" />);
  }

  return (
    <>
      <Motif opacity={0.66}>
        <path d="M 0 20 H 200 M 0 52 H 200" strokeWidth={1.8} />
        {holes}
        <rect x={94} y={14} width={20} height={44} rx={2} strokeWidth={2.4} opacity={0.95} />
      </Motif>

      {/* Open shirt, no tie, a jacket that does not sit quite square: a man who ran to work. */}
      <path d={bustPath({ inset: 12, shoulder: 148, neck: 15 })} fill={SHADE} />
      <Neck cx={103} top={106} bottom={140} width={16} />
      <path d="M 87 127 L 102 164 L 118 127 Z" fill={GROUND} />
      <path d="M 89 124 L 102 148 L 96 155 L 85 134 Z" fill={FIGURE} />
      <path d="M 118 124 L 104 148 L 110 155 L 122 134 Z" fill={FIGURE} />

      <Head cx={103} cy={84} rx={26} ry={29} />
      {/* The fringe falls forward across the brow rather than sitting on top of it. */}
      <path
        d="M 78 90 C 74 58 87 47 103 47 C 120 47 131 58 129 76 C 123 62 109 59 97 66 C 88 71 81 80 78 90 Z"
        fill={SHADE}
      />
    </>
  );
}

/**
 * Von Neumann — a saddle: the minimax point where one player's best and the
 * other's worst are the same number. It is the theorem that carried him out of
 * pure mathematics and into economics, weapons work and machines.
 */
function vonNeumannFigure(): ReactNode {
  return (
    <>
      <Motif>
        <path d="M 12 86 Q 46 24 80 86" strokeWidth={2.2} />
        <path d="M 12 18 Q 46 80 80 18" strokeWidth={2.2} opacity={0.8} />
        <circle cx={46} cy={52} r={4} fill={ACCENT} stroke="none" />
        <path d="M 46 28 v 12 M 46 64 v 12" strokeWidth={1.6} opacity={0.7} />
        <path d="M 46 24 l 4 8 l -8 0 z M 46 80 l 4 -8 l -8 0 z" fill={ACCENT} stroke="none" opacity={0.8} />
      </Motif>

      {/* The banker's three-piece suit he wore everywhere, including into the desert. */}
      <path d={bustPath({ inset: 2, shoulder: 144, neck: 17 })} fill={SHADE} />
      <Neck top={104} bottom={136} width={19} />
      <path d="M 77 127 L 100 174 L 123 127 Z" fill={GROUND} />
      <path d="M 87 125 L 100 153 L 113 125 Z" fill={FIGURE} />
      <path d="M 95 133 h 10 l 4 42 l -9 8 l -9 -8 z" fill={ACCENT} opacity={0.85} />
      <path d="M 146 158 l 15 -4 l 3 8 l -15 4 z" fill={FIGURE} opacity={0.85} />

      {/* A round head and a high, retreating hairline: no romantic outline anywhere. */}
      <Head cx={100} cy={82} rx={28} ry={29} />
      <path d={capPath({ cx: 100, cy: 82, rx: 28, ry: 29, rise: 3, brow: 24, side: 6 })} fill={SHADE} />
    </>
  );
}

/**
 * Oppenheimer — matter falling inside its own horizon. The 1939 collapse paper
 * with Snyder is his deepest physics, and it is the work he set aside; the motif
 * is that rather than the weapon, which the game already has him carry.
 */
function oppenheimerFigure(): ReactNode {
  const arrows: ReactNode[] = [];
  [45, 135, 225, 315].forEach((degrees, index) => {
    const radians = (degrees * Math.PI) / 180;
    arrows.push(
      <path
        key={index}
        d={`M ${150 + Math.cos(radians) * 36} ${50 + Math.sin(radians) * 36} L ${150 + Math.cos(radians) * 26} ${
          50 + Math.sin(radians) * 26
        }`}
        strokeWidth={2.4}
      />,
    );
  });

  return (
    <>
      <Motif>
        <circle cx={150} cy={50} r={20} strokeDasharray="4 5" strokeWidth={1.8} />
        <circle cx={150} cy={50} r={11} strokeWidth={1.5} opacity={0.7} />
        {arrows}
        <circle cx={150} cy={50} r={3.4} fill={ACCENT} stroke="none" />
      </Motif>

      {/* A narrow frame in a narrow suit: the thinnest silhouette in the set. */}
      <path d={bustPath({ inset: 24, shoulder: 154, neck: 12 })} fill={SHADE} />
      <Neck top={100} bottom={134} width={13} />
      <path d="M 87 127 L 100 170 L 113 127 Z" fill={GROUND} />
      <path d="M 92 125 L 100 152 L 108 125 Z" fill={FIGURE} />
      <path d="M 97 136 h 6 l 3 32 l -6 7 l -6 -7 z" fill={ACCENT} opacity={0.85} />

      <Head cx={100} cy={80} rx={22} ry={28} />
      <path d={capPath({ cx: 100, cy: 80, rx: 22, ry: 28, rise: 3, brow: 19, side: 3 })} fill={SHADE} />
      {/* The flat porkpie: a low crown and a short brim, nothing like Hilbert's Panama. */}
      <ellipse cx={100} cy={50} rx={38} ry={7} fill={SHADE} />
      <path d="M 79 50 C 79 30 85 25 100 25 C 115 25 121 30 121 50 Z" fill={SHADE} />
      <path d="M 79 41 h 42 v 8 h -42 z" fill={ACCENT} opacity={0.85} />
      <path d="M 88 31 q 12 6 24 0" stroke={GROUND} strokeWidth={2} fill="none" strokeLinecap="round" />
    </>
  );
}

/**
 * Franklin — the diagonal cross of reflections a helix throws onto film. It is
 * the signature of the B form she measured, and a diagram of a geometry rather
 * than a copy of any plate she exposed.
 */
function franklinFigure(): ReactNode {
  const reflections: ReactNode[] = [];
  [45, 135, 225, 315].forEach((degrees, arm) => {
    const radians = (degrees * Math.PI) / 180;
    [17, 29, 41].forEach((radius, step) => {
      const x = 48 + Math.cos(radians) * radius;
      const y = 52 + Math.sin(radians) * radius;
      const half = 6 + step * 1.6;
      reflections.push(
        <path
          key={`${arm}-${step}`}
          d={`M ${x + Math.sin(radians) * half} ${y - Math.cos(radians) * half} L ${x - Math.sin(radians) * half} ${
            y + Math.cos(radians) * half
          }`}
          strokeWidth={3.4}
          opacity={0.95 - step * 0.22}
        />,
      );
    });
  });

  return (
    <>
      <Motif opacity={0.7}>
        {reflections}
        <circle cx={48} cy={52} r={4.5} fill={ACCENT} stroke="none" />
      </Motif>

      {/* The only pale garment in the set: a laboratory coat over a dark blouse. */}
      <path d={bustPath({ inset: 14, shoulder: 148, neck: 15 })} fill={FIGURE} />
      <Neck cx={96} top={106} bottom={136} width={16} />
      <path d="M 81 127 L 98 174 L 117 127 Z" fill={GROUND} />
      <path d="M 86 125 L 98 166 L 112 125 Z" fill={SHADE} />
      <path d="M 98 174 V 200" stroke={GROUND} strokeWidth={2.4} strokeLinecap="round" />
      <rect x={140} y={158} width={22} height={17} fill="none" stroke={GROUND} strokeWidth={1.8} />
      <path d="M 152 154 v 14" stroke={ACCENT} strokeWidth={2.6} strokeLinecap="round" opacity={0.9} />

      {/* Short waved hair pushed back off the forehead; the head turned to the apparatus. */}
      <path d="M 68 106 C 62 70 68 46 86 41 C 96 38 108 42 116 46 C 128 52 130 74 126 106 Z" fill={SHADE} />
      <Head cx={96} cy={84} rx={26} ry={29} />
      <path d={capPath({ cx: 96, cy: 84, rx: 26, ry: 29, rise: 10, brow: 18, side: 7 })} fill={SHADE} />
      <path d="M 78 58 C 88 50 104 50 114 57" stroke={GROUND} strokeWidth={2} fill="none" strokeLinecap="round" />
    </>
  );
}

/**
 * Johnson — a trajectory closing on a point on the ground. She computed where a
 * capsule would come down before it went up, and the number that mattered was
 * always the one at the end of the arc.
 */
function johnsonFigure(): ReactNode {
  const beads: ReactNode[] = [];
  for (let i = 0; i <= 6; i += 1) {
    const angle = (-58 + (i * 116) / 6) * (Math.PI / 180);
    beads.push(
      <circle
        key={i}
        cx={100 + Math.sin(angle) * 33}
        cy={122 + Math.cos(angle) * 33}
        r={2.4}
        fill={ACCENT}
        stroke="none"
        opacity={0.9}
      />,
    );
  }

  return (
    <>
      <Motif>
        <ellipse cx={150} cy={54} rx={38} ry={19} transform="rotate(-24 150 54)" strokeWidth={2} />
        <circle cx={150} cy={54} r={17} fill={GROUND} />
        <circle cx={150} cy={54} r={17} strokeWidth={1.8} />
        <path d="M 134 48 q 16 6 32 0 M 136 61 q 14 5 28 0" strokeWidth={1.3} opacity={0.7} />
        <rect x={116} y={24} width={7} height={7} transform="rotate(-24 119 27)" fill={ACCENT} stroke="none" />
        <path d="M 154 68 l 8 8 M 162 68 l -8 8" strokeWidth={2.2} />
      </Motif>

      {/* A tailored dress with a pointed collar; composed, level, frontal. */}
      <path d={bustPath({ inset: 14, shoulder: 148, neck: 15 })} fill={SHADE} />
      <Neck top={106} bottom={136} width={16} />
      <path d="M 87 127 L 100 153 L 113 127 Z" fill={GROUND} />
      <path d="M 89 123 L 100 145 L 100 166 L 83 138 Z" fill={FIGURE} />
      <path d="M 111 123 L 100 145 L 100 166 L 117 138 Z" fill={FIGURE} />
      {beads}

      {/* A neat set: height on the crown, rolled and finished just above the jaw. */}
      <circle cx={72} cy={96} r={12} fill={SHADE} />
      <circle cx={128} cy={96} r={12} fill={SHADE} />
      <Head cx={100} cy={84} rx={26} ry={29} />
      <path d={capPath({ cx: 100, cy: 84, rx: 26, ry: 29, rise: 12, brow: 16, side: 8 })} fill={SHADE} />
      <path d="M 80 58 C 90 48 112 48 121 59" stroke={GROUND} strokeWidth={2} fill="none" strokeLinecap="round" />
    </>
  );
}

/**
 * The fallback. Content can gain a character before this file does, and a
 * missing portrait should look like an unlabelled plate in a book rather than
 * take down the screen that asked for it.
 */
function genericFigure(): ReactNode {
  return (
    <>
      <Motif>
        <rect x={124} y={28} width={54} height={44} rx={2} strokeWidth={2} />
        <path d="M 134 42 H 168 M 134 52 H 162 M 134 62 H 170" strokeWidth={1.6} opacity={0.75} />
      </Motif>

      <path d={bustPath({ inset: 16, shoulder: 150, neck: 15 })} fill={SHADE} />
      <Neck top={106} bottom={136} width={16} />
      <path d="M 84 124 C 92 141 110 141 118 124 L 118 138 L 84 138 Z" fill={GROUND} />
      <Head />
      <path d={capPath({ rise: 7, brow: 16, side: 4 })} fill={SHADE} />
    </>
  );
}

/**
 * The table the component draws from. Keyed by `CharacterId` so that adding a
 * life to the content without adding a portrait is a type error here rather
 * than a blank square in the interface.
 */
const PORTRAITS: Record<CharacterId, () => ReactNode> = {
  einstein: einsteinFigure,
  curie: curieFigure,
  bohr: bohrFigure,
  noether: noetherFigure,
  hilbert: hilbertFigure,
  ramanujan: ramanujanFigure,
  godel: godelFigure,
  turing: turingFigure,
  vonneumann: vonNeumannFigure,
  oppenheimer: oppenheimerFigure,
  franklin: franklinFigure,
  johnson: johnsonFigure,
};

export interface PortraitProps {
  characterId: CharacterId;
  /** Rendered size in px; defaults to something sensible. */
  size?: number;
  className?: string;
  /** Decorative when the name is already on screen. */
  title?: string;
}

export function Portrait({ characterId, size = 96, className, title }: PortraitProps): JSX.Element {
  // `useId` guarantees uniqueness across instances but not that the result is
  // legal inside a fragment reference, so the punctuation React adds is stripped.
  const uid = useId().replace(/[^A-Za-z0-9_-]/g, '');
  const plateId = `portrait-plate-${uid}`;
  const clipId = `portrait-clip-${uid}`;
  const draw = PORTRAITS[characterId] ?? genericFigure;
  const decorative = title === undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className ? `portrait ${className}` : 'portrait'}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? true : undefined}
      style={{ color: ACCENT_SOURCE, display: 'block' }}
    >
      {title !== undefined && <title>{title}</title>}
      <defs>
        <linearGradient id={plateId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={SHADE} stopOpacity="0.3" />
          <stop offset="70%" stopColor={SHADE} stopOpacity="0.04" />
          <stop offset="100%" stopColor={SHADE} stopOpacity="0" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="200" height="200" rx="7" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <rect width="200" height="200" fill={GROUND} />
        <rect width="200" height="200" fill={`url(#${plateId})`} />
        {draw()}
      </g>
      <rect
        x="0.9"
        y="0.9"
        width="198.2"
        height="198.2"
        rx="7"
        fill="none"
        stroke={SHADE}
        strokeOpacity="0.6"
        strokeWidth="1.8"
      />
    </svg>
  );
}
