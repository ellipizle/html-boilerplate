<?php

// set some headers
header("strict-transport-security: max-age=0"); // disable HSTS
header("Content-Type: text/html"); // fix bug with slim and some hosting

// report all errors for debuging purposes
error_reporting(E_ALL);

// bootstrap
require_once '../app/bootstrap.php';

// slim app
$configuration = [
  'settings' => [
      'displayErrorDetails' => true,
  ],
];
$c = new \Slim\Container($configuration);
$app = new \Slim\App($c);

// routes
require_once '../app/routes.php';

// remove trailing slash
$app->add(function ($request, $response, callable $next) {
  $uri = $request->getUri();
  $path = $uri->getPath();
  if ($path != '/' && substr($path, -1) == '/') {
    // permanently redirect paths with a trailing slash
    // to their non-trailing counterpart
    $uri = $uri->withPath(substr($path, 0, -1));
    if($request->getMethod() == 'GET') {
      return $response->withRedirect((string)$uri, 301);
    }
    else {
      return $next($request->withUri($uri), $response);
    }
  }
  return $next($request, $response);
});

// run the app
$app->run();
