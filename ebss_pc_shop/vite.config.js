import {fileURLToPath, URL} from 'node:url'
import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
	server:{
		port:2000
	},
	base:'./',
	plugins: [
		vue(),
		vueJsx()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				charset: false,
				modifyVars: {
				},
				additionalData:  `@import "${resolve(__dirname, 'src/assets/var.less')}";`
			},
		},
	},
})
