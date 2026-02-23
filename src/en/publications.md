---
layout: layouts/base.njk
title: Publications (Soft links)
lang: en
permalink: /en/publications/
---
# Publications

GISP does not mirror annual reports, budgets, gazettes or tender notices. Use these links to authoritative publishers.

<table class="table">
  <thead><tr><th>Title</th><th>Year</th><th>Publisher</th><th>Last updated</th><th>Links</th></tr></thead>
  <tbody>
  {% for item in publications %}
    <tr>
      <td>{{ item.title }}</td>
      <td>{{ item.year }}</td>
      <td>{{ item.publisher }}</td>
      <td>{{ item.last_updated }}</td>
      <td><a href="{{ item.html_url }}">HTML</a> · <a href="{{ item.pdf_url }}">PDF</a> · <a href="{{ item.source_url }}">Source</a></td>
    </tr>
  {% endfor %}
  </tbody>
</table>
