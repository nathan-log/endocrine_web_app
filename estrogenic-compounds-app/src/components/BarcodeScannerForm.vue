<!-- src/components/BarcodeScannerForm.vue -->
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
  emits: ['submit', 'clear'],
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
      this.$emit('clear');
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
  padding: var(--spacing-large);
}

input {
  width: 600px;
  height: 100px;
  padding: var(--spacing-medium);
  border: 1px solid var(--button-color-gray);
  border-radius: 4px;
  font-size: var(--font-size-xlarge);
  font-family: var(--font-family-primary);
  text-align: center;
  outline: none;
  transition: box-shadow 0.3s ease;
}

input::placeholder {
  color: var(--button-color-gray);
  font-weight: normal;
}

input:focus {
  box-shadow: none;
}

input.complete {
  box-shadow: 0 0 0 3px var(--success-color);
}

input.incomplete {
  box-shadow: 0 0 0 3px var(--error-color);
}

.barcode-status {
  margin-top: var(--spacing-small);
  font-size: var(--font-size-medium);
  font-family: var(--font-family-primary);
}

.barcode-status.valid {
  color: var(--success-color);
}

.barcode-status.invalid {
  color: var(--error-color);
}

.barcode-status.default {
  color: var(--button-color-gray);
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--spacing-large);
}

button {
  width: 200px;
  padding: var(--spacing-small) var(--spacing-large);
  background-color: var(--button-color-gray);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-large);
  font-family: var(--font-family-secondary);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  box-shadow: 0 0 20px var(--button-hover-glow-color);
}

.or-text {
  margin: var(--spacing-medium) 0;
  font-size: var(--font-size-medium);
  font-family: var(--font-family-primary);
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
  box-shadow: 0 0 20px var(--button-hover-glow-color);
}

.green-button {
  background-color: var(--success-color);
}
</style>