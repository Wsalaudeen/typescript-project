//classes

class Invoice {
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("lanzy", "work on the mario website", 350);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// console.log(invoices);
invoices.forEach((Inv) => {
  console.log(Inv.client, Inv.amount, Inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
