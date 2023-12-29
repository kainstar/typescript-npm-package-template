import { defineConfig, defaultExclude } from 'vitest/config';

const coverageExclude = [...defaultExclude, 'commitlint.config.*', '.eslintrc.*'];

export default defineConfig({
  test: {
    coverage: {
      exclude: coverageExclude,
    },
  },
});
