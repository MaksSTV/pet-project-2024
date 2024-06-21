import path from 'path'
import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

	const { paths, mode, isDev } = options


	return {
		mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contenthash].bundle.js",
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolve(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}