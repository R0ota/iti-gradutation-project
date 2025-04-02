export function getBaseURL() {
  return import.meta.env.API_BASE_URL || 'http://localhost:5500';
}
