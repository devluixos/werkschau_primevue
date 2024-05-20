<template>
  <div id="app">
    <router-view></router-view> <!-- This is where the matched component will be rendered -->
  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  name: 'App',
  data() {
    return {
      socket: null
    };
  },
  mounted() {
    this.socket = io('https://werkschaudata.luizperren.dev'); // Use your Cloudflare tunnel address
    this.socket.on('update', (data) => {
      console.log('Received update:', data);
      this.$router.push(data.path); // Update the route to the new path
    });

    // Emit the current path to all clients on page load with a delay
    setTimeout(() => {
      const currentPath = this.$router.currentRoute.value.path;
      console.log(`Broadcasting current path: ${currentPath}`);
      this.socket.emit('changeChapter', { path: currentPath });
    }, 1000); // Delay of 3 seconds for testing
  },
  methods: {
    changeChapter(path) {
      console.log(`Changing chapter to: ${path}`);
      this.socket.emit('changeChapter', { path });
      this.$router.push(path);
    }
  }
}
</script>

<style>
/* Add any custom styles here */
</style>
