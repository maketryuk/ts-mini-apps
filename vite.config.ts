import { defineConfig } from "vite";
import { resolve } from "path";
import pkg from './package.json'
import { log } from "console";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@maketryuk/tg-mini-apps',
            fileName: (format, name) => {
                if (format === "es") {
                    return `${name}.js`;
                }

                if (format === "umd") {
                    return `${name}.cjs`;
                }

                return `${name}.${format}`;
            },
        }
    }
});