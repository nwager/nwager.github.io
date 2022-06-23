<script>
  import Nav from "$lib/components/Nav.svelte";
  import "../app.css";
</script>

<main>
  <Nav />
  <slot />
  <footer>
    Powered by&nbsp;
    <a
      href="https://kit.svelte.dev/"
      target="_blank"
      rel="noopener"
    >
      SvelteKit
    </a>
    . Hosted on&nbsp;
    <a
      href="https://github.com/nwager/nwager.github.io"
      target="_blank"
      rel="noopener"
    >
      Github
    </a>
    .
  </footer>
</main>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  main {
    padding-top: $navbar-height;

    footer {
      display: flex;
      justify-content: center;
      padding: 3em 0;
    }
  }
</style>