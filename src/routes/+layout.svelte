<script>
    import { onMount } from 'svelte';
    import Lenis from 'lenis';
    import 'lenis/dist/lenis.css';
	import '../app.css'

    onMount(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            lenis.destroy();
        };
    });

	let {children} = $props();
</script>
<main>
    {@render children()}
</main>