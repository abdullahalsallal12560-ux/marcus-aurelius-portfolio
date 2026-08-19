/**
 * The pattern behind each fragrance's colourway.
 *
 * Every motif is taken from the product's own photograph or its stated
 * composition, never chosen for decoration: the beach chair Maximus was shot
 * beside, the sweets that lead Maxima, the Venetian loggia Romeo's packaging
 * quotes, the silk Juliette was shot against. All four are stacked and
 * crossfaded, so moving between fragrances dissolves rather than cuts.
 *
 * Drawn at a hairline weight and masked back through the middle of the
 * spread — see .scent-world in index.css, which also carries the per-motif
 * strength, since a flat stripe sits under type far more quietly than line
 * drawing does.
 */
export default function ScentWorlds() {
  return (
    <div className="scent-worlds" aria-hidden="true">
      {/* Maxima — macarons, strawberries and berry sprigs. The sweet half of
          the composition, not the floral half. */}
      <div className="scent-world" data-w="maxima">
        <svg>
          <defs>
            <pattern id="scent-maxima" width="205" height="205" patternUnits="userSpaceOnUse">
              <g
                fill="none"
                stroke="#4e2333"
                strokeWidth="1.15"
                opacity="0.38"
                strokeLinecap="round"
              >
                <path d="M20,42 C20,31 50,31 50,42" />
                <path d="M19,44.4 L51,44.4" />
                <path d="M19,48 L51,48" />
                <path d="M20,50.4 C20,61 50,61 50,50.4" />
                <path d="M100,34 C110,34 114,42 110,50 C107,57 100,62 100,62 C100,62 93,57 90,50 C86,42 90,34 100,34 Z" />
                <path d="M100,34 L100,27" />
                <path d="M100,29 L94,25" />
                <path d="M100,29 L106,25" />
                <circle cx="97" cy="44" r="0.9" />
                <circle cx="104" cy="42" r="0.9" />
                <circle cx="100" cy="51" r="0.9" />
                <circle cx="94" cy="50" r="0.9" />
                <circle cx="107" cy="50" r="0.9" />
                <circle cx="46" cy="108" r="6" />
                <circle cx="58" cy="103" r="6" />
                <circle cx="55" cy="116" r="6" />
                <path d="M52,99 L58,90" />
                <path d="M58,97 L66,92" />
                <path d="M110,96 C110,86 130,86 130,96" />
                <path d="M109,98.4 L131,98.4" />
                <path d="M109,102 L131,102" />
                <path d="M110,104.4 C110,114 130,114 130,104.4" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scent-maxima)" />
        </svg>
      </div>

      {/* Maximus — the beach-chair stripe, wide and vertical. Blue rather than
          navy: a stripe dark enough to read as navy would take the body copy
          below a legible contrast, where a saturated blue reads the same and
          does not. */}
      <div className="scent-world" data-w="maximus">
        <svg>
          <defs>
            <pattern id="scent-maximus" width="176" height="40" patternUnits="userSpaceOnUse">
              <rect width="88" height="40" fill="#0f4c86" opacity="0.3" />
              <rect x="88" width="88" height="40" fill="#c8901a" opacity="0.07" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scent-maximus)" />
        </svg>
      </div>

      {/* Romeo di Roma — a Venetian loggia: ogee arches on columns under a
          band of quatrefoils, which is where the bell-tower packaging in this
          product's own copy comes from. */}
      <div className="scent-world" data-w="romeo-di-roma">
        <svg>
          <defs>
            <pattern id="scent-romeo" width="120" height="172" patternUnits="userSpaceOnUse">
              <g
                fill="none"
                stroke="#d08a3a"
                strokeWidth="1.15"
                opacity="0.34"
                strokeLinecap="round"
              >
                <path d="M49,26 A11,11 0 0 1 71,26 A11,11 0 0 1 71,48 A11,11 0 0 1 49,48 A11,11 0 0 1 49,26 Z" />
                <path d="M-11,26 A11,11 0 0 1 11,26 A11,11 0 0 1 11,48 A11,11 0 0 1 -11,48 A11,11 0 0 1 -11,26 Z" />
                <path d="M109,26 A11,11 0 0 1 131,26 A11,11 0 0 1 131,48 A11,11 0 0 1 109,48 A11,11 0 0 1 109,26 Z" />
                <path d="M0,106 C0,90 22,92 40,78 C48,72 55,69 60,68" />
                <path d="M120,106 C120,90 98,92 80,78 C72,72 65,69 60,68" />
                <path d="M60,68 L60,59" />
                <path d="M0,106 L120,106" opacity="0.45" />
                <path d="M0,106 L0,172" />
                <path d="M120,106 L120,172" />
                <path d="M-4,112 L4,112" />
                <path d="M116,112 L124,112" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scent-romeo)" />
        </svg>
      </div>

      {/* Roma Juliette — spiralled roses over the fall of the silk the bottle
          was photographed against. */}
      <div className="scent-world" data-w="roma-juliette">
        <svg>
          <defs>
            <pattern id="scent-juliette" width="230" height="230" patternUnits="userSpaceOnUse">
              <g
                fill="none"
                stroke="#ce8a3e"
                strokeWidth="1.1"
                opacity="0.3"
                strokeLinecap="round"
              >
                <path d="M44,40 C48,36 54,38 54,44 C54,52 44,54 40,48 C35,40 44,32 53,34 C64,37 66,50 58,58 C49,67 34,62 30,50" />
                <path d="M129,115 C133,111 139,113 139,119 C139,127 129,129 125,123 C120,115 129,107 138,109 C149,112 151,125 143,133 C134,142 119,137 115,125" />
                <path d="M0,140 C42,116 62,164 104,140 C136,122 148,152 170,140" />
                <path d="M0,96 C42,72 62,120 104,96 C136,78 148,108 170,96" opacity="0.55" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scent-juliette)" />
        </svg>
      </div>
    </div>
  );
}
