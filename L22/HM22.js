// ==========================================
// Задание 1
// ==========================================

// 1.a. Создание нескольких объектов-продуктов вручную
const product1 = {
  name: 'notebook lenovo thinkpad',
  description: 'cpu intel core i7, ram: 16gb, ssd: 512gb',
  price: 1283,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  }
};

const product2 = {
  name: 'smartphone iphone 15',
  description: 'display 6.1 OLED, ram: 6gb, 128gb',
  price: 899,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  }
};

// 1.b. Функция-конструктор для создания объектов-товаров
function Product(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.info = function () {
    return `товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
  };
}

// Создаем несколько товаров с помощью конструктора
const product3 = new Product('monitor dell ultrasharp', '27 inch, 4k resolution, ips', 450);
const product4 = new Product('keyboard keychron k2', 'wireless mechanical, red switches', 110);

// 1.c. Массив из товаров и функция для вывода информации о них
const productsList = [product1, product2, product3, product4];

function printProducts(products) {
  products.forEach((product, index) => {
    console.log(`Товар ${index + 1}`);
    
    for (let key in product) {
      if (typeof product[key] === 'function') {
        console.log(`    ${key}: ${product[key]()}`);
      } else {
        console.log(`    ${key}: ${product[key]}`);
      }
    }
  });
}

// Вызов функции для 1.c
console.log("=== СПИСОК ТОВАРОВ ===");
printProducts(productsList);


// ==========================================
// Задание 2
// ==========================================

// 2.a. Функция-конструктор Account
function Account(iban, owner, balance) {
  this.iban = iban;
  this.owner = owner;
  this.balance = balance;

  // Пополнение счёта
  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      return true;
    }
    return false;
  };

  // Снятие денег
  this.withdraw = function (amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  };

  // Вывод текущего баланса
  this.getBalance = function () {
    return this.balance;
  };
}

// Создание нескольких объектов счетов и массива
const acc1 = new Account('DE1234567890', 'John Doe', 1000);
const acc2 = new Account('DE0987654321', 'Jane Smith', 500);
const acc3 = new Account('DE1122334455', 'Alex Brown', 250);

const accountsList = [acc1, acc2, acc3];

console.log("\n=== ИНФОРМАЦИЯ О СЧЕТАХ ===");
accountsList.forEach(acc => {
  console.log(`Владелец: ${acc.owner}, IBAN: ${acc.iban}, Баланс: ${acc.getBalance()}`);
});

// 2.b и 2.c. Функция transfer с созданием объекта результата
function transfer(account1, account2, amount) {
  // Проверка корректности суммы
  if (amount <= 0) {
    return {
      account1: account1,
      account2: account2,
      amount: amount,
      error: 'Сумма перевода должна быть больше 0',
      transactionInfo: function () {
        console.log(`Ошибка транзакции: ${this.error}. Не удалось перевести ${this.amount} с ${this.account1.iban} на ${this.account2.iban}`);
      }
    };
  }

  // Пытаемся снять средства
  const success = account1.withdraw(amount);

  if (success) {
    // Пополняем счёт зачисления
    account2.deposit(amount);

    return {
      account1: account1,
      account2: account2,
      amount: amount,
      transactionInfo: function () {
        console.log(`Успешная транзакция: переведено ${this.amount} со счёта ${this.account1.iban} на счёт ${this.account2.iban}`);
      }
    };
  } else {
    return {
      account1: account1,
      account2: account2,
      amount: amount,
      error: 'Недостаточно средств на счёте списания',
      transactionInfo: function () {
        console.log(`Ошибка транзакции: ${this.error}. Попытка списать ${this.amount} со счёта ${this.account1.iban}`);
      }
    };
  }
}


console.log("\n=== ПРОВЕРКА ТРАНЗАКЦИЙ ===");

// 1. Успешный перевод (переводим 300 от acc1 к acc2)
const result1 = transfer(acc1, acc2, 300);
result1.transactionInfo();
console.log(`Новый баланс ${acc1.owner}: ${acc1.getBalance()}`);
console.log(`Новый баланс ${acc2.owner}: ${acc2.getBalance()}`);
console.log('Объект результата 1:', result1);

// 2. Неуспешный перевод из-за недостатка средств (пытаемся перевести 5000)
const result2 = transfer(acc1, acc2, 5000);
result2.transactionInfo();
console.log('Объект результата 2:', result2);