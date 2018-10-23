<?php

return [
	/**
	 * @name 	PROTOCOL
	 * Specify the protocol used to request the script. This is usually automatically setting up
	 * @type 		{String}
	 * @default 	http:// | https://
	 */
	'PROTOCOL' => (!empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS'] == 'on')) ? 'https://' : 'http://',

	/**
	 * @name 	DOMAIN
	 * Specify the domain under which the script has been requested. This is usually automatically setting up
	 * @type 		{String}
	 * @default 	$_SERVER['HTTP_HOST']
	 */
	'DOMAIN' => @$_SERVER['HTTP_HOST'],

	/**
	 * @name 	ROOT_URL
	 * Specify the root url under which the script has been requested. This is usually automatically setting up
	 * @type 		{String}
	 * @default 	${app.PROTOCOL}${app.DOMAIN}
	 */
	'ROOT_URL' =>  '${app.PROTOCOL}${app.DOMAIN}',

	/**
	 * @name    	ENVIRONMENT
	 * Specify the environment to return in function like `t_environment`, `t_is_environment`, etc...
	 * @type  		{String}
	 * @default 	(getenv('ENVIRONMENT')) ? getenv('ENVIRONMENT') : 'production'
	 */
	'ENVIRONMENT' =>  (getenv('ENVIRONMENT')) ? getenv('ENVIRONMENT') : 'production'
];
