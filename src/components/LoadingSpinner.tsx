import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
          {/* Inner ring */}
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-600">Loading user profiles...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;