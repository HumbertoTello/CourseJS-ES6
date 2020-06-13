class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class Todolist extends List {
  constructor() {
    super();
    
    this.user = 'Diego';
  }

  showUser() {
    console.log(this.user);
  }
}

const MyList = new Todolist();

document.getElementById('newtodo').onclick = function() {
  MyList.add('New todo');
  MyList.showUser();
}

class Math {
  static sum(a,b) {
    return a + b;
  }
}

console.log(Math.sum(1,2))