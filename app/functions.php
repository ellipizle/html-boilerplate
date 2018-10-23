<?php
// Functions file that will be loaded before any vendors from composer

/**
 * Inject livereload inside the page if the environment is development
 * @param    {String}    $html    The html where to inject livereload
 */
function injectLivereload($html) {

  // template stack injection
  if (Thorin::is_environment('development','testing')) {
    $html = str_replace('</body>', '
      <!-- template stack -->
      <script src="/dist/js/template-stack.js"></script>
      </body>
    ', $html);
  }

  // live reload injection
  if (Thorin::is_environment('development')) {
    $html = str_replace('</body>', '
      <!-- LiveReload -->
      <script>
        document.write(\'<script src="//\' + (location.host || \'localhost\').split(\':\')[0] + \':35729/livereload.js?snipver=1"></\' + \'script>\')
      </script>
      </body>
    ', $html);
  }

  // return the injected html
  return $html;
}
