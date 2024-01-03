This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# KredX Demo Web

## Overview

Brief description of the project, its purpose, and any key features.

## Folder Structure

- `src/components/CapablityListing`: Contains components related to capability listings.
- `src/components/CaraouselList`: Contains components related to carousel lists.
- `src/components/HeroSection`: Contains components related to hero sections.
- `src/components/core`: Contains core components used across the application.
- `src/components/footer`: Contains components related to the footer.

## Best Practices

### Folder Structure

The project follows a modular folder structure, organized by features or components, enhancing code readability and maintainability.

### Configurations

Configuration files, if any, are placed at the root of the project for easy access. Example: `tailwind.config.js`.

### Core Components

Core components, like buttons, are located in a dedicated `core` folder. This promotes reusability and consistency in UI elements.

### Component Imports

Import paths use aliases (e.g., `@/public/src/components/...`) for cleaner and more robust import statements.

## Components

### CapablityListing

#### CapablityListingItem

This component represents an individual item in a capability listing. It follows best practices for component design and organization.

#### CapablityListing

This component is responsible for rendering a list of capabilities. It utilizes the `CapablityListingItem` component.

### CarouselList

This component displays a carousel list. It dynamically renders content based on the provided configuration.

### HeroSection

This component represents the hero section of the webpage. It contains introductory content, images, and CTAs.

### Button

The `Button` component is a core UI element that provides consistent styling and behavior for buttons across the application.

### Footer

This component represents the footer of the webpage, providing information or links relevant to the project.

## Dependencies

Taliwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
