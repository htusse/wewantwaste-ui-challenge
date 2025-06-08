# WeWantWaste Skip Size Selection - UI Challenge

A modern, responsive redesign of the "choose your skip size" page for WeWantWaste, built with React and TypeScript.

## 🚀 Live Demo

[View Live Demo](https://your-demo-link-here.netlify.app)

## 📋 Challenge Overview

This project is a complete visual redesign of WeWantWaste's skip size selection page while maintaining all original functionality. The goal was to create a modern, user-friendly interface that works seamlessly across all devices.

### Original Requirements
- **Framework**: React with TypeScript
- **API Integration**: Uses `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- **Functionality**: Maintain all original features
- **Responsiveness**: Mobile and desktop compatibility
- **Design**: Complete visual overhaul

## ✨ Key Features

### 🎨 Modern Design
- **Clean, minimalist interface** with gradient backgrounds
- **Card-based layout** for easy skip comparison
- **Smooth animations** and hover effects
- **Visual hierarchy** with clear pricing and information display

### 📱 Responsive Design
- **Mobile-first approach** with responsive grid layouts
- **Adaptive typography** and spacing
- **Touch-friendly interactions** for mobile devices
- **Optimized for all screen sizes**

### 🔧 Enhanced UX
- **Popular skip highlighting** with badges
- **Detailed skip information** including dimensions and features
- **Visual selection indicators** with smooth transitions
- **Helpful guidance section** for choosing the right skip size
- **Loading states** and error handling

### 💻 Technical Excellence
- **TypeScript** for type safety
- **Component-based architecture** for maintainability
- **API integration** with error handling
- **Clean, organized code structure**

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── SkipCard.tsx          # Individual skip display card
│   └── SkipSelector.tsx      # Main selection interface
├── services/
│   └── api.ts               # API integration and mock data
├── types/
│   └── index.ts             # TypeScript interfaces
└── App.tsx                  # Main application component
```

### Key Components

#### SkipCard
- Displays individual skip information
- Handles selection state and interactions
- Shows pricing, dimensions, and features
- Responsive design with hover effects

#### SkipSelector
- Main orchestration component
- Manages skip data loading and selection state
- Provides selection summary and checkout flow
- Includes helpful guidance section

#### API Service
- Fetches data from WeWantWaste API
- Handles error states with detailed error messages
- Provides proper error categorization (network, server, request errors)
- Uses axios with timeout and proper configuration

## 🛠️ Technology Stack

- **React 19.1.0** - Modern React with latest features
- **TypeScript 4.9.5** - Type safety and better development experience
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Axios 1.9.0** - HTTP client for API requests
- **Modern ES6+** - Latest JavaScript features

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/htusse/wewantwaste-ui-challenge.git
   cd wewantwaste-ui-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎯 Design Decisions

### Visual Design
- **Gradient backgrounds** create depth and modern appeal
- **Card-based layout** makes comparison easy and intuitive
- **Color coding** helps users quickly identify different skip types
- **Consistent spacing** and typography create visual harmony

### User Experience
- **Progressive disclosure** - show essential info first, details on demand
- **Clear visual hierarchy** guides users through the selection process
- **Immediate feedback** with selection states and hover effects
- **Helpful guidance** reduces decision paralysis

### Technical Approach
- **Component composition** for reusability and maintainability
- **TypeScript interfaces** ensure data consistency
- **Error boundaries** and loading states for robust UX
- **Responsive design** using Tailwind's utility classes

## 📊 Features Comparison

| Feature | Original | Redesigned |
|---------|----------|------------|
| Visual Appeal | Basic | Modern gradient design |
| Mobile Experience | Limited | Fully responsive |
| Skip Information | Basic | Comprehensive with dimensions |
| Selection Feedback | Minimal | Rich visual indicators |
| User Guidance | None | Helpful selection guide |
| Loading States | Basic | Smooth animations |
| Error Handling | Basic | User-friendly messages |

## 🔮 Future Enhancements

- **Skip size calculator** based on project type
- **Image gallery** for each skip size
- **Availability calendar** integration
- **Price comparison** with competitors
- **User reviews** and ratings
- **Accessibility improvements** (WCAG compliance)
- **Performance optimizations** (lazy loading, caching)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is created as part of a UI challenge for WeWantWaste. All rights reserved.

## 👨‍💻 Developer

Created with ❤️ for the WeWantWaste UI Challenge

---

*This project demonstrates modern React development practices, responsive design principles, and user-centered design thinking.*
