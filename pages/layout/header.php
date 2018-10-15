<?php

print Thorin::render_blade('layout/header', [
	'root_url' => Thorin::root_url(),
	'lang' => Thorin::get_language(),
  'charset' => 'utf-8',
  'viewport' => null,
	'title' => Thorin::lang('metas.title'),
	'description' => Thorin::lang('metas.description'),
	'keywords' => Thorin::lang('metas.keywords'),
	'sharing_image' => Thorin::asset_url('img/sharing.png'),
	'body_class' => null,
	'stylesheets' => [
		Thorin::asset_path('css/style.css')
	],
  'scripts' => [],
  'og' => true,
  'twitter' => true,
  'critical_css' => null,
  'google_tag_manager_id' => null,
	'html' => null
]);
