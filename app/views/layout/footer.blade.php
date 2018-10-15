	@if (@$js_variables)
		<script>
			@foreach ($js_variables as $key=>$value)
				window.{{ $key }} = {!! json_encode($value) !!};
			@endforeach
		</script>
	@endif

	@if (@$stylesheets)
		<!-- Stylesheets -->
		@foreach($stylesheets as $stylesheet)
			@if (@$stylesheet)
				<link rel="stylesheet" href="{{ $stylesheet }}" type="text/css">
			@endif
		@endforeach
	@endif

	@if (@$scripts)
		<!-- Scripts -->
		@foreach($scripts as $script)
			@if (@$script)
				<script src="{{ $script }}"></script>
			@endif
		@endforeach
	@endif

	@if (@$webfonts)
		<!-- Webfonts -->
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
		<script>
			WebFont.load({
				google: {
					families: [
						@foreach ($webfonts as $webfont)
							'{{ $webfont }}',
						@endforeach
					]
				}
			});
		</script>
	@endif

	{!! @$html !!}

	</body>
</html>
