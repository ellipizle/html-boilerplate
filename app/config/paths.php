<?php

return [
	/**
	 * @name 	DOCUMENT_ROOT
	 * Specify the root path where your app is stored absolute to the server root folder.
	 * This is usually automatically setting up using the $_SERVER['DOCUMENT_ROOT']|$_SERVER['PWD'] variable
	 * Need to end with a trailing /
	 * @type 		{String}
	 * @default 	rtrim((isset($_SERVER['PWD'])) ? $_SERVER['PWD'] : $_SERVER['DOCUMENT_ROOT'], '/') . '/'
	 */
	'DOCUMENT_ROOT' =>  rtrim((isset($_SERVER['PWD'])) ? $_SERVER['PWD'] : $_SERVER['DOCUMENT_ROOT'], '/') . '/',

	/**
	 * @name 		BASE
	 * Specify where the base folder of the project is stored absolute to the server root folder.
	 * This is not the DOCUMENT_ROOT. It represent the root of the files. The DOCUMENT_ROOT can be a subfolder of this one.
	 * Need to end with a trailing /
	 * @type  		{String}
	 * @default 	${app.ROOT_PATH}../
	 */
	'BASE' => '${paths.DOCUMENT_ROOT}../',

	/**
	 * @name 		APP
	 * Specify where the app files are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * @type 		{String}
	 * @default		${paths.BASE}app/
	 */
	'APP' => '${paths.BASE}app/',

	/**
	 * @name 		ASSETS
	 * Specify where the assets (images, etc...) are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * This path MUST be inside of the DOCUMENT_ROOT path
	 * This is bein used in functions like "t_asset_url", "t_asset_path", etc...
	 * @type 		{String}
	 * @default 	${app.ROOT_PATH}dist/
	 */
	'ASSETS' => '${paths.DOCUMENT_ROOT}dist/',

	/**
	 * @name 		FILESYSTEM_CACHE
	 * Specify where to store the filesystem cache
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_cache", etc...
	 * @type 		{String}
	 * default 		${app.ROOT_PATH}app/cache/filesystem/
	 */
	'FILESYSTEM_CACHE' => '${paths.APP}cache/filesystem/',

	/**
	 * @name 		LANG
	 * Specify where the lang files are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_lang", etc...
	 * @type 		{String}
	 * @default 	${app.ROOT_PATH}app/lang/
	 */
	'LANG' => '${paths.APP}lang/',

	/**
	 * @name 		IMAGES_CACHE
	 * Specify where the cache are stored absolute to the server root folder
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_optimize_image", etc...
	 * @type 		{String}
	 * @default 	${app.ROOT_PATH}app/cache/views/images/
	 */
	'IMAGES_CACHE' => '${paths.APP}cache/images/',

	/**
	 * @name 		VIEWS
	 * Specify where the views are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_render_blade", "t_render", etc...
	 * @type 		{String}
	 * @default 	${app.ROOT_PATH}app/views/
	 */
	'VIEWS' => '${paths.APP}views/',

	/**
	 * @name 		CACHE_PATH
	 * Specify where the cache are stored absolute to the server root folder
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_render_blade", etc...
	 * @type 		{String}
	 * @default 	${app.ROOT_PATH}app/cache/views/
	 */
	'VIEWS_CACHE' => '${paths.APP}cache/views/'
];
