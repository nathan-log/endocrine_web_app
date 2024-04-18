<!-- BarcodeScanner.vue -->
<template>
    <div class="barcode-scanner">
      <StreamBarcodeReader
        :camera="camera"
        :scan-period="scanPeriod"
        :try-harder="tryHarder"
        @decode="onDecode"
        @loaded="onLoaded"
      />
    </div>
  </template>
  
  <script>
  import { StreamBarcodeReader } from 'vue-barcode-reader';
  
  export default {
    components: {
      StreamBarcodeReader,
    },
    data() {
      return {
        camera: 'auto',
        scanPeriod: 1, // Adjust the scan period as needed (in milliseconds)
        tryHarder: true, // Enable the "try harder" option
      };
    },
    methods: {
      onLoaded() {
        console.log('Barcode scanner loaded');
      },
      onDecode(barcode) {
        console.log('Barcode scanned:', barcode);
        this.$emit('barcode-scanned', barcode);
      },
    },
  };
  </script>
  
  <style scoped>
  .barcode-scanner {
    margin-bottom: 20px;
  }
  </style>