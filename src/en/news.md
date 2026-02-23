---
layout: layouts/base.njk
title: News & Updates
lang: en
permalink: /en/news/
---
# News & Updates

<ul>
{% for post in collections.news %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> <small>({{ post.date | formatDate }})</small></li>
{% endfor %}
</ul>
