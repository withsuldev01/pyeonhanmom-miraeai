# Product Design Review: Current Work

Date: 2026-06-26
Surface: localhost landing page, recently updated Therapist list and Process timeline sections.

## Captured Evidence

1. `01-desktop-teachers.png` - Desktop therapist carousel and beginning of Process section.
2. `02-desktop-process.png` - Desktop Process timeline.
3. `03-mobile-teachers.png` - Mobile therapist carousel.
4. `04-mobile-process.png` - Mobile Process timeline.

## Step Review

1. Desktop therapist list - Healthy with polish risks.
   The horizontal card rail reads clearly and the partial next card hints that more content exists. The temporary profile images, badges, and masked names are consistent with the clinic's calm visual style.

2. Desktop Process timeline - Mostly healthy.
   The alternating vertical timeline is much more distinctive than the previous four-card grid and communicates progression well. Spacing is calm, but the vertical gaps are large enough that step 4 falls below the first viewport, making the full sequence feel more stretched than necessary.

3. Mobile therapist list - Healthy but needs stronger scroll affordance.
   The card width and line breaks are stable at 375px. The second card peeking in suggests horizontal scroll, but there is no explicit control or visible instruction for keyboard or non-touch users.

4. Mobile Process timeline - Healthy.
   The timeline collapses cleanly into a left-line layout. Cards stay readable and no horizontal overflow is visible. The visual relationship between line, dots, and cards is clear.

## Strengths

- The new Process section fits the brand better than the previous equal-card grid: it feels more guided and consultative.
- The teacher card images are soft, non-clinical, and avoid the risk of fake real-person photography.
- Treatment badges on teacher cards help users quickly scan specialties.
- Mobile reflow is stable across the captured sections, with no visible text clipping or horizontal page overflow.

## UX Risks

1. The teacher carousel has no strong scroll affordance beyond a partially visible next card.
   Add subtle left/right controls on desktop and/or a small progress indicator. On mobile, a short visual cue such as pagination dots can help without adding instructional copy.

2. The page now has two nearby Therapist moments: the overview card group and the teacher list.
   This can work, but the two sections should have clearly different roles. Consider renaming the first eyebrow to `Team Approach` or the second eyebrow to `Teachers` to reduce repetition.

3. Desktop Process timeline spacing is a little too tall.
   Compress the vertical rhythm by reducing per-step `md:py` or line spacing so steps 1-4 feel like one process, not a long editorial section.

4. Placeholder teacher portraits are intentionally temporary, but they currently share a very similar face/body shape.
   Before launch, either replace with actual photos or vary the placeholders slightly more so the list does not feel duplicated.

## Accessibility Risks

- Horizontal carousel keyboard access cannot be confirmed from screenshots. If it remains scroll-only, make the rail focusable or add accessible previous/next buttons.
- The Process timeline line and dots appear decorative. Confirm they are hidden from assistive tech and that the reading order remains 1, 2, 3, 4.
- Text contrast appears acceptable visually, but the pale muted green step numbers should be checked against WCAG contrast if they are meant to convey essential step numbers.
- Screenshot review cannot verify focus states, reduced motion behavior, or screen reader names for carousel controls because these require interactive testing.

## Recommendations

1. Add carousel controls or a compact progress indicator to the teacher rail.
2. Differentiate the two Therapist sections by label or section title.
3. Tighten desktop Process vertical spacing slightly.
4. Keep the mobile Process layout as-is; it is the strongest current responsive treatment.
5. Before launch, replace placeholder teacher images or mark the section internally as temporary content.
