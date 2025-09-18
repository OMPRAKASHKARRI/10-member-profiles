# User Profiles React Application

A modern, responsive React application that displays user profiles fetched from the JSONPlaceholder API. Built with TypeScript, Tailwind CSS, and featuring a clean, professional design.

## 🌟 Features

- **Dynamic User Profiles**: Fetches and displays 10 user profiles from JSONPlaceholder API
- **Unique Avatars**: Generates personalized avatars using DiceBear API based on usernames
- **Responsive Design**: Fully responsive grid layout that works on all device sizes
- **Loading States**: Professional loading spinner with smooth animations
- **Error Handling**: Graceful error handling with retry functionality
- **Modern UI**: Clean card-based design with hover effects and micro-interactions
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Efficient data fetching and state management

## 🚀 Live Demo

**Live Application**: [https://user-profiles-react-jrev.bolt.host](https://user-profiles-react-jrev.bolt.host)

## 📸 Screenshots

### Main Application View
The application displays user profiles in a responsive grid layout with professional styling:

- **Header Section**: Clean header with application title and user count
- **User Cards**: Each card displays:
  - Unique avatar generated from username
  - Full name and username
  - Email address with mail icon
  - Phone number with phone icon
  - Website link (clickable)
  - Full address with location icon
  - Company name with building icon
- **Interactive Elements**: Hover effects, clickable links, and refresh button

### Loading State
Professional loading spinner with dual-ring animation and descriptive text.

### Error State
User-friendly error message with retry functionality when API calls fail.

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code linting and formatting

## 📋 API Endpoints

### Users Data
- **URL**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of 10 user objects

### Avatar Images
- **URL**: `https://avatars.dicebear.com/v2/avataaars/{username}.svg?options[mood][]=happy`
- **Method**: GET
- **Fallback**: UI Avatars API for error cases

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── UserCard.tsx     # Individual user profile card
│   ├── LoadingSpinner.tsx # Loading state component
│   └── ErrorMessage.tsx # Error state component
├── hooks/               # Custom React hooks
│   └── useUsers.ts      # Hook for user data management
├── services/            # API service layer
│   └── userService.ts   # User data fetching logic
├── types/               # TypeScript type definitions
│   └── User.ts          # User interface definitions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-profiles-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3B82F6) for main actions and highlights
- **Secondary**: Various accent colors for different icons
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green for online status indicators

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable font sizes with proper line spacing
- **Interactive Elements**: Hover states and transitions

### Layout
- **Grid System**: Responsive grid that adapts from 1 to 4 columns
- **Card Design**: Clean cards with subtle shadows and rounded corners
- **Spacing**: Consistent 8px spacing system throughout

## 🔧 Key Components

### UserCard Component
- Displays individual user information in a card format
- Handles avatar loading with fallback
- Includes hover effects and interactive elements
- Responsive design with proper text truncation

### LoadingSpinner Component
- Dual-ring animated spinner
- Descriptive loading text
- Centered layout with proper spacing

### ErrorMessage Component
- User-friendly error display
- Retry functionality
- Clear call-to-action button

### useUsers Hook
- Manages user data fetching and state
- Handles loading and error states
- Provides refetch functionality

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 4-column grid layout
- **Tablet**: 2-3 column grid layout
- **Mobile**: Single column layout with touch-friendly interactions

## 🔍 Data Schema

### User Object
```typescript
interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}
```

## 🚀 Deployment

The application is deployed on Bolt Hosting and can be accessed at:
[https://user-profiles-react-jrev.bolt.host](https://user-profiles-react-jrev.bolt.host)

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the user data API
- [DiceBear](https://avatars.dicebear.com/) for the avatar generation service
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you have any questions or need help with the application, please feel free to open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**