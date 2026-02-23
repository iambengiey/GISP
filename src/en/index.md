---
layout: layouts/base.njk
title: Home
description: Access Zimbabwe government digital services through a secure, accessible and citizen-first platform.
lang: en
permalink: /en/
---
<section class="hero">
  <h1>Government Internet Service Provider</h1>
  <p>GISP is Zimbabwe's trusted front door to online public services. Find what you need by life event, not by institution.</p>
  <div class="search-wrap" id="site-search">
    <label for="search-input">Search government information</label>
    <input id="search-input" data-search-input type="search" placeholder="Search services, pages and guidance">
    <ul data-search-results></ul>
  </div>
  <script defer src="/scripts/lunr.min.js"></script>
  <script defer src="/scripts/search.js"></script>
</section>

<section>
  <h2>Popular life-event services</h2>
  <div class="grid">
    <article class="card"><h3><a href="/en/services/#business">Start a business</a></h3><p>Registration, tax and compliance links.</p></article>
    <article class="card"><h3><a href="/en/services/#ids">IDs & civil registry</a></h3><p>Birth, national identity and passport services.</p></article>
    <article class="card"><h3><a href="/en/services/#education">Education</a></h3><p>School admissions, examinations and grants.</p></article>
    <article class="card"><h3><a href="/en/services/#health">Health</a></h3><p>Public health programmes and essential services.</p></article>
  </div>
</section>
