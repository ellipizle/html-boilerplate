<?php

print Thorin::render_blade('layout/header', [
  'root_url' => Thorin::url_root(),
  'current_url' => Thorin::url_current(),
  'lang' => Thorin::i18n_language(),
  'charset' => 'utf-8',
  'viewport' => null,
  'noindex' => Thorin::is_environment('development','testing'),
	'title' => Thorin::i18n('default.metas.title'),
	'description' => Thorin::i18n('default.metas.description'),
	'keywords' => Thorin::i18n('default.metas.keywords'),
	'sharing_image' => Thorin::url_asset('img/sharing.png', true),
	'body_class' => null,
	'stylesheets' => [
		Thorin::url_asset('css/style.css')
	],
  'scripts' => [],
  'og' => true,
  'twitter' => true,
  'critical_css' => null,
  'google_tag_manager_id' => null,
  'google_analytics_id' => null,
	'html' => null
]);
