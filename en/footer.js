// create template
const template_foot = document.createElement("template");

// code for footer
template_foot.innerHTML = `

<footer id="footer">
  <div class="inner">
    <ul class="icons">
      <li><a href="https://scholar.google.fr/citations?user=SbpVBVQAAAAJ&hl=fr" class="icon ai-google-scholar"><span class="label">Google Scholar</span></a></li>
      <li><a href="https://researchgate.net/profile/Laura-Mikula-2" class="icon ai-researchgate"><span class="label">ResearchGate</span></a></li>
      <li><a href="https://github.com/lauramikula" class="icon fa-github"><span class="label">Github</span></a></li>
      <li><a href="https://linkedin.com/in/lauramikula" class="icon fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
      <li><a href="https://twitter.com/MikulaLaura" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
      <li><a href="mailto:mikulal@yorku.ca" class="icon fas fa-at"><span class="label">Email</span></a></li>
    </ul>
    <ul class="copyright">
      <li>&copy; Laura Mikula</li>
      <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      <li>Header image: <a href="https://www.freepik.com/free-vector/science-template_1081078.htm">vilmosvarga</a></li>
    </ul>
  </div>
</footer>

`

document.body.appendChild(template_foot.content);
