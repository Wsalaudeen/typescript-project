//

import { Invoice } from "./Classes/Invoice.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
import { Payment } from "./Classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

// generics

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "lanzy", age: 40 });

console.log(docOne.age);

// with interfaces
//Enums

enum ResourceType {
  book,
  author,
  film,
  director,
  person,
}

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.book,
  data: { name: "shaun" },
};

const docFour: Resource<object> = {
  uid: 2,
  resourceName: ResourceType.person,
  data: { name: "olanrewaju" },
};

console.log(docThree, docFour);

// tuples
let arr = ["rya", 25, true];
let tup: [string, number, boolean] = ["lanre", 25, true];
tup[0] = "ayo";
tup[1] = 30;

let student: [string, number];
student = ["lanre", 234933];
