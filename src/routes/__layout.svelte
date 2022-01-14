<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<main>
  <Nav />
  <slot></slot>
</main>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  main {
    margin-top: $navbar-height;
  }
</style>