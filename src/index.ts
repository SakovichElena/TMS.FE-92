// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования (использовать Generic)
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
//     6. Создать тип объекта, в качестве ключа которого выступает строка, а в качестве значения элемент массива users (Подсказка: Record)

interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
  }
  
  const users:IUser[] = [
    {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true,
    },
    {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true,
    },
    {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false,
    },
  ];
    
  // task 1 (create a string from names)
  
  const userNames:string = users.map(({name}) => name).join(", ");
  console.log(userNames);
  
  //  task 2 (count the total number of cars)
  
  const allCars:number = users.map(({cars}) => cars).join(" ").split(" ").length;
  console.log(allCars);
  
  
  // I can't add these values because of the types. How to fix it?
  
  const countCars: number = users.map(({ cars }) => cars).reduce((acc, cur) => cur ? acc + cur.length : acc, 0);  
  console.log(countCars);
  
  
  // task 3 (find and filter users with education)
  
  interface IHasEducation {
    name: string;
    hasEducation: boolean;
  }
  
  function findUsersWithEducation<T extends IHasEducation>(array:T[]) {
    console.log(users.filter(el => el.hasEducation === true));
  }
  findUsersWithEducation(users);
  
  // task 4 (find and filter users with animals)
  
  interface IAnimal {
    name: string;
    animals?: string[];
  }
  
  function findUsersWithAnimals<T extends IAnimal>(array:T[]) {
    console.log(users.filter(({ animals }) => animals));
  }
  findUsersWithAnimals(users);
  
  // task 5 (find cars in array)
  
  interface ICar {
    name: string;
    cars?: string[];
  }
  
  function findAllCars<T extends ICar>(array:T[]) {
    console.log(users.filter(({ cars }) => cars));
    console.log(users.map(({ cars }) => cars).join(" "));
  }
  findAllCars(users);
  
  // task 6 (create object's type)
  type UsersType = "USERNAME" | "USERLASTNAME" | "USERPHONE";
  
  const usersData: Record<UsersType, IUser> = {
    USERNAME:users[0],
    USERLASTNAME:users[1],
    USERPHONE:users[2],
  }
  console.log(usersData)
  
  // task 7 (create class Book)
  
  interface IBook {
    name: string;
    author: string;
    year: number;
  }
  
  // class Book implements IBook {
  //   constructor(
  //     name: string;
  //     author: string;
  //     year: number;
  //   )
  // }
  
  
  
    // 7. Создать класс Book с полями: название книги, автор, год. Класс должен быть описан интерфейсом. Должны присутствовать геттеры и сеттеры.
    // Должен быть статический метод, который в качестве аргумента принимает экземпляр класса Book и возвращает строку формата: автор-название-год.
    
    // 8. Протипизировать функцию используя keyof и generic
  //   function extractData(obj, key) {
  //     return obj[key];
  //   }
    
  //   const object = {
  //     user: {
  //       name: "Chris",
  //     },
  //   };
    
  //   extractData(object, "user").name;