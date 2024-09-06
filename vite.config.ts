import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'tg-mini-apps',
            fileName: 'tg-mini-apps'
        }
    }
});