<script>
  export let title = 'Click me';
  export let onClick = () => {
    alert('Button clicked!');
  }
</script>
<button on:click={onClick}>{title}</button>