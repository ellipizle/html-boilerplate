<?php

print Thorin::render_blade('layout/footer', [
	'scripts' => [
    Thorin::url_asset('js/app.js'),
    (Thorin::is_environment('development','testing')) ? Thorin::url_asset('js/template-stack.js') : null
	],
	'webfonts' => [
		'Roboto:300,400,800'
	],
	'html' => null
]);
