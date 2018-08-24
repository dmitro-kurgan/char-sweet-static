const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'bundle': PATHS.source + '/bundle.js',
			'constructor': PATHS.source + '/constructor.js',
			// 'index': PATHS.source + '/pages/index/index.js',
			// 'blog': PATHS.source + '/pages/blog/blog.js',
			// 'candy-bar': PATHS.source + '/pages/candy-bar/candy-bar.js',
			// 'tasting': PATHS.source + '/pages/tasting/tasting.js',
			// 'order': PATHS.source + '/pages/order/order.js',
			// 'portfolio': PATHS.source + '/pages/portfolio/portfolio.js',
			// 'portfolio-pg-1': PATHS.source + '/pages/portfolio-pg-1/portfolio-pg-1.js',
			// 'news': PATHS.source + '/pages/news/news.js',
			// 'filling': PATHS.source + '/pages/filling/filling.js',
			// 'contacts': PATHS.source + '/pages/contacts/contacts.js',
			// 'constructor': PATHS.source + '/pages/constructor/constructor.js',
			// 'company': PATHS.source + '/pages/company/company.js',
			// 'comments': PATHS.source + '/pages/comments/comments.js',
			// 'types': PATHS.source + '/pages/types/types.js',
			// '404': PATHS.source + '/pages/404/404.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['bundle'],
				template: PATHS.source + '/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['bundle'],
				template: PATHS.source + '/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'candy-bar.html',
				chunks: ['bundle'],
				template: PATHS.source + '/candy-bar.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'tasting.html',
				chunks: ['bundle'],
				template: PATHS.source + '/tasting.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'order.html',
				chunks: ['bundle'],
				template: PATHS.source + '/order.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'portfolio.html',
				chunks: ['bundle'],
				template: PATHS.source + '/portfolio.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'portfolio-pg-1.html',
				chunks: ['bundle'],
				template: PATHS.source + '/portfolio-pg-1.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'news.html',
				chunks: ['bundle'],
				template: PATHS.source + '/news.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'filling.html',
				chunks: ['bundle'],
				template: PATHS.source + '/filling.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				chunks: ['bundle'],
				template: PATHS.source + '/contacts.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'constructor.html',
				chunks: ['bundle', 'constructor'],
				template: PATHS.source + '/constructor.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'company.html',
				chunks: ['bundle'],
				template: PATHS.source + '/company.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'comments.html',
				chunks: ['bundle'],
				template: PATHS.source + '/comments.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'types.html',
				chunks: ['bundle'],
				template: PATHS.source + '/types.pug'
			}),
			new HtmlWebpackPlugin({
				filename: '404.html',
				chunks: ['bundle'],
				template: PATHS.source + '/404.pug'
			}),
			// new HtmlWebpackPlugin({
			// 	filename: 'index.html',
			// 	chunks: ['index'],
			// 	template: PATHS.source + '/pages/index/index.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'blog.html',
			// 	chunks: ['blog'],
			// 	template: PATHS.source + '/pages/blog/blog.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'candy-bar.html',
			// 	chunks: ['candy-bar'],
			// 	template: PATHS.source + '/pages/candy-bar/candy-bar.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'tasting.html',
			// 	chunks: ['tasting'],
			// 	template: PATHS.source + '/pages/tasting/tasting.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'order.html',
			// 	chunks: ['order'],
			// 	template: PATHS.source + '/pages/order/order.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'portfolio.html',
			// 	chunks: ['portfolio'],
			// 	template: PATHS.source + '/pages/portfolio/portfolio.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'portfolio-pg-1.html',
			// 	chunks: ['portfolio-pg-1'],
			// 	template: PATHS.source + '/pages/portfolio-pg-1/portfolio-pg-1.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'news.html',
			// 	chunks: ['news'],
			// 	template: PATHS.source + '/pages/news/news.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'filling.html',
			// 	chunks: ['filling'],
			// 	template: PATHS.source + '/pages/filling/filling.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'contacts.html',
			// 	chunks: ['contacts'],
			// 	template: PATHS.source + '/pages/contacts/contacts.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'constructor.html',
			// 	chunks: ['constructor'],
			// 	template: PATHS.source + '/pages/constructor/constructor.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'company.html',
			// 	chunks: ['company'],
			// 	template: PATHS.source + '/pages/company/company.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'comments.html',
			// 	chunks: ['comments'],
			// 	template: PATHS.source + '/pages/comments/comments.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: 'types.html',
			// 	chunks: ['types'],
			// 	template: PATHS.source + '/pages/types/types.pug'
			// }),
			// new HtmlWebpackPlugin({
			// 	filename: '404.html',
			// 	chunks: ['404'],
			// 	template: PATHS.source + '/pages/404/404.pug'
			// }),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
			new webpack.ProvidePlugin({
				GoogleMapsLoader: 'google-maps'
			}),
			new webpack.ProvidePlugin({
				wow: 'wowjs',
				WOW: 'wowjs'
			})
		]
	},
	pug(),
	images(),
	fonts()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};