const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      firstname: "",
      confirmedName: ""
    };
  },
  methods: {
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    },
    setName(event, lastname) {
      this.firstname = `${event.target.value} ${lastname}`;
    },
    submitForm() {
      alert("Form submitted!");
    },
    confirmInput() {
      this.confirmedName = this.firstname;
    }
  },
});

app.mount("#events");
