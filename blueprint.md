# CouplesApp Blueprint

## Overview

CouplesApp is a web application designed to help couples strengthen their relationship through various interactive features. It includes sections for answering questions, playing games, and chatting with an AI for relationship advice.

## Project Structure

- **/app**: Main directory for application routes.
  - **/components**: Reusable React components.
    - `Header.tsx`: The main header navigation for desktop.
    - `Footer.tsx`: The main footer navigation for mobile.
    - `ConditionalHeader.tsx`: A component that conditionally renders the header.
    - `ConditionalFooter.tsx`: A component that conditionally renders the footer.
  - `layout.tsx`: The root layout for the application.
  - `page.tsx`: The landing page.
  - **/home**: The user's home/dashboard page.
  - **/login**: The user login page.
    - `layout.tsx`: Custom layout for the login page, removing the footer.
  - **/signup**: The user signup page.
    - `layout.tsx`: Custom layout for the signup page, removing the footer.
  - **/pairing**: The page for users to pair their accounts.
    - `layout.tsx`: Custom layout for the pairing page, removing the footer.
  - **/questions**: The page for couples to answer questions.
  - **/games**: The page for couples to play games.
  - **/chat**: The page for users to chat with an AI.
  - **/profile**: The user's profile page.
- **/lib**:
  - `firebase.ts`: Firebase configuration and initialization.

## Design and Features

- **Responsive Design**: The app uses a combination of a fixed header for desktop and a fixed footer for mobile to provide an optimal user experience on different devices.
- **Dark Mode**: The application supports a dark mode theme.
- **Component-Based Architecture**: The UI is built with reusable React components.
- **Authentication**: User authentication is handled by Firebase.
- **Mock Login Functionality**: The login page currently features a mock login for development and testing purposes. Clicking the "Login" button will redirect the user directly to the home page, regardless of the input in the email and password fields. The Firebase authentication logic has been temporarily removed.
- **Hydration Warning**: Suppressed a React hydration warning in the root layout.
- **Conditional Layout**: The header and footer are conditionally rendered based on the current route to provide a more focused user experience on the welcome, login, signup, and pairing pages.
