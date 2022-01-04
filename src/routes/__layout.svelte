<script lang="ts">
  import '../style/tailwind.css';

  import { Header, Footer } from '@components';
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <div class="flex-1 bg-slate-50">
    <slot />
  </div>
  <Footer />
</div>
