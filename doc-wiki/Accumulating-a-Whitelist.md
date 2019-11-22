Perhaps you want to take one giant CSS file and purge it against multiple HTML sources, thus retaining any selectors that appear in any HTML source. This also applies when using Puppeteer to invoke different application states to ensure that DropCSS takes every state into account before cleaning the CSS. The idea is rather simple:

1. Run DropCSS against each HTML source.
1. Accumulate a whitelist from each result.
1. Run DropCSS against an empty HTML string, relying only on the accumulated whitelist.

<!-- See [/demos/accumulate.js](/demos/accumulate.js): -->

%EXAMPLE: example/whitelist, ../src => dropcss%
%FORK-css example/whitelist%
