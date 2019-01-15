<?php

print Thorin::render_twig('pages/not-found-page', [
  'layout' => require('layout/default.php'),
  'title' => 'Oups',
  'description' => 'The page you\'re looking for does not exist...'
]);
