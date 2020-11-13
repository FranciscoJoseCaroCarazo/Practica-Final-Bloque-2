// En esta práctica debéis crear una clase "User" con tres propiedades. Estas propiedades son "name", "money" y "showMeTheMoney".
// En la clase debe haber un constructor para establecer el valor de cada una de estas propiedades en el orden en el que se han mencionado.
// Una vez esté lista la clase tenéis que crear una instancia de dicha clase para cada uno de los usuarios que obtengáis del documento "users.json" usando el método fetch (al igual que hicistéis en el ejercicio 3).
// Al recorrer el array de usuarios, en cada iteración, debéis usar las propiedades "name" y "money" del usuario del json para añadirle sus valores al constructor en el parámetro que establezca el valor de la propiedad del objeto con el mismo nombre.
// Por ejemplo: Para instanciar el primer usuario de la lista haremos "new User(usuarioDelJson.name, usuarioDelJson.money, metodoDelusuario)".
// El tercer parámetro de cada objeto recibirá una función que sacará con un alert la frase "dinero del usuario" (opcionalmente podéis sustituir esta frase por el dinero que tiene el usuario de esa instancia). Esta función la declararéis fuera de la clase con el nombre "showMeTheMoneyFunc".
// Cada instancia de "User" se irá añadiendo en el array "users" con el método "push".
// Una vez hayáis añadido todas las instancias al array de usuarios, ejecutad el método "showMeTheMoney" del tercer usuario "Roberto".

const users = [];

//Clase User
class User {
  constructor(name, money, any) {
    this.name = name;
    this.money = money;
    this.showMeTheMoney = any;
  }
}

//Hacemos el fetch que meterá los usuarios en la lista de usuarios.
fetch("./users.json")
  .then(response => response.json())
  .then(data => {
    let newUsers = data;
    newUsers = newUsers.map(
      nuevoUsuario =>
        new User(nuevoUsuario.name, nuevoUsuario.money, showMeTheMoney)
    );
    newUsers.forEach(nuevoUsuario => users.push(nuevoUsuario));
    users[2].showMeTheMoney();
  });

//creamos la funcion showMeTheMoney para que nos lance una alert que nos dira el dinero que tiene roberto.
function showMeTheMoney() {
  alert(this.name + " tiene " + this.money + " Eurillos");
}
