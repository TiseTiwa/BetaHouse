const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://betahouse-backend-pr81.onrender.com/api";

// Get all properties
export const getAllProperties = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/properties`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch properties");
    }

    return data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

// Get properties with filters
export const getPropertiesByFilters = async (filters) => {
  try {
    const queryParams = new URLSearchParams();

    if (filters.location) {
      queryParams.append("location", filters.location);
    }
    if (filters.propertyType) {
      queryParams.append("propertyType", filters.propertyType);
    }
    if (filters.bedrooms) {
      queryParams.append("bedrooms", filters.bedrooms);
    }

    const response = await fetch(
      `${API_BASE_URL}/properties?${queryParams.toString()}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch properties");
    }

    return data;
  } catch (error) {
    console.error("Error fetching filtered properties:", error);
    throw error;
  }
};

// Get single property by ID
export const getPropertyById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/properties/${id}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch property");
    }

    return data;
  } catch (error) {
    console.error("Error fetching property:", error);
    throw error;
  }
};

// Create new property (admin only)
export const createProperty = async (propertyData) => {
  try {
    const token = localStorage.getItem("authToken");

    const response = await fetch(`${API_BASE_URL}/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(propertyData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to create property");
    }

    return data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
};

// Update property (admin only)
export const updateProperty = async (id, propertyData) => {
  try {
    const token = localStorage.getItem("authToken");

    const response = await fetch(`${API_BASE_URL}/properties/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(propertyData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to update property");
    }

    return data;
  } catch (error) {
    console.error("Error updating property:", error);
    throw error;
  }
};

// Delete property (admin only)
export const deleteProperty = async (id) => {
  try {
    const token = localStorage.getItem("authToken");

    const response = await fetch(`${API_BASE_URL}/properties/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to delete property");
    }

    return data;
  } catch (error) {
    console.error("Error deleting property:", error);
    throw error;
  }
};
