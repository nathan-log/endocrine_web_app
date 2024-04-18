<!-- BarcodeScannerForm.vue -->
<template>
  <div class="barcode-scanner-form">
    <BarcodeScanner v-if="showScanner" @barcode-scanned="onBarcodeScanned" />
    <input
      v-model="formattedBarcode"
      placeholder=" "
      :class="{
        complete: isValidBarcode,
        incomplete: !isValidBarcode && barcode.length > 0,
        shake: !isBarcodeValid && isSubmitAttempted
      }"
      @animationend="resetShake"
      @keyup.enter="submitBarcode"
      :disabled="barcodeSubmitted"
      autofocus
    />
    <div class="barcode-status" :class="{ valid: isValidBarcode, invalid: !isValidBarcode && barcode.length > 0, default: !barcode.length }">
      {{ barcodeStatus }}
    </div>
    <div class="button-container">
      <template v-if="!barcodeSubmitted">
        <button @click="submitBarcode" :class="{ 'green-button': isValidBarcode }">Submit</button>
        <span class="or-text">or</span>
        <button @click="toggleScanner" :class="{ 'green-button': true}">{{ showScanner ? 'Stop' : 'Scan' }}</button>
      </template>
      <template v-else>
        <button @click="clearBarcode" class="clear-button">Clear</button>
      </template>
    </div>
  </div>
</template>

<script>
import { isValidUPCA } from '../utils/barcodeValidator';
import BarcodeScanner from './BarcodeScanner.vue';

export default {
  emits: ['submit'],
  components: {
    BarcodeScanner,
  },
  data() {
    return {
      barcode: '',
      isBarcodeValid: false,
      isSubmitAttempted: false,
      showScanner: false,
      barcodeSubmitted: false,
    };
  },
  methods: {
    submitBarcode() {
      if (this.isBarcodeValid) {
        console.log('Submitting barcode:', this.barcode);
        this.$emit('submit', this.barcode);
        this.barcodeSubmitted = true;
      } else {
        this.isSubmitAttempted = true;
      }
    },
    resetShake() {
      this.isSubmitAttempted = false;
    },
    toggleScanner() {
      this.showScanner = !this.showScanner;
    },
    onBarcodeScanned(barcode) {
      this.barcode = barcode;
      this.showScanner = false;
      this.$nextTick(() => {
        if (this.isValidBarcode) {
          this.submitBarcode();
        }
      });
    },
    clearBarcode() {
      this.barcode = '';
      this.barcodeSubmitted = false;
    },
  },
  watch: {
    barcode(newValue) {
      console.log('Barcode value changed:', newValue);
      if (newValue.length === 12) {
        this.isBarcodeValid = isValidUPCA(newValue);
      } else {
        this.isBarcodeValid = false;
      }
    }
  },
  computed: {
    formattedBarcode: {
      get() {
        const barcode = this.barcode.replace(/\s/g, '');
        let formatted = '';

        for (let i = 0; i < barcode.length; i++) {
          if (i === 1 || i === 6 || i === 11) {
            formatted += ' ';
          }
          formatted += barcode[i];
        }

        return formatted;
      },
      set(value) {
        this.barcode = value.replace(/\s/g, '');
      }
    },
    isValidBarcode() {
      return this.barcode.length === 12 && isValidUPCA(this.barcode);
    },
    barcodeStatus() {
      if (this.isValidBarcode) {
        return 'Valid barcode';
      } else if (this.barcode.length > 0) {
        return 'Invalid barcode';
      } else {
        return 'Enter barcode above';
      }
    },
  },
  mounted() {
    console.log('BarcodeScannerForm component mounted');
  }
};
</script>

<style scoped>
.barcode-scanner-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

input {
  width: 600px;
  height: 100px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 64px;
  font-family: 'Arial', sans-serif;
  text-align: center;
  outline: none;
  transition: box-shadow 0.3s ease;
}

input::placeholder {
  color: #a0a0a0;
  font-weight: normal;
}

input:focus {
  box-shadow: none;
}

input.complete {
  box-shadow: 0 0 0 3px #00ff00;
}

input.incomplete {
  box-shadow: 0 0 0 3px #ff0000;
}

.barcode-status {
  margin-top: 10px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
}

.barcode-status.valid {
  color: #00ff00;
}

.barcode-status.invalid {
  color: #ff0000;
}

.barcode-status.default {
  color: #a0a0a0;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

button {
  width: 200px;
  padding: 10px 40px;
  background-color: #a0a0a0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 28px;
  font-family: 'Arial Black', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  box-shadow: 0 0 20px #ffd700;
}

.or-text {
  margin: 20px 0;
  font-size: 24px;
  font-family: 'Arial', sans-serif;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(10px);
  }
  60% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

button.glow {
  box-shadow: 0 0 20px #ffd700;
}

.green-button {
  background-color: #00ff00;
}
</style>