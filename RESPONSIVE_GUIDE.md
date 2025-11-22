# Responsive Design Quick Reference Guide

## Tailwind Breakpoints Used

```
sm: 640px   (tablets and larger phones)
md: 768px   (tablets)
lg: 1024px  (desktops)
xl: 1280px  (large desktops)
2xl: 1536px (extra large screens)
```

## Common Responsive Patterns Used

### 1. Responsive Text Sizes

```jsx
// Small text
className = "text-xs sm:text-sm";

// Medium text
className = "text-sm sm:text-base";

// Large text
className = "text-lg sm:text-xl lg:text-2xl";

// Extra large text
className = "text-2xl sm:text-3xl lg:text-5xl";
```

### 2. Responsive Padding

```jsx
// Horizontal padding
className = "px-4 sm:px-6 lg:px-10";

// Vertical padding
className = "py-3 sm:py-4 lg:py-6";

// All sides
className = "p-3 sm:p-4 lg:p-6";
```

### 3. Responsive Margins

```jsx
// Margin top
className = "mt-4 sm:mt-6 lg:mt-8";

// Margin bottom
className = "mb-6 sm:mb-8 lg:mb-12";

// Margin all
className = "m-4 sm:m-6 lg:m-8";
```

### 4. Responsive Layout

```jsx
// Flex direction (stack on mobile, row on desktop)
className = "flex flex-col sm:flex-row";

// Grid columns
className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

// Width responsive
className = "w-full sm:w-[95%] lg:w-[1238px]";
```

### 5. Responsive Gaps

```jsx
// Small gap
className = "gap-2 sm:gap-3 lg:gap-4";

// Medium gap
className = "gap-4 sm:gap-6 lg:gap-8";

// Large gap
className = "gap-6 sm:gap-8 lg:gap-[148px]";
```

### 6. Responsive Image Sizing

```jsx
// Image with responsive height
className = "h-48 sm:h-56 lg:h-64";

// Image with responsive width
className = "w-4 h-4 sm:w-5 sm:h-5";

// Object cover for proper scaling
className = "w-full h-full object-cover";
```

### 7. Responsive Display

```jsx
// Hide on mobile, show on desktop
className = "hidden lg:flex";

// Show on mobile, hide on desktop
className = "lg:hidden";

// Show on tablet and up
className = "hidden sm:block";
```

### 8. Responsive Button Sizing

```jsx
// Responsive padding
className = "px-4 sm:px-6 py-2 sm:py-3";

// Responsive width
className = "w-full sm:w-[200px] lg:w-[250px]";

// Responsive text size
className = "text-sm sm:text-base lg:text-lg";
```

## Mobile-First Approach

All responsive classes follow the mobile-first approach:

1. Start with mobile styles (no prefix)
2. Add tablet styles (sm: prefix)
3. Add desktop styles (lg: prefix)

Example:

```jsx
className = "text-sm sm:text-base lg:text-lg";
// Mobile: text-sm
// Tablet: text-base
// Desktop: text-lg
```

## Common Component Patterns

### Responsive Card

```jsx
<div className="rounded-lg sm:rounded-2xl overflow-hidden border hover:shadow-lg transition">
  <img className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
  <div className="p-3 sm:p-4">
    <h3 className="text-sm sm:text-lg font-semibold line-clamp-2">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-600">{description}</p>
  </div>
</div>
```

### Responsive Grid

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

### Responsive Navigation

```jsx
<nav className="flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 lg:px-10">
  <Logo />
  <Menu className="hidden lg:flex" />
  <MobileMenu className="lg:hidden" />
</nav>
```

### Responsive Form

```jsx
<form className="space-y-4 sm:space-y-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
    <input className="px-3 sm:px-4 py-2 sm:py-3" />
    <input className="px-3 sm:px-4 py-2 sm:py-3" />
  </div>
  <button className="w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
    Submit
  </button>
</form>
```

## Image Optimization Tips

1. **Use object-cover** for consistent aspect ratios
2. **Set explicit heights** for responsive scaling
3. **Use alt text** for accessibility
4. **Optimize image files** before deployment
5. **Use responsive widths** with max-width constraints

## Testing Responsive Design

### Viewport Sizes to Test

- 320px (small phone)
- 375px (iPhone)
- 640px (tablet portrait)
- 768px (tablet landscape)
- 1024px (desktop)
- 1440px (large desktop)

### Browser DevTools

- Chrome DevTools (F12)
- Firefox Developer Tools (F12)
- Safari Web Inspector (Cmd+Option+I)

## Performance Tips

1. **Minimize media queries** - Use Tailwind's built-in breakpoints
2. **Avoid unnecessary classes** - Only add responsive classes when needed
3. **Use CSS Grid** - More efficient than flex for complex layouts
4. **Optimize images** - Use appropriate sizes for each breakpoint
5. **Test on real devices** - Emulators don't always match real performance

## Accessibility Considerations

1. **Touch targets** - Minimum 44px x 44px on mobile
2. **Text contrast** - Maintain WCAG AA standards
3. **Font sizes** - Minimum 16px on mobile for readability
4. **Spacing** - Adequate padding for touch interaction
5. **Semantic HTML** - Use proper heading hierarchy

## Common Issues & Solutions

### Issue: Text too small on mobile

```jsx
// ❌ Wrong
className = "text-lg";

// ✅ Correct
className = "text-sm sm:text-lg";
```

### Issue: Layout breaks on tablet

```jsx
// ❌ Wrong
className = "flex gap-8";

// ✅ Correct
className = "flex flex-col sm:flex-row gap-4 sm:gap-8";
```

### Issue: Images distorted

```jsx
// ❌ Wrong
className = "w-full h-64";

// ✅ Correct
className = "w-full h-48 sm:h-56 lg:h-64 object-cover";
```

### Issue: Buttons too small on mobile

```jsx
// ❌ Wrong
className = "px-2 py-1";

// ✅ Correct
className = "px-4 sm:px-6 py-2 sm:py-3";
```
