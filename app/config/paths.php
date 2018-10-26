<?php

return [
	/**
	 * @name 	document_root
	 * Specify the root path where your app is stored absolute to the server root folder.
	 * This is usually automatically setting up using the $_SERVER['DOCUMENT_ROOT']|$_SERVER['PWD'] variable
	 * Need to end with a trailing /
	 * @type 		{String}
	 * @default 	rtrim((isset($_SERVER['PWD'])) ? $_SERVER['PWD'] : $_SERVER['DOCUMENT_ROOT'], '/') . '/'
	 */
	'document_root' =>  rtrim((isset($_SERVER['PWD'])) ? $_SERVER['PWD'] : $_SERVER['DOCUMENT_ROOT'], '/') . '/',

	/**
	 * @name 		base
	 * Specify where the base folder of the project is stored absolute to the server root folder.
	 * This is not the DOCUMENT_ROOT. It represent the root of the files. The DOCUMENT_ROOT can be a subfolder of this one.
	 * Need to end with a trailing /
	 * @type  		{String}
	 * @default 	${paths.document_root}../
	 */
	'base' => '${paths.document_root}../',

	/**
	 * @name 		app
	 * Specify where the app files are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * @type 		{String}
	 * @default		${paths.base}app/
	 */
	'app' => '${paths.base}app/',

	/**
	 * @name 		assets
	 * Specify where the assets (images, etc...) are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * This path MUST be inside of the DOCUMENT_ROOT path
	 * This is bein used in functions like "t_asset_url", "t_asset_path", etc...
	 * @type 		{String}
	 * @default 	${paths.document_root}dist/
	 */
	'assets' => '${paths.document_root}dist/',

	/**
	 * @name 		cache_filesystem
	 * Specify where to store the filesystem cache
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_cache", etc...
	 * @type 		{String}
	 * default 		${paths.app}cache/filesystem/
	 */
	'cache_filesystem' => '${paths.app}cache/filesystem/',

	/**
	 * @name 		lang
	 * Specify where the lang files are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_lang", etc...
	 * @type 		{String}
	 * @default 	${paths.app}lang/
	 */
	'lang' => '${paths.app}lang/',

	/**
	 * @name 		images_cache
	 * Specify where the cache are stored absolute to the server root folder
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_optimize_image", etc...
	 * @type 		{String}
	 * @default 	${paths.app}cache/images/
	 */
	'images_cache' => '${paths.app}cache/images/',

	/**
	 * @name 		views
	 * Specify where the views are stored absolute to the server root folder.
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_render_blade", "t_render", etc...
	 * @type 		{String}
	 * @default 	${paths.app}views/
	 */
	'views' => '${paths.app}views/',

	/**
	 * @name 		cache_path
	 * Specify where the cache are stored absolute to the server root folder
	 * Need to end with a trailing /
	 * This is bein used in functions like "t_render_blade", etc...
	 * @type 		{String}
	 * @default 	${paths.app}cache/views/
	 */
	'views_cache' => '${paths.app}cache/views/'
];
