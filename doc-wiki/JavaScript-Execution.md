_DropCSS_ does not load external resources or execute `<script>` tags, so your HTML must be fully formed (or SSR'd). Alternatively, you can use [Puppeteer](https://github.com/GoogleChrome/puppeteer) and a local http server to get full `<script>` execution.

[Here's a 35 line script](/examples/execution.js) which does exactly that:

%EXAMPLE: example/execution, ../src => dropcss%

%FORK-js example/execution%