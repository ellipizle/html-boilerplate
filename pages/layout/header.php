<?php

print Thorin::render_twig('layout/header', [
  'root_url' => Thorin::root_url(),
  'current_url' => Thorin::current_url(),
  'lang' => Thorin::language(),
  'charset' => 'utf-8',
  'viewport' => null,
  'noindex' => Thorin::is_environment('development','testing'),
	'title' => Thorin::lang('default.metas.title'),
	'description' => Thorin::lang('default.metas.description'),
	'keywords' => Thorin::lang('default.metas.keywords'),
	'sharing_image' => Thorin::asset_url('img/sharing.png', true),
	'body_class' => null,
	'stylesheets' => [
		Thorin::asset_url('css/style.css')
	],
  'scripts' => [],
  'og' => true,
  'twitter' => true,
  'critical_css' => null,
  'google_tag_manager_id' => null,
  'google_analytics_id' => null,
	'html' => null
]);
