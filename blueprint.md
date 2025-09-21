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
  - `supabase.ts`: Supabase configuration and initialization.
- `.env.example`: Example file for environment variables.
- `.gitignore`: Specifies intentionally untracked files to ignore.

## Design and Features

- **Responsive Design**: The app uses a combination of a fixed header for desktop and a fixed footer for mobile to provide an optimal user experience on different devices.
- **Dark Mode**: The application supports a dark mode theme.
- **Component-Based Architecture**: The UI is built with reusable React components.
- **Authentication**: User authentication is handled by Supabase.
    - **Secure Key Management**: API keys for Supabase are stored securely using environment variables. A `.env.example` file is provided to show the required variables, and `.env.local` is included in the `.gitignore` file to prevent accidental exposure of keys.
    - **Improved Error Handling**: The Supabase initialization now includes a check for the required environment variables and provides a more descriptive error message if they are missing.
- **User Registration**: The signup page has been expanded to collect more user information. 
    - **Required Fields**: Name and email are required for registration.
    - **Optional Fields**: Users can optionally provide their Date of Birth, Sex, Sexual Orientation, and a special date like a wedding anniversary.
    - **User Metadata**: All the collected information is stored as user metadata in Supabase upon registration.
    - Upon successful registration, users are redirected to the pairing page.
- **User Login**: The login page allows existing users to sign in with their email and password. Upon successful login, they are redirected to their home page.
    - **Loading State**: The login button provides visual feedback, showing "Logging in..." and becoming disabled during the authentication process to prevent multiple submissions.
    - **Sign-up Link**: A link to the signup page is provided for users who do not yet have an account.
- **Account Pairing**: The pairing page allows users to connect their account with their partner's.
    - **Skip Option**: A "Skip for now" button is included on the pairing page. This allows a user who registers first to bypass this step and proceed to their home page, as their partner will not have a code yet.
- **Hydration Warning**: Suppressed a React hydration warning in the root layout.
- **Conditional Layout**: The header and footer are conditionally rendered based on the current route to provide a more focused user experience on the welcome, login, signup, and pairing pages.
