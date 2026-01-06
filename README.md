# Office Calendar Booking System

A modern, full-featured office appointment booking system built with Next.js, React, and TypeScript. This application allows users to book visits for various administrative services and provides an admin dashboard for managing appointments.

## Features

### Public Booking System
- **Multi-step booking process** with a visual stepper
  - Step 1: Date and time slot selection
  - Step 2: Personal information collection
  - Step 3: Booking confirmation
  - Step 4: Success page
- **Interactive calendar** for date selection
- **Time slot selection** with availability status
- **Service type selection** (ID card, residential registration, vehicle registration, voting registration)
- **Form validation** for user data
- **Visit cancellation** via unique cancellation links

### Admin Dashboard
- **Admin authentication** with session management
- **Dashboard overview** of all visits
- **Visit management** with filtering capabilities
- **Day management**:
  - Open/close days
  - Block/unblock time slots
- **Visit cancellation** from admin panel
- **Date range filtering** for viewing visits

## Tech Stack

- **Framework**: Next.js 16.0.10
- **UI Library**: React 19.2.1
- **Language**: TypeScript 5
- **Styling**: SCSS (Sass)
- **Date Handling**: dayjs, react-day-picker
- **Notifications**: react-toastify
- **Build Tool**: Webpack (with Turbopack support)
- **SVG Handling**: @svgr/webpack

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd office-calendar
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
yarn build
yarn start
```

## Project Structure

```
office-calendar/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (routes)/          # Route groups
│   │   │   ├── admin/         # Admin pages
│   │   │   ├── cancel/        # Visit cancellation pages
│   │   │   └── MainPage.tsx   # Main booking page
│   │   ├── api/               # API routes
│   │   │   ├── admin/         # Admin API endpoints
│   │   │   └── auth/          # Authentication endpoints
│   │   └── pages/             # Booking flow pages
│   ├── components/            # Reusable React components
│   ├── models/                # TypeScript type definitions
│   ├── api/                   # API client utilities
│   ├── hooks/                 # Custom React hooks
│   └── utils/                 # Utility functions
├── public/                    # Static assets
└── styles/                    # Global styles
```

## API Endpoints

### Public Endpoints
- `GET /public/days` - Get all available days
- `GET /public/days/:day` - Get specific day details
- `POST /public/visits` - Book a visit

### Visit Management
- `GET /visits/:day/visits` - Get visits for a specific day
- `POST /visits/:visitId/cancel` - Cancel a visit

### Admin Endpoints
- `POST /auth/login` - Admin login
- `POST /auth/logout` - Admin logout
- `POST /admin/days/:day/close` - Close a day
- `POST /admin/days/:day/open` - Open a day
- `POST /admin/days/:day/slots/block` - Block time slots
- `POST /admin/days/:day/slots/unblock` - Unblock time slots
- `GET /admin/getReservedVisits` - Get all reserved visits

## Visit Types

The system supports the following visit types:
- **ID Card** (Wyrobienie dowodu osobistego)
- **Residential Registration** (Meldunek)
- **Vehicle Registration** (Rejestracja Pojazdu)
- **Voting Registration** (Zapisanie do spisu wyborczego)

## Slot Status

Time slots can have the following statuses:
- `AVAILABLE` - Available for booking
- `BOOKED` - Already booked
- `CANCELLED` - Cancelled
- `BLOCKED` - Blocked by admin
- `RESERVED` - Reserved by a user

## Development

### Available Scripts

- `yarn dev` - Start development server with webpack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

### Code Style

The project uses ESLint with Next.js configuration. Make sure to run the linter before committing:

```bash
yarn lint
```

## Features in Detail

### Booking Flow

1. **Date Selection**: Users select an available date from the calendar
2. **Time Slot Selection**: Users choose from available time slots for the selected date
3. **Personal Information**: Users fill in their details (name, surname, email, phone, service type)
4. **Confirmation**: Review booking details before submission
5. **Success**: Confirmation page with booking details

### Admin Features

- View all reserved visits with filtering options
- Filter by date range
- Cancel visits
- Manage day availability (open/close)
- Block or unblock specific time slots
- Secure admin authentication

## Configuration

The project uses Next.js configuration with:
- React Compiler enabled
- Custom webpack configuration for SVG handling
- Turbopack support

## License

This project is private and proprietary.

## Contributing

This is a private project. For any issues or questions, please contact the project maintainers.
