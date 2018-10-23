<?php

// // pages/... folder auto routes
$files = scandir('../pages');
$files = array_filter($files, function($file) {
  return $file != '..' && $file != '.' && $file != '.DS_Store' && ! is_dir('pages/'.$file);
});
foreach($files as $file) {
  $path = '/'.str_replace('.php','',$file);
  if ($path == '/index') $path = '/';
  $app->get($path, function($request, $response, array $args) use($file) {
    ob_start();
    require('../pages/'.$file);
    $content = ob_get_clean();
    $response->getBody()->write($content);
    return $response;
  });
}
