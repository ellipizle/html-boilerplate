<?php

print Thorin::render_twig('pages/not-found-page', [
  'head' => require('layout/head.php'),
  'foot' => require('layout/foot.php'),
  'title' => 'Oups',
  'description' => 'The page you\'re looking for does not exist...'
]);
