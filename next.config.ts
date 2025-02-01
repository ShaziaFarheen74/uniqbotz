
import type { NextConfig } from 'next';
import i18nConfig from './next-i18next.config'; // Import the next-i18next config

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SERVICE_ID: 'service_qpn77lc',
    NEXT_PUBLIC_TEMPLATE_ID_MESSAGE: 'template_8xs7gjc',
    NEXT_PUBLIC_USER_ID: 'qowN6yVHcr_GyX0aw',
  },
  i18n: i18nConfig.i18n, // Add i18n configuration here
};

export default nextConfig;
