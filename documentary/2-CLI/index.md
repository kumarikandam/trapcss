## CLI

_DropCSS_ can be used from the CLI.

<argufy>types/arguments.xml</argufy>

For example, having these two files, we can use `dropcss` from the command line:

<table>
<tr>
  <th>HTML file</th>
  <th>CSS file</th>
</tr>
<tr>
  <td>

  %EXAMPLE: example/cli/index.html%
  </td>
  <td>

  %EXAMPLE: example/cli/style.css%
  </td>
</tr>
</table>

```console
trapcss:~$ dropcss example/cli/index.html -c example/cli/style.css
```

%FORK-css src/bin/dropcss example/cli/index.html -c example/cli/style.css%

The help can be accessed with the `-h` command:

%FORK src/bin/dropcss -h%

%~%