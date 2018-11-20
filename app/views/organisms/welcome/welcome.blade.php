<video class="video video--fullscreen" autoplay loop muted>
  <source src="data/disaster.mp4" type="video/mp4">
</video>
<div class="card card--centered">
  <h1 class="h1 m-b">
    {{ $title }}
  </h1>
  <p class="p p--lead m-b">
    <s-icon icon="address-book"></s-icon>
    {{ $description }}
  </p>
  <img src="{{ $image }}" />
</div>
