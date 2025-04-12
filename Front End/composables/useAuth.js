import { useAuthStore } from "~/stores/auth";
import { getBaseURL } from "./helpers";

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();

  // Login function
  async function login(credentials) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const res = await $fetch(`${getBaseURL()}/auth/login`, {
        method: "POST",
        body: credentials,
      });

      authStore.setUser(res.user);
      authStore.setToken(res.token);

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
      const baseURL = getBaseURL();

      const res = await $fetch(`${baseURL}/auth/signup`, {
        method: "POST",
        body: credentials,
      });

      authStore.setUser(res.user);
      authStore.setToken(res.token);

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
    router.push("/");
  }

  // Check if user is logged in (can be used in middleware)
  function checkAuth() {
    return authStore.isAuthenticated;
  }

  // Get current user
  function getUser() {
    return authStore.user;
  }

  // Update user profile
  async function updateProfile(updates) {
    authStore.setLoading(true);
    authStore.setError(null);

    try {
      const baseURL = getBaseURL();
      const token = authStore.token;

      const res = await $fetch(`${baseURL}/user/profile`, {
        method: "PUT",
        body: updates,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update local user data
      authStore.setUser({
        ...authStore.user,
        ...updates,
      });

      return res.user;
    } catch (error) {
      authStore.setError(error.message || "Failed to update profile");
      throw error;
    } finally {
      authStore.setLoading(false);
    }
  }

  return {
    login,
    signup,
    logout,
    checkAuth,
    getUser,
    updateProfile,
    loading: authStore.loading,
    error: authStore.error,
    isAuthenticated: authStore.isAuthenticated,
  };
}
