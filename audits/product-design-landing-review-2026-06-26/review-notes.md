# Product Design Audit: 미래아이 랜딩페이지

Date: 2026-06-26
Target: http://localhost:3000/
Mode: UX + accessibility screenshot audit

## Screenshots

1. `01-desktop-hero.png` - Desktop hero
2. `02-desktop-assessment-support.png` - Assessment guide and support cards
3. `03-desktop-programs-team.png` - Program cards and therapist section
4. `04-desktop-process-package.png` - Process and package entry
5. `05-desktop-reviews-contact.png` - Reviews section
6. `06-mobile-hero.png` - Mobile hero
7. `07-mobile-assessment-support.png` - Mobile therapist cards
8. `08-mobile-programs-team.png` - Mobile process/package
9. `09-mobile-process-final.png` - Mobile reviews
10. `10-mobile-contact-footer.png` - Mobile final CTA and footer
11. `11-desktop-anchor-programs.png` - Desktop nav anchor result

## Audit Scope

The review covers the current landing page from first view through final CTA, with desktop 1440px and mobile 375px screenshots. It compares the implementation against the project brief: build trust with real center imagery, explain the initial assessment flow, and move guardians toward assessment submission or phone consultation.

## User Goal

A guardian who is worried about a child's development should quickly understand what the clinic does, feel reassured that the center is real and structured, and know the next step without feeling pressured or promised guaranteed outcomes.

## Step Health

1. Desktop hero: Healthy. Clear headline, real lobby image, and primary CTA are visible. The first viewport also hints at the next section.
2. Assessment and support: Healthy. The 5-minute assessment explanation is clear and the three support cards communicate the center's care model.
3. Programs and therapist section: Mostly healthy. Program cards are easy to scan, but therapist trust is still limited because the section is intentionally generic.
4. Process and package: Mostly healthy. The steps are predictable and the package card is prominent, but price and package confirmation status should be more explicit.
5. Reviews and contact: Needs content validation. The review section correctly labels copy as sample text, but that also weakens trust until real/approved wording is available.
6. Mobile hero: Healthy. The CTA appears in the first screen and the text-first/image-second order matches the brief.
7. Mobile mid-page cards: Mostly healthy. One-column cards are readable, though the long page feels card-heavy without section-level trust anchors.
8. Mobile package/reviews/contact: Healthy structurally. Buttons fit and do not overlap, but sticky header plus scroll position can make some sections feel abruptly cropped.
9. Desktop nav anchors: Healthy. The Program anchor lands with the heading visible under the sticky header.

## Strengths

- The page uses the real logo and lobby image, which gives the landing page more credibility than generic medical stock visuals.
- The tone is careful and does not overpromise outcomes. Copy stays close to evaluation, direction-setting, and support.
- CTA routing is consistent: all assessment-related links point to the same external assessment URL.
- Mobile first view meets the key requirement: `상담 신청` is visible before scrolling, with text before image.
- Motion is implemented through a separate client component and respects reduced motion in code.
- The visual system is restrained: white and warm neutral backgrounds, navy/teal accents, 8px cards, and no heavy decorative gradients.

## UX Risks

- `전화상담` in the header behaves like an active CTA, but it only jumps to a section where the phone number is not ready. This can feel like a dead end.
- The therapist section is honest about being provisional, but that message is visible to end users. For a live landing page, it lowers confidence.
- The program section is readable but visually repetitive. Seven similar text-only cards can make it harder for guardians to find the specific concern they came with.
- The package price is prominent but does not visibly carry a "확정 전" or "구성 확인 필요" caveat in the package card itself.
- Address, operating hours, map, and phone number are all absent. For a clinic landing page, these are not secondary details; they are trust and action information.
- Reviews are marked as representative sample copy. This is safe, but it reduces the persuasive role of the section until real approved reviews or an alternate trust signal replaces it.

## Accessibility Risks

- Focus styling is left to browser defaults. It may be technically present, but the design should define a visible focus ring for CTA links and nav links.
- Several CTA links open an external assessment URL without telling screen reader or keyboard users that they are leaving the site.
- The lobby image has useful alt text. The logo link also has an accessible label, which is good.
- Color contrast appears likely acceptable for primary text and buttons from screenshots, but it was not measured with an automated contrast tool in this audit.
- Motion reduction is handled in `Motion.tsx`, but hover movement on CTAs should still be checked with keyboard focus states.
- Screenshots alone cannot verify heading order for assistive tech fully, but DOM inspection showed one H1 followed by structured H2/H3 sections.

## Opportunity Areas

1. Clarify the unavailable phone path.
   - Change the header `전화상담` label to `전화번호 준비 중` or `문의 안내` until the number is available.
   - Alternatively, keep `전화상담` but add a small inline note in the final CTA: `전화번호 확정 전까지 상담 신청서를 남겨주세요.`

2. Strengthen trust before the first CTA decision.
   - Add a compact trust strip near the hero or assessment section: `원장 초진`, `다영역 발달 평가`, `보호자 해석상담`, `1회 치료 경험`.
   - This would help guardians understand the value before they click the external form.

3. Replace provisional public copy.
   - The therapist section should not say `실제 치료사 정보가 확정되면...` on the public page.
   - Use a polished placeholder such as `원장 초진과 분야별 치료팀이 아이의 발달 흐름을 함께 살핍니다.` and keep implementation notes out of user-facing copy.

4. Make program cards more scannable.
   - Add small iconography or concern tags, for example `표현`, `감각 조절`, `주의 집중`, `또래 관계`.
   - Keep icons simple and consistent; the current text-only cards are clean but not very memorable.

5. Add final-contact trust details as soon as available.
   - Address, operating hours, phone number, parking or map link should be added near the final CTA/footer.
   - This is especially important because guardians often need to judge logistics before submitting a form.

6. Add external-link and focus affordances.
   - Assessment CTA copy can include `상담 신청서로 이동` or an `aria-label` such as `초기 상담 평가지 작성 페이지로 이동`.
   - Add `focus-visible` styles for all buttons/links.

## Recommended Priority

1. Fix public provisional wording in therapist/reviews/package sections.
2. Clarify phone consultation state in the header and final CTA.
3. Add address, hours, phone, and map once confirmed.
4. Add visible focus states and external-destination labels.
5. Improve program cards with lightweight icons or tags.
6. Add a compact trust strip before or immediately after the hero.

## Evidence Limits

This audit used screenshots, DOM inspection, and link inspection only. It did not run automated accessibility tooling, screen reader testing, keyboard-only walkthrough, performance testing, or legal/medical advertising review. Review copy and testimonials should be checked against actual permission and relevant medical advertising rules before publication.
