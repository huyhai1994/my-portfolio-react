import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()], css: {
        modules: {
            /*TODO: localsConvention: "camelCase" specifies that CSS class names should be transformed to camelCase in the generated JavaScript object. This is useful for consistent naming conventions in JavaScript code.*/
            localsConvention: "camelCase"
        }
    }
})
