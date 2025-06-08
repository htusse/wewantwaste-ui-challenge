import React, { useState, useEffect } from 'react';
import { Skip } from '../types';
import { fetchSkipData } from '../services/api';
import SkipCard from './SkipCard';

// Helper functions for calculating total price including vat
const getTotalPrice = (skip: Skip): number => {
  return Math.round(skip.price_before_vat * (1 + skip.vat / 100));
};

const SkipSelector: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        const skipData = await fetchSkipData();
        setSkips(skipData);
        setError(null);
      } catch (err) {
        setError('Failed to load skip options. Please try again.');
        console.error('Error loading skips:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const handleSkipSelect = (skip: Skip) => {
    // Toggle selection: if the same skip is clicked, unselect it
    if (selectedSkip?.id === skip.id) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  const handleContinue = () => {
    if (selectedSkip) {
      setShowCheckoutModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowCheckoutModal(false);
  };

  const handleProceedToCheckout = () => {
    // TODO: Implement checkout logic
    setShowCheckoutModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading skip options...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Choose Your Skip Size</h1>
              <p className="text-gray-600 mt-1">Select the perfect skip for your project</p>
            </div>
            <div className="text-sm text-gray-500">
              📍 NR32, Lowestoft
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Skip Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={handleSkipSelect}
            />
          ))}
        </div>

        {/* Selection Summary */}
        {selectedSkip && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Selected Skip</h3>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-lg px-3 py-1">
                    <span className="font-semibold text-blue-800">{selectedSkip.size} Yard</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    £{getTotalPrice(selectedSkip)}
                  </div>
                  <div className="text-sm text-gray-500">inc. VAT</div>
                </div>
                <p className="text-gray-600 mt-1">
                  {selectedSkip.hire_period_days} days hire period in {selectedSkip.area}
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedSkip(null)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Change Selection
                </button>
                <button
                  onClick={handleContinue}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl font-semibold"
                >
                  Continue to Checkout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Confirmation Modal */}
        {showCheckoutModal && selectedSkip && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Confirm Your Selection</h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Skip Details */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-blue-100 rounded-lg px-3 py-1">
                      <span className="font-semibold text-blue-800">{selectedSkip.size} Yard Skip</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      £{getTotalPrice(selectedSkip)}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>📍 Location: {selectedSkip.area}</p>
                    <p>📅 Hire Period: {selectedSkip.hire_period_days} days</p>
                    <p>💰 Price: £{selectedSkip.price_before_vat} + £{Math.round(selectedSkip.price_before_vat * selectedSkip.vat / 100)} VAT</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={handleProceedToCheckout}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl font-semibold"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipSelector;
