import React from 'react';
import { User } from '../types/User';
import { Mail, Phone, Globe, MapPin, Building } from 'lucide-react';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
  const fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100">
      {/* Avatar and Name */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <img
            src={avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded-full bg-gray-100 border-2 border-blue-100"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=3B82F6&color=fff&size=64`;
            }}
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-gray-700">
          <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span className="text-sm truncate">{user.email}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-700">
          <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span className="text-sm">{user.phone}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-700">
          <Globe className="w-4 h-4 text-purple-500 flex-shrink-0" />
          <a 
            href={`https://${user.website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 truncate hover:underline"
          >
            {user.website}
          </a>
        </div>

        <div className="flex items-start space-x-3 text-gray-700">
          <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <span className="text-sm leading-relaxed">{fullAddress}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-700">
          <Building className="w-4 h-4 text-orange-500 flex-shrink-0" />
          <span className="text-sm font-medium">{user.company.name}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;