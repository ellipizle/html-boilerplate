<?php

print Thorin::render_twig('pages/welcome-page', [
  'head' => require('layout/head.php'),
  'foot' => require('layout/foot.php'),
  'title' => Thorin::lang('default.metas.title'),
  'description' => Thorin::lang('default.metas.description'),
  'image' => Thorin::asset_url('img/welcome.jpg'),
  'button' => [
    'label' => 'Hello World'
  ]
]);
