import { useAuthStore } from "~/stores/auth";

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();

  // Login function
  async function login(credentials) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      // Replace this with your actual API call
      // const response = await $fetch('/api/auth/login', {
      //   method: 'POST',
      //   body: credentials,
      // });

      // For demo purposes, we'll simulate a successful login
      // In a real application, you would use the API response
      const mockResponse = {
        user: {
          id: "1",
          name: "Demo User",
          username: "demouser",
          email: credentials.email,
          createdAt: new Date().toISOString(),
        },
        token: "mock_jwt_token",
      };

      authStore.setUser(mockResponse.user);
      authStore.setToken(mockResponse.token);

      // Redirect to home or dashboard
      router.push("/");
      return true;
    } catch (error) {
      authStore.setError(error.message || "Failed to login");
      return false;
    } finally {
      authStore.setLoading(false);
    }
  }

  // Signup function
  async function signup(credentials) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      // Replace this with your actual API call
      // const response = await $fetch('/api/auth/signup', {
      //   method: 'POST',
      //   body: credentials,
      // });

      // For demo purposes, we'll simulate a successful signup
      const mockResponse = {
        user: {
          id: "1",
          name: credentials.name,
          username: credentials.username,
          email: credentials.email,
          createdAt: new Date().toISOString(),
        },
        token: "mock_jwt_token",
      };

      authStore.setUser(mockResponse.user);
      authStore.setToken(mockResponse.token);

      // Redirect to home or dashboard
      router.push("/");
      return true;
    } catch (error) {
      authStore.setError(error.message || "Failed to create account");
      return false;
    } finally {
      authStore.setLoading(false);
    }
  }

  // Logout function
  function logout() {
    authStore.clearAuth();
    router.push("/login");
  }

  // Check if user is logged in (can be used in middleware)
  function checkAuth() {
    return authStore.isAuthenticated;
  }

  // Get current user
  function getUser() {
    return authStore.user;
  }

  return {
    login,
    signup,
    logout,
    checkAuth,
    getUser,
    loading: authStore.loading,
    error: authStore.error,
    isAuthenticated: authStore.isAuthenticated,
  };
}
