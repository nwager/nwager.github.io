<!-- https://fantinel.dev/blog-development-sveltekit/#blog-post-page -->

<script context="module">
  import { slugFromPath } from "$lib/utils";

  // Get posts info
  const allPosts = import.meta.globEager(
    "../../lib/posts/*.{md,svx,svelte.md}"
  );

  let posts = [];
  // Get the posts' slugs
  for (let path in allPosts) {
    const post = allPosts[path];
    const slug = slugFromPath(path);
    posts.push({ post, slug });
  }

  export function load({ params }) {
    const { slug } = params;
    const filteredPost = posts.find((p) => {
      return (
        p.slug.toLowerCase() === slug.toLowerCase()
        && p.published !== false
      );
    });

    if (!filteredPost) {
      return {
        status: 404,
        error: new Error('Post could not be found')
      };
    }

    return {
      props: {
        page: filteredPost.post.default,
        metadata: filteredPost.post.metadata,
      }
    };
  };
</script>

<script>
  export let page;
  export let metadata;
</script>

<div class="post-content">
  <h1>{metadata.title}</h1>
  <svelte:component this={page}/>
</div>

<style lang="scss">
  .post-content {
    /*
      MUST use :global() for markdown styling so svelte doesn't ignore
      "unused" css since the elements aren't visible at compile time
    */
    :global(img) {
      max-width: 100%;
    }
  }
</style>
