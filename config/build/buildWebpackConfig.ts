import path from 'path'
import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

	const { paths, mode } = options


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
	}
}