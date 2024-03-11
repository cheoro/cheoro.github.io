---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

List of peer-reviewed publications.
<div class="publications">
  <ol class="bibliography">
   <li>
     <div class="abbr">
       Publication Types
       <br>
       <abbr class="badge badge-conf" style="background-color:#b30000">Jour.</abbr>: Journal     
     </div>
     <div class="abbr">
       <br>
       <abbr class="badge badge-conf" style="background-color:#0080FF">Conf.</abbr>: Conference
     </div>
   </li>
  </ol>
{% bibliography -f {{ site.scholar.bibliography }} %}
</div>
