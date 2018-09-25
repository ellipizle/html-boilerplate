<?php

print Thorin::render_blade('layout/footer', [
	'scripts' => [
		Thorin::asset_path('js/app.js')
	],
	'webfonts' => [
		'Roboto:300,400,800'
	],
	'ga' => 'UA-XXXXX-Y',
	'html' => null
]);
