const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  // Set auth token
  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  // Remove auth token
  removeToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  // Get auth token
  getToken() {
    return this.token || localStorage.getItem('token');
  }

  // Generic request handler
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add auth token if available
    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(userData) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (data.token) {
      this.setToken(data.token);
    }
    
    return data;
  }

  async login(credentials) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (data.token) {
      this.setToken(data.token);
    }
    
    return data;
  }

  async getProfile() {
    return await this.request('/auth/profile', {
      method: 'GET',
    });
  }

  async updateProfile(userData) {
    return await this.request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    this.removeToken();
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  }
}

// Export singleton instance
export default new ApiService();