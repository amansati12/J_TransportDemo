---
title: Truck Fleet for Goods Carrier and Cargo Service
description: View fleet options for truck transport, full truck load, part load transport, commercial goods delivery, cargo service and parcel delivery.
permalink: /fleet/
---

<section class="page-hero bg-navy text-white">
  <div class="container">
    <p class="eyebrow text-warning">Our fleet</p>
    <h1>Reliable vehicles for small parcels, cargo and full truck load movement.</h1>
    <p>Our fleet network helps match your cargo size, route distance, loading method and delivery deadline.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="row g-4">
      {% assign fleet = "Pickup Truck|500 kg - 1 ton|Local parcel delivery, shop stock and compact cargo.;Mini Truck|1 ton - 2 ton|City transport, e-commerce cargo and small commercial loads.;14 ft Truck|3 ton - 5 ton|Intercity goods transport and medium cargo.;17 ft Truck|5 ton - 7 ton|Warehouse transfer and distributor dispatches.;20 ft Container|6 ton - 9 ton|Secure cargo service for boxed commercial goods.;32 ft Container|9 ton - 16 ton|Full truck load service and long-distance business logistics." | split: ";" %}
      {% for item in fleet %}
        {% assign truck = item | split: "|" %}
        <div class="col-md-6 col-lg-4" data-reveal>
          <article class="fleet-detail-card">
            <!-- Replace assets/images/truck-fleet.svg with real fleet photos or assign unique image files per vehicle. -->
            <img src="{{ '/assets/images/truck-fleet.svg' | relative_url }}" alt="{{ truck[0] }} for logistics transport">
            <div class="p-4">
              <h2 class="h4">{{ truck[0] }}</h2>
              <p class="text-orange fw-bold">{{ truck[1] }}</p>
              <p>{{ truck[2] }}</p>
              <a href="{{ '/pricing/' | relative_url }}">Book this vehicle</a>
            </div>
          </article>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
