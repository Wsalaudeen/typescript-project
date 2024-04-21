// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "lanzy",
//   age: 25,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };
// const greetPerson = (person: IsPerson) => {
//   console.log("hello", person.name);
// };
// greetPerson(me);
// console.log(me);
import { Invoice } from "./Classes/Invoice.js";
import { Payment } from "./Classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("folasade", "web work", 250);
// docTwo = new Payment("Ayo", "plumbing work", 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("lanzy", "work on the mario website", 350);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // console.log(invoices);
// invoices.forEach((Inv) => {
//   console.log(Inv.client, Inv.amount, Inv.format());
// });
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
