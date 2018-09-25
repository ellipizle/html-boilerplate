<?php

require_once 'layout/header.php';

print Thorin::render_blade('welcome', [
	'title' => 'Hello World'
]);

require_once 'layout/footer.php';
