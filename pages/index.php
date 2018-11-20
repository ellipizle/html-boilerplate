<?php

require_once 'layout/header.php';

print Thorin::render_blade('organisms/welcome', [
  'title' => Thorin::i18n('default.metas.title'),
  'description' => Thorin::i18n('default.metas.description'),
  'image' => Thorin::url_asset('img/welcome.jpg')
]);

require_once 'layout/footer.php';
