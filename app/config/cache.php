<?php

return [

	/**
	 * @name    DEFAULT_DRIVER
	 * Specify the default cache driver to use
	 * @type    {String}
	 * @default    filesystem
	 */
	'DEFAULT_DRIVER' => 'filesystem',

	/**
	 * @name    MEMCACHE
	 * Memcache connexion settings
	 * @type    {Array}
	 */
	'MEMCACHE' => [
		/**
		 * @name    MEMCACHE.HOST
		 * Memcache host
		 * @type    {String}
		 * @default    localhost
		 */
		'HOST' => 'localhost',

		/**
		 * @name    MEMCACHE.PORT
		 * Memcache port
		 * @type    {Integer}
		 * @default    11211
		 */
		'PORT' => 11211
	],

	/**
	 * @name    MEMCACHED
	 * Memcached connexion settings
	 * @type    {Array}
	 */
	'MEMCACHED' => [
		/**
		 * @name    MEMCACHED.HOST
		 * Memcached host
		 * @type    {String}
		 * @default    localhost
		 */
		'HOST' => 'localhost',

		/**
		 * @name    MEMCACHED.PORT
		 * Memcached port
		 * @type    {Integer}
		 * @default    11211
		 */
		'PORT' => 11211
	],

	/**
	 * @name    REDIS
	 * Redis connexion settings
	 * @type    {Array}
	 */
	'REDIS' => [
		/**
		 * @name    REDIS.HOST
		 * Redis host
		 * @type    {String}
		 * @default    127.0.0.1
		 */
		'HOST' => '127.0.0.1',

		/**
		 * @name    REDIS.PORT
		 * Redis port
		 * @type    {Integer}
		 * @default    6379
		 */
		'PORT' => 6379
	]
];
