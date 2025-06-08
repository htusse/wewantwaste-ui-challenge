import React from 'react';
import { SkipCardProps } from '../types';

// Helper functions for UI formatting (matching SkipCard)
const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {

  const capacity = `${skip.size} cubic yards`;

  return (
    <div 
      className={`
        skip-card relative cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300
        ${isSelected 
          ? 'border-blue-500 bg-blue-50 selected ring-4 ring-blue-200' 
          : 'border-gray-200 bg-white hover:border-blue-300'
        }
      `}
      onClick={() => onSelect(skip)}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{skip.size} Yard Skip</h3>
          <p className="text-gray-600 text-sm">{skip.area}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">£{skip.price_before_vat}</div>
        </div>
      </div>

      {/* Capacity */}
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 rounded-full p-2 mr-3">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </div>
        <div>
          <div className="font-semibold text-gray-800">Capacity</div>
          <div className="text-sm text-gray-600">{capacity}</div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-700 mb-2">Features:</div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {skip.hire_period_days} days hire
          </span>
          {skip.allowed_on_road && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Road placement allowed
            </span>
          )}
          {!skip.allowed_on_road && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
              No road placement
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              Heavy waste accepted
            </span>
          )}
        </div>
      </div>

      {/* Additional Info */}
      <div className="border-t pt-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <div className="font-medium">Postcode</div>
            <div>{skip.postcode}</div>
          </div>
        </div>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4">
          <div className="bg-blue-500 rounded-full p-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipCard;
