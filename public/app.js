//
import { Invoice } from "./Classes/Invoice.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
import { Payment } from "./Classes/Payment.js";
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "lanzy", age: 40 });
console.log(docOne.age);
// with interfaces
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["book"] = 0] = "book";
    ResourceType[ResourceType["author"] = 1] = "author";
    ResourceType[ResourceType["film"] = 2] = "film";
    ResourceType[ResourceType["director"] = 3] = "director";
    ResourceType[ResourceType["person"] = 4] = "person";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.book,
    data: { name: "shaun" },
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.person,
    data: { name: "olanrewaju" },
};
console.log(docThree, docFour);
// tuples
let arr = ["rya", 25, true];
let tup = ["lanre", 25, true];
tup[0] = "ayo";
tup[1] = 30;
let student;
student = ["lanre", 234933];
