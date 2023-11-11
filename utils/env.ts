export enum ENV_KEY {
  // eslint-disable-next-line no-unused-vars
  BACKEND_URL = 'BACKEND_URL',
}

/**
 * Retrieves the value of the specified environment variable.
 *
 * @param {ENV_KEY} key - The key of the environment variable to retrieve.
 * @param {string | null} fallback - The fallback value to return if the environment variable is not found. Defaults to null.
 * @return {string | null} - The value of the environment variable, or the fallback value if it is not found.
 */
export const getEnv = (key: ENV_KEY): string | null => {
  switch (key) {
    case ENV_KEY.BACKEND_URL:
      return process.env[key] ?? null;
  }
};
