import { THEME_STYLES } from './src/config/theme/theme'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default THEME_STYLES;

