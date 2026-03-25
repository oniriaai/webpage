# Best Practices for Oniria Web Development

This document consolidates the best practices learned during the development of the Oniria web project. These guidelines aim to ensure consistency, maintainability, and high-quality design and functionality across all pages.

---

## General Development Practices

1. **Component Reusability**:
   - Reuse existing components wherever possible to maintain consistency and reduce redundancy.
   - Follow the established folder structure for organizing components (e.g., `ui/`, `layout/`).

2. **Client-Side Navigation**:
   - Use `next/link` for navigation to ensure proper client-side routing in Next.js.
   - Replace `<a>` tags with `<Link>` components for internal links.

3. **Styling and Design**:
   - Adhere to the design principles outlined in the `design-guidelines.md` file.
   - Use vibrant gradients, glowing effects, and responsive layouts to maintain the modern aesthetic.
   - Ensure hover effects and animations are smooth and not overwhelming.

4. **Accessibility**:
   - Add `aria-labels` and ensure sufficient color contrast for text.
   - Use semantic HTML elements to improve accessibility.

5. **Performance Optimization**:
   - Optimize animations for smooth performance.
   - Minimize the use of heavy assets and test responsiveness on multiple devices.

---

## Page-Specific Practices

### Education Pages

1. **Course Cards**:
   - Include hover effects such as scaling, rotation, and glowing to enhance interactivity.
   - Use `motion` animations for smooth transitions.
   - Add `href` properties to course objects for navigation.

2. **Course Detail Pages**:
   - Add a back link to the main education page using `next/link`.
   - Use the `ArrowLeft` icon from `lucide-react` for the back link.
   - Style the back link with `text-purple-400` and hover effects to match the design guidelines.

3. **Typography**:
   - Use bold and large headings (`text-5xl`) for emphasis.
   - Apply muted colors (`text-[#94a3b8]`) for descriptions to maintain readability.

---

## Animation Guidelines

1. **Container Animations**:
   - Use `staggerChildren` for cascading effects.
   - Example: Animating course cards on the education page.

2. **Item Animations**:
   - Use spring-based transitions for smooth movements.
   - Example: Hover effects on feature cards.

3. **Hover Effects**:
   - Add subtle scaling, rotation, or glow effects.
   - Ensure transitions are smooth and not overwhelming.

---

By following these best practices, the Oniria web project can maintain a cohesive, high-quality user experience while ensuring scalability and maintainability.