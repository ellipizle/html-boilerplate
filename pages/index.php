<?php

require_once 'layout/header.php';

print Thorin::render_blade('organisms/welcome', [
  'title' => Thorin::lang('default.metas.title'),
  'description' => Thorin::lang('default.metas.description'),
  'image' => Thorin::asset_url('img/welcome.jpg')
]);

require_once 'layout/footer.php';
