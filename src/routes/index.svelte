<script lang="ts">
  import { browser } from "$app/env";
  import { onMount } from "svelte";

  onMount(async () => {
    if (browser) {
      let mqtt = await import("mqtt");

      console.log(mqtt);
    }
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
