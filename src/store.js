import { observable, action } from "mobx";

class MainStore {
   cenk = "asdasdasdasd"

   lastestTaskId = 0

   tasks= []
}

const Store = new MainStore()

export default Store;