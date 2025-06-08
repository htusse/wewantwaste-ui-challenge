import axios from 'axios';
import { Skip } from '../types';

const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchSkipsByLocation = async (postcode: string, area: string): Promise<Skip[]> => {
  try {
    const response = await apiClient.get<Skip[]>('/skips/by-location', {
      params: {
        postcode,
        area
      }
    });
    
    // Return data
    return response.data;
    
  } catch (error) {
    console.error('Error fetching skip data:', error);
    
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(`API Error: ${error.response.status} - ${error.response.statusText}`);
      } else if (error.request) {
        throw new Error('Network Error: Unable to reach the server');
      } else {
        throw new Error(`Request Error: ${error.message}`);
      }
    }
    
    throw error;
  }
};

export const fetchSkipData = () => fetchSkipsByLocation('NR32', 'Lowestoft');