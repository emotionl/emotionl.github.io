# Better-Scroll使用小例子

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      text-decoration: none;
    }

    .wrapper {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    .box {
      height: 10vh;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid black;
      font-size: 24px;
    }
  </style>
</head>

<body>
  <div>
    <div class="wrapper">
      <div class="box-list">
        <div class="box">BOX 01</div>
        <div class="box">BOX 02</div>
        <div class="box">BOX 03</div>
        <div class="box">BOX 04</div>
        <div class="box">BOX 05</div>
        <div class="box">BOX 06</div>
        <div class="box">BOX 07</div>
        <div class="box">BOX 08</div>
        <div class="box">BOX 09</div>
        <div class="box">BOX 10</div>
        <div class="box">BOX 11</div>
        <div class="box">BOX 12</div>
        <div class="box">BOX 13</div>
        <div class="box">BOX 14</div>
        <div class="box">BOX 15</div>
        <div class="box">BOX 16</div>
        <div class="box">BOX 17</div>
        <div class="box">BOX 18</div>
        <div class="box">BOX 19</div>
        <div class="box">BOX 20</div>
      </div>
    </div>
  </div>
  <script src="./bscroll.min.js"></script>
  <script>
    let wrapper = document.querySelector('.wrapper')
    let scroll = new BScroll(wrapper, {
      scrollX: true,
      scrollY: true,
      probeType: 3,
    })

    scroll.on('scroll', function () {
      console.log('on scroll')
    })
  </script>
</body>

</html>
```

