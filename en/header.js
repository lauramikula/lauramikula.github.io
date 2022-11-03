// create template
const template_head = document.createElement("template");

// code for header
template_head.innerHTML = `

<header id="header">
  <div class="inner">
    <div class="image avatar"><img src="/images/avatar.png" alt="Laura Mikula picture" /></div>
    <h1>Laura Mikula</h1>
    <h2>Postdoctoral researcher</h2>
    <h2><i class="fas fa-map-marker-alt fa-fw"></i>York University</h2>
  </div>
  <div class="menu-wrap">
    <nav class="menu">
      <ul class="clearfix">
        <li><a href="/index.html#about-me">About Me</a></li>
        <li><a href="/en/academics.html">Academics</a></li>
        <li><a href="/en/publications.html">Publications</a></li>
        <li><a href="/en/media.html">Media</a></li>
        <li><a href="/index.html#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

`

document.body.appendChild(template_head.content);
