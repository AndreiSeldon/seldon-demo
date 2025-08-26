/*****
 *
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 * 
 *****/
 
# Seldon Components

version: Public Alpha

This guide will help you understand how to use these components in your React application.

## Overview

Seldon components follow a consistent pattern that makes them easy to use and customize. Each component has:

- **Props interface**: Defines all available props with TypeScript types
- **Function signature**: Shows which props have defaults and which are conditional
- **Conditional rendering**: Some elements only render when explicitly provided
- **Style integration**: Built-in CSS classes with customization options

## Component Structure

### Basic Usage

Every Seldon component can be used in three ways:

```tsx
// 1. Default rendering (uses built-in content and styles)
<CardProduct />

// 2. Partial customization (override specific props)
<CardProduct 
  tagline={{ children: "New Product" }}
  titleProps={{ children: "Custom Title" }}
/>

// 3. Full customization (provide all props)
<CardProduct
  tagline={{ children: "Featured", className: "custom-tagline" }}
  titleProps={{ children: "Premium Product" }}
  button={{ onClick: () => alert("Clicked!") }}
  icon={{ icon: "material-star" }}
  label={{ children: "Buy Now" }}
/>
```

### Understanding Conditional vs Always-Rendered Elements

Components have two types of elements:

#### Always-Rendered Elements
These elements appear by default and get overridden when you provide props:

```tsx
// These elements will always render with default content
<CardProduct 
  tagline={{ children: "Custom tagline" }}  // Overrides default
  titleProps={{ children: "Custom title" }} // Overrides default
/>
```

#### Conditionally-Rendered Elements
These elements only appear when you explicitly provide them:

```tsx
// These elements only render when provided
<CardProductInline
  button2={{ onClick: () => alert("Button 2!") }}  // Will render
  button3={{}}                                      // Will NOT render (empty object)
  button7={{ onClick: () => alert("Button 7!") }}  // Will render
/>
```

**Key Rule**: If an element has conditional rendering (`{propName && (...)}` in the JSX), it requires meaningful content to appear.

## Function Signatures Guide

The function signature tells you which props are conditional:

```tsx
export function CardProductInline({
  textblockDetails = sdn.textblockDetails,  // ✅ Always rendered (has default)
  tagline,                                  // ⚠️  Conditional (no default)
  button2,                                  // ⚠️  Conditional (no default) 
  button4 = sdn.button4,                    // ✅ Always rendered (has default)
  // ...
}: CardProductInlineProps)
```

## Common Patterns

### 1. Customizing Text Content

```tsx
<CardProduct 
  tagline={{ children: "Limited Time Offer" }}
  titleProps={{ children: "Premium Headphones", htmlElement: "h2" }}
  description={{ children: "High-quality audio experience." }}
/>
```

### 2. Adding Interactive Elements

```tsx
<CardProductInline
  button={{ onClick: () => window.open("/product/123") }}
  icon={{ icon: "material-shopping-cart" }}
  label={{ children: "Add to Cart" }}
  button2={{ onClick: () => setFavorite(true) }}
  icon2={{ icon: "material-favorite" }}
  label2={{ children: "Save" }}
/>
```

### 3. Custom Styling

```tsx
<CardProductMixed
  className="my-custom-card"
  tagline={{ 
    children: "New Release",
    className: "highlight-text"
  }}
  style={{ 
    maxWidth: 400,
    margin: "20px auto"
  }}
/>
```

### 4. Conditional Features

```tsx
function ProductCard({ showActions, isLoggedIn }) {
  return (
    <CardProductInline
      tagline={{ children: "Product Name" }}
      titleProps={{ children: "Product Description" }}
      
      {/* Only show actions if enabled */}
      {...(showActions && {
        button2: { onClick: () => addToCart() },
        label2: { children: "Add to Cart" }
      })}
      
      {/* Only show favorites if logged in */}
      {...(isLoggedIn && {
        button7: { onClick: () => toggleFavorite() },
        icon7: { icon: "material-favorite" },
        label7: { children: "Save" }
      })}
    />
  )
}
```

