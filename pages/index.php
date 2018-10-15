<?php

require_once 'layout/header.php';

print Thorin::render_blade('welcome', [
	'title' => Thorin::faker()->sentence(10,20)
]);

require_once 'layout/footer.php';
