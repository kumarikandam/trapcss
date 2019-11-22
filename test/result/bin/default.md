## keeps span
<html>
  <body>
    <span>test</span>
  </body>
</html>

/* css */
<style>
  span {
    color: green;
  }
</style>
/**/

/* stdout */
<style>
  span{color: green;}
</style>
/**/

## removes div
<html>
  <body>
    <span>test</span>
  </body>
</html>

/* css */
<style>
  span {
    color: yellow;
  }
  div {
    color: green;
  }
</style>
/**/

/* stdout */
<style>
  span{color: yellow;}
</style>
/**/