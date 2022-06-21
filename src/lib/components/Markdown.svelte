<script lang="ts">
  import { base } from '$app/paths';
  import { marked } from 'marked'

  export let filePath: string;

  let md = "";
  fetch(base + filePath)
    .then(res => res.text(), reason => md = "" + reason)
    .then(text => {
      md = marked.parse(text);
    }, reason => md = "" + reason);
</script>

<div class="Markdown">
  {@html md}
</div>