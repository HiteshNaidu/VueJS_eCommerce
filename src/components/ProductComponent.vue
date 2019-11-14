<template>
  <div>
    <h1>{{ id }}</h1>
   
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    id: String,
    title: String,
    src: String
  },
};
</script>