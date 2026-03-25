# Design Guidelines for Oniria Web Pages

This document outlines the design principles and components used in the current pages of the Oniria web project. These guidelines aim to ensure consistency and maintain the high-quality design standards when creating new pages.

---

## General Design Principles

1. **Modern and Minimalist Aesthetic**:
   - Use clean layouts with ample whitespace.
   - Avoid clutter and focus on essential content.

2. **Vibrant Gradients and Colors**:
   - Gradients are used extensively for backgrounds and accents.
   - Primary colors include shades of purple, blue, cyan, and green.
   - Subtle glowing effects are applied to enhance the premium feel.

3. **Responsive Design**:
   - All components and layouts should adapt seamlessly to different screen sizes.
   - Use grid systems (e.g., `grid-cols-2`, `grid-cols-4`) for flexible layouts.

4. **Interactive Animations**:
   - Use `motion` animations for transitions and hover effects.
   - Animations should feel smooth and natural, with spring-like easing.

5. **Typography**:
   - Use bold and large headings for emphasis.
   - Body text should be legible, with a focus on readability.

---

## Key Components and Patterns

### 1. **Hero Section**
- **Purpose**: Captures user attention with a bold headline and engaging visuals.
- **Features**:
  - Animated background effects (e.g., glowing circles, grid patterns).
  - Large, gradient-filled headings.
  - Subtle animations for text and buttons.
- **Example**: `HeroSection` in `src/app/[locale]/hero-section.tsx`.

### 2. **Feature Cards**
- **Purpose**: Highlight key features or benefits.
- **Features**:
  - Cards with hover effects (e.g., glow, scale-up).
  - Icons with gradient backgrounds.
  - Titles and descriptions with clear hierarchy.
- **Example**: `FeatureCards` in `src/app/[locale]/feature-cards.tsx`.

### 3. **How It Works Section**
- **Purpose**: Explain processes or workflows in a step-by-step manner.
- **Features**:
  - Numbered steps with icons and descriptions.
  - Hover effects for interactivity.
  - Connecting lines for visual flow.
- **Example**: `HowItWorks` in `src/app/[locale]/how-it-works.tsx`.

### 4. **Animated Cards**
- **Purpose**: Showcase dynamic content with animations.
- **Features**:
  - Motion-based animations for entry and hover states.
  - Icons and text with vibrant colors.
  - Background effects for depth.
- **Example**: `AnimatedCard` in `src/app/[locale]/animated-card.tsx`.

---

## Animation Guidelines

- **Container Animations**:
  - Use `staggerChildren` to create cascading effects.
  - Example: `containerVariants` in `AnimatedCard`.

- **Item Animations**:
  - Use spring-based transitions for smooth movements.
  - Example: `itemVariants` in `FeatureCards`.

- **Hover Effects**:
  - Add subtle scaling, rotation, or glow effects.
  - Ensure transitions are smooth and not overwhelming.

---

## Background Effects

- **Glowing Circles**:
  - Use semi-transparent gradients with blur for a glowing effect.
  - Example: Hero section background.

- **Grid Patterns**:
  - Add subtle grid overlays for texture.
  - Example: Hero section grid background.

- **Gradient Overlays**:
  - Apply gradients to enhance depth and visual interest.
  - Example: Workflow animation background.

---

## Typography

- **Headings**:
  - Use `text-5xl` or larger for main headings.
  - Apply gradient text styles for emphasis.

- **Body Text**:
  - Use `text-[#94a3b8]` for muted descriptions.
  - Maintain a comfortable line height for readability.

---

## Best Practices for New Pages

1. **Consistency**:
   - Reuse existing components where possible.
   - Follow the established color palette and typography.

2. **Accessibility**:
   - Ensure sufficient color contrast for text.
   - Add `aria-labels` and other accessibility attributes.

3. **Performance**:
   - Optimize animations for smooth performance.
   - Minimize the use of heavy assets.

4. **Testing**:
   - Test responsiveness on multiple devices.
   - Verify animations and interactions work as intended.

---

By adhering to these guidelines, new pages can maintain the cohesive and high-quality design of the Oniria web project.