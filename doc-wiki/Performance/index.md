TrapCSS is the fastest and the most efficient css cleaner as proved by the benchmark.

## Input

**test.html**

- 18.8 KB minified
- 502 dom nodes via `document.querySelectorAll("*").length`

**styles.min.css**

- 27.67 KB combined, optimized and minified via [clean-css](https://github.com/jakubpawlowicz/clean-css)
- contents: Bootstrap's [reboot.css](https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap-reboot.css), an in-house flexbox grid, global layout, navbars, colors & page-specific styles. (the grid accounts for ~85% of this starting weight, lots of media queries & repetition)

## Output

<table>
    <thead>
        <tr>
            <th></th>
            <th>lib size w/deps</th>
            <th>output size</th>
            <th>reduction</th>
            <th>time elapsed</th>
            <th>unused bytes (test.html coverage)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th><strong>TrapCSS</strong></th>
            <td>
                58.4 KB<br>
                6 Files, 2 Folders
            </td>
            <td>6.58 KB</td>
            <td>76.15%</td>
            <td>21 ms</td>
            <td>575 / 8.5%</td>
        </tr>
        <tr>
            <th><a href="https://github.com/uncss/uncss">UnCSS</a></th>
            <td>
                13.5 MB<br>
                2,829 Files, 301 Folders
            </td>
            <td>6.72 KB</td>
            <td>75.71%</td>
            <td>385 ms</td>
            <td>638 / 9.3%</td>
        </tr>
        <tr>
            <th><a href="https://github.com/FullHuman/purgecss">Purgecss</a></th>
            <td>
                2.69 MB<br>
                560 Files, 119 Folders
            </td>
            <td>8.01 KB</td>
            <td>71.05%</td>
            <td>88 ms</td>
            <td>1,806 / 22.0%</td>
        </tr>
        <tr>
            <th><a href="https://github.com/purifycss/purifycss">PurifyCSS</a></th>
            <td>
                3.46 MB<br>
                792 Files, 207 Folders
            </td>
            <td>15.46 KB</td>
            <td>44.34%</td>
            <td>173 ms</td>
            <td>9,440 / 59.6%</td>
        </tr>
    </tbody>
</table>

**Notes**

- About 400 "unused bytes" are due to an explicit/shared whitelist, not an inability of the tools to detect/remove that CSS.
- About 175 "unused bytes" are due to vendor-prefixed (-moz, -ms) properties & selectors that are inactive in Chrome, which is used for testing coverage.
- Purgecss does not support attribute or complex selectors: [Issue #110](https://github.com/FullHuman/purgecss/issues/110).

A full **[Stress Test](https://github.com/leeoniya/dropcss/tree/master/test/bench)** is also available.