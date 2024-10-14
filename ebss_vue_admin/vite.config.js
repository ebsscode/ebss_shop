import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
	server:{
		port:8051
	},
	base:'./',
	plugins: [
		vue(),
		vueJsx()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
			// '@': path.resolve(__dirname, 'src')
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				charset: false,
				modifyVars: {
					"table-padding-vertical": "5px",
					"table-padding-horizontal": "3px",
					"modal-header-padding": "10px 20px",
					"modal-header-close-size": "40px",
					"modal-body-padding": "10px",
					"form-item-margin-bottom": "10px",
					"menu-item-height": "30px",
					"menu-inline-toplevel-item-height": "30px",
					"top-bar-height": "40px",
				},
			},
		},
	},
})
