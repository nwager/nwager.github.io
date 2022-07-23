<script lang="ts">
  import ColumnContainer from "$lib/components/ColumnContainer.svelte";
</script>

<ColumnContainer styles={{"max-width": "45em"}}>
  <slot />
</ColumnContainer>