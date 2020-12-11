class TreeModel { //create a class called TreeModel

  constructor() {
    this.id = 0;
    this.name;
    this.db = [];
  }


  get(id) { //create method called get to find all items or an item by id
    if(id){
      return this.db.find(record => record.id === id);
    } else { 
      return this.db;
    }
  }

  create(obj) { //create method called create to create new records
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;
  }

  update (id, obj) { //create method called update to update records
    if (!id) {return null}
    else {
      const i = this.db.findIndex(object => object.id === parseInt(id));
      this.db[i].name = obj.name;
      return this.db[i];
    }
  }

  delete (id) { //create method called delete a records
    if(!id) {return null}
    else {
      const i = this.db.findIndex(object => object.id === parseInt(id));
      this.db.splice(i,1);
      return this.db;
    }
  }

}

module.exports = TreeModel; //export to server.js