## Icon System

Seldon components use Material Icons by default. Common icons include:

- `material-add` - Plus sign
- `material-favorite` - Heart
- `material-shopping-cart` - Shopping cart
- `material-arrow-forward` - Right arrow
- `material-star` - Star
- `material-check` - Checkmark

```tsx
<CardProduct 
  icon={{ icon: "material-star" }}
  icon2={{ icon: "material-favorite" }}
  icon3={{ icon: "material-shopping-cart" }}
/>
```

## Styling Integration

### CSS Classes

Every component includes CSS classes for styling:

```css
/* Global component styles */
.sdn-cardProduct { /* Base card styles */ }
.sdn-button { /* Base button styles */ }
.sdn-tagline { /* Base tagline styles */ }

/* Specific variant styles */
.sdn-button-3D4pvOBS { /* Specific button variant */ }
.sdn-textblockDetails-Njjvy0sD { /* Specific text block variant */ }
```

### Custom Styling

You can override styles in several ways:

```tsx
// 1. Component-level className
<CardProduct className="my-custom-card" />

// 2. Element-level className  
<CardProduct 
  tagline={{ 
    children: "Featured",
    className: "featured-tag"
  }}
/>

// 3. Inline styles
<CardProduct 
  style={{ backgroundColor: "#f0f0f0" }}
  tagline={{
    children: "Special",
    style: { color: "red", fontWeight: "bold" }
  }}
/>
```

## TypeScript Support

All components are fully typed. Use the exported interfaces for custom implementations:

```tsx
import { CardProductProps, ButtonProps, TaglineProps } from './components'

function CustomProduct(props: CardProductProps) {
  const buttonConfig: ButtonProps = {
    onClick: () => alert("Custom action!"),
    className: "custom-button"
  }
  
  return <CardProduct {...props} button={buttonConfig} />
}
```

## Best Practices

### 1. Start Simple
Begin with default components and gradually add customizations:

```tsx
// Start with this
<CardProduct />

// Then customize
<CardProduct tagline={{ children: "My Product" }} />

// Finally, full customization
<CardProduct 
  tagline={{ children: "My Product" }}
  button={{ onClick: handleClick }}
  icon={{ icon: "material-star" }}
/>
```

### 2. Use Conditional Rendering Wisely
Only provide props for conditional elements when you want them to appear:

```tsx
// ❌ Don't do this (empty objects render nothing)
<CardProductInline button2={{}} button3={{}} />

// ✅ Do this (provide meaningful content)
<CardProductInline 
  button2={{ onClick: handleAction }}
  label2={{ children: "Action" }}
/>
```

### 3. Leverage Default Content
Take advantage of built-in content and only override what you need:

```tsx
// This gets you a fully functional card with just title customization
<CardProduct titleProps={{ children: "My Custom Title" }} />
```

### 4. Maintain Accessibility
Always provide meaningful labels and ARIA attributes:

```tsx
<CardProduct 
  button={{ 
    onClick: handlePurchase,
    "aria-label": "Purchase this product",
    title: "Click to buy now"
  }}
  label={{ children: "Buy Now" }}
/>
```

## Troubleshooting

### Elements Not Rendering
- Check if the element is conditional (no default in function signature)
- Ensure you're providing meaningful content, not empty objects
- Verify that required nested props are included (e.g., `icon` for buttons)

### Styling Issues
- Import the `styles.css` file in your app
- Check CSS class conflicts with your existing styles
- Use browser dev tools to inspect generated class names

### TypeScript Errors
- Ensure you're importing the correct prop interfaces
- Check that all required properties are provided
- Use optional chaining for nested props: `button?.onClick`

## Getting Help

Your exported components include:
- `Fonts.tsx` - Font loading component  
- `styles.css` - Complete stylesheet
- Individual component files with full TypeScript definitions

For more information about Seldon, visit [seldon.app](https://seldon.app)
