import finsweetConfigs from '@finsweet/eslint-config';

export default [
  ...finsweetConfigs,
  {
    languageOptions: {
      globals: {
        Lenis: 'readonly',
        gsap: 'readonly',
        ScrollTrigger: 'readonly'
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-undef': ['error', { typeof: true }]
    }
  }
];
