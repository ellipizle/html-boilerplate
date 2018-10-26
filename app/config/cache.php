<?php

return [

	/**
	 * @name    default_driver
	 * Specify the default cache driver to use
	 * @type    {String}
	 * @default    filesystem
	 */
	'default_driver' => 'filesystem',

	/**
	 * @name    memcache
	 * Memcache connexion settings
	 * @type    {Array}
	 */
	'memcache' => [
		/**
		 * @name    memcache.host
		 * Memcache host
		 * @type    {String}
		 * @default    localhost
		 */
		'host' => 'localhost',

		/**
		 * @name    memcache.port
		 * Memcache port
		 * @type    {Integer}
		 * @default    11211
		 */
		'port' => 11211
	],

	/**
	 * @name    memcached
	 * Memcached connexion settings
	 * @type    {Array}
	 */
	'memcached' => [
		/**
		 * @name    memcached.host
		 * Memcached host
		 * @type    {String}
		 * @default    localhost
		 */
		'host' => 'localhost',

		/**
		 * @name    memcached.port
		 * Memcached port
		 * @type    {Integer}
		 * @default    11211
		 */
		'port' => 11211
	],

	/**
	 * @name    redis
	 * Redis connexion settings
	 * @type    {Array}
	 */
	'redis' => [
		/**
		 * @name    redis.host
		 * Redis host
		 * @type    {String}
		 * @default    127.0.0.1
		 */
		'host' => '127.0.0.1',

		/**
		 * @name    redis.port
		 * Redis port
		 * @type    {Integer}
		 * @default    6379
		 */
		'port' => 6379
	]
];
