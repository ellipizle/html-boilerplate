<?php

print Thorin::render_twig('layout/_footer', [
	'scripts' => [
    Thorin::asset_url('js/app.js'),
    (Thorin::is_environment('development','testing')) ? Thorin::asset_url('js/template-stack.js') : null
	],
	'webfonts' => [
		'Roboto:300,400,800'
	],
	'html' => null
]);
