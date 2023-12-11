<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  description: String,
  image: String,
  imageAlt: String,
  imageWidth: {
    type: Number,
    default: 225
  },
  imageHeight: {
    type: Number,
    default: 225
  }
})
</script>

<template>
  <div class="card shadow-sm">
    <svg
      class="bd-placeholder-img card-img-top"
      width="100%"
      height="225"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Thumbnail"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    ></svg>
    <div class="card-body">
      <p class="card-text">{{ $props.title }} - {{ $props.description }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-body-secondary">9 mins</small>
      </div>
    </div>
  </div>
</template>
