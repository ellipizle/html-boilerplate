<?php

print Thorin::render_blade('layout/header', [
	'root_url' => Thorin::root_url(),
	'lang' => 'en',
  'charset' => 'utf-8',
  'viewport' => null,
	'title' => 'Coffeekraken HTML Boilerplate',
	'description' => 'Base HTML files and folder structure with complete build process (js, sass, image compression, etc...) built in',
	'keywords' => [
		'coffeekraken',
		'html',
		'boilerplate'
	],
	'sharing_image' => Thorin::asset_url('img/sharing.png'),
	'body_class' => null,
	'stylesheets' => [
		Thorin::asset_path('css/style.css')
	],
	'scripts' => [],
	// 'og' => (object) [
	// 	'url' => t_root_url(),
	// 	'title' => 'Coffeekraken HTML Boilerplate',
	// 	'description' => 'Base HTML files and folder structure with complete build process (js, sass, image compression, etc...) built in',
	// 	'image' => t_asset_url('img/sharing.png')
	// ],
	// 'twitter' => (object) [
	// 	'url' => t_root_url(),
	// 	'title' => 'Coffeekraken HTML Boilerplate',
	// 	'description' => 'Base HTML files and folder structure with complete build process (js, sass, image compression, etc...) built in',
	// 	'image' => t_asset_url('img/sharing.png')
  // ],
  'critical_css' => null,
  'google_tag_manager_id' => null,
	'html' => null
]);
