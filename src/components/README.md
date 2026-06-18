# Shared Components (`src/components/`)

This directory houses high-level layouts, shared components, and modals reused across E-Summit pages.

## Files Added

- **`SponsorLogo.jsx`**: Isolated component rendering SVG icons for partners (originally embedded directly inside `Home.jsx`).

## Pre-existing Files

- **`CheckoutModal.jsx`**: Handles ticket-purchasing forms and payments (refactored to utilize new UI primitives).
- **`OrderStatusModal.jsx`**: Allows tracking orders via telephone numbers (refactored to utilize UI primitives).
- **`Countdown.jsx`**: Visual countdown timer display showing weeks/days/hours remaining.
- **`Footer.jsx`**: Global application footer structure.
- **`Layout.jsx`**: Global layout wrapper containing Navigation, SmoothScroll, and the page transition overlay.
- **`Nav.jsx`**: Navigation bar containing menus and links (refactored to utilize `<TransitionLink>`).
- **`SmoothScroll.jsx`**: Integrates Lenis smooth-scrolling wrapper.
