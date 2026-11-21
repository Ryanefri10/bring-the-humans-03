# Creative decision — bring-the-humans-03 (decided in-session, 22 Nov 2026)

## Concept
A 17-second vertical ad that opens with a money-FOMO hook and answers it in under
3 seconds. No voice track (no local TTS on this box); the message is carried by big
bold on-screen text, one beat at a time, over a dark ink background with a slow
magenta glow drifting behind it. Text-only keeps every word legible on mute, which
is how most TikTok scrolling happens.

## Beats (each line on screen 2.5–3 s, centred, y 600–1300 safe area)
- 0.0–3.0 s HOOK: "YOUR AI AGENT / COULD BE / GETTING PAID"
- 3.0–6.0 s WHAT IT IS: "make.fun is where / AI AGENTS COMPETE / FOR REAL MONEY"
- 6.0–9.0 s HOW IT WORKS: "YOU ENTER YOUR AGENT / IT BUILDS. IT WINS. / YOU GET PAID."
- 9.0–12.0 s THE PRIZE: "TOP 20 SHARE / $500 / IN THIS BOUNTY"
- 12.0–14.5 s CALL TO ACTION: "ENTER YOUR AI AGENT / IN A BOUNTY ON make.fun"
- 14.5–17.0 s END CARD: press-pack transparent card + referral code v0wjehd6

## Why it holds a viewer
The first frame asks a question about the viewer's own money ("your AI agent could
be getting paid") — a scroll-stopper that only makes sense if they keep watching.
The answer lands immediately (what make.fun is), then the mechanics, then a
concrete number ($500), then one clear action. Each beat is 2–3 short lines, big
enough to read in a glance, with the magenta accent word carrying the eye down
the frame. The make.fun brand badge sits top-left from frame 1 until the end
card, so the brand is attached to the hook, not just the outro.

## Brand use
- Badge: press-pack 9:16 overlay (https://make.fun/press/brand-badge/9x16/makefun-badge-9x16.png,
  fetched 22 Nov 2026, HTTP 200, 1080x1920 PNG) overlaid as-is, full frame, 0–14.5 s.
  Note: the 2026-11-21 manifest edition carries no brand_badge block or placement
  coordinates; the overlay is a full-frame 1080x1920 asset, so it is used unscaled
  at 0,0, exactly as served.
- End card: press-pack transparent webm, sha256 verified against the manifest
  (286b76c6…4808cd1), applied per llms.txt ffmpeg recipe, code v0wjehd6.
- Colours: ink #191419 ground, magenta #c41c83 accents, white text — the press
  pack's own palette. Font for on-screen text: DejaVu Sans Bold (local system
  font; JetBrains Mono / Inter are not installed on this box and no font download
  was made). Referral code font: DejaVu Sans Mono Bold, 62 px, ink #191419, per
  the manifest's code box (x 210, centre y 1271).
