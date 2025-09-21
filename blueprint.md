
# Couples Web App Blueprint

## Overview

This document outlines the structure, design, and features of the Couples Web App. It serves as a single source of truth for the project, from its initial version to the current state.

## Implemented Features

### Version 1.0 (Initial Skeleton)

*   **Global Layout:**
    *   Top fixed header with Brand/Title, Language Switcher, and Notifications Bell.
    *   Bottom fixed navigation menu for mobile.
    *   Responsive main content area.
*   **Pages:**
    *   Landing Page
    *   Login
    *   Sign Up
    *   Pairing
    *   Home
    *   Questions
    *   Games
    *   Chat with AI
    *   Profile/Settings
    *   Legal (Terms & Privacy)
*   **Styling:**
    *   A vibrant, refreshing, and colorful UI.
    *   Mobile-first responsive design.
    *   Dark/light mode friendly.
*   **Internationalization (i18n):**
    *   Support for English (EN) and Hebrew (HE).
    *   Live language switcher with LTR/RTL support.

## Current Plan

The current plan is to build the frontend skeleton of the Couples Web App. This includes creating all the necessary pages with a global layout but without any backend logic. The focus is on the UI structure, navigation, and visual design.

### Steps:

1.  **Project Setup:**
    *   Configure Firebase server in `.idx/mcp.json`.
    *   Update global styles in `src/app/globals.css`.
2.  **Global Layout:**
    *   Create a root layout (`src/app/layout.tsx`) with a header and a footer.
    *   Implement a `Header` component with navigation links and a language switcher.
    *   Implement a `Footer` component with navigation links for mobile.
3.  **Page Creation:**
    *   Create all the required pages as separate React components under the `/src/app` directory.
    *   Each page will have a placeholder UI.
4.  **Styling and Design:**
    *   Apply a consistent and modern design across all pages.
    *   Ensure the layout is responsive across different screen sizes.
5.  **i18n Setup:**
    *   Implement a basic language switching mechanism.
