<!doctype html>
<html lang="{{ $lang }}">
	<head>
		<!-- Config -->
		<meta charset="{{ $charset }}">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    @if (@$viewport)
      <meta name="viewport" content="{{ $viewport }}">
    @else
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    @endif

		<!-- Metas -->
		@if (@$title)
			<title>{{ $title }}</title>
		@endif
		@if (@$description)
			<meta name="description" content="{{ $description }}">
		@endif
		@if (@$keywords)
			<meta name="keywords" content="{{ implode(',', $keywords) }}">
		@endif

		@if (@$og !== false)
			<!-- Schema.org markup for Facebook -->
			@if (@$current_url)
				<meta property="og:url" content="{{ $current_url }}" />
			@endif
			<meta property="og:type" content="website" />
			@if (@$title)
				<meta property="og:title" content="{{ $title }}" />
			@endif
			@if (@$description)
				<meta property="og:description" content="{{ $description }}" />
			@endif
			@if (@$sharing_image)
				<meta property="og:image" content="{{ $sharing_image }}" />
			@endif
		@endif

		@if (@$twitter !== false)
			<!-- Schema.org markup for Twitter -->
			@if (@$current_url)
				<meta name="twitter:url" content="{{ $current_url }}">
			@endif
			@if (@$title)
				<meta name="twitter:title" content="{{ $title }}">
			@endif
			@if (@$description)
				<meta name="twitter:description" content="{{ $description }}">
			@endif
			@if (@$sharing_image)
				<meta name="twitter:image:src" content="{{ $sharing_image }}">
			@endif
		@endif

		<!-- Schema.org markup for Google+ -->
		@if (@$title)
			<meta itemprop="name" content="{{ $title }}">
		@endif
		@if (@$description)
			<meta itemprop="description" content="{{ $description }}">
		@endif
		@if (@$sharing_image)
			<meta itemprop="image" content="{{ $sharing_image }}">
		@endif

		@if (@$critical_css)
			<style>
				{!! $critical_css !!}
			</style>
		@endif

		@if (@$stylesheets)
			<!-- Stylesheets -->
			@foreach($stylesheets as $stylesheet)
				@if ($stylesheet)
					<link rel="stylesheet" href="{{ $stylesheet }}" type="text/css">
				@endif
			@endforeach
		@endif

		@if (@$scripts)
			<!-- Scripts -->
			@foreach($scripts as $script)
				@if ($script)
					<script src="{{ $script }}"></script>
				@endif
			@endforeach
		@endif

    {!! @$html !!}

		@if (@$google_tag_manager_id)
			<!-- Google Tag Manager -->
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','{{ $google_tag_manager_id }}');</script>
			<!-- End Google Tag Manager -->
		@endif

    @if (@$google_analytics_id)
      <!-- Global Site Tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id={{ $google_analytics_id }}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{{ $google_analytics_id }}');
      </script>
    @endif

	</head>
	<body class="{{ @$body_class }}">

		@if (@$google_tag_manager_id)
			<!-- Google Tag Manager (noscript) -->
			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ $google_tag_manager_id }}"
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
			<!-- End Google Tag Manager (noscript) -->
		@endif
