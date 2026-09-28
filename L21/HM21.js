// 1. Конструктор счета
function Account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        if (amount <= 0) {
            console.log("Сумма депозита должна быть больше 0");
            return false;
        }
        this.balance += amount;
        return true;
    };

    this.withdraw = function (amount) {
        if (amount <= 0) {
            console.log("Сумма снятия должна быть больше 0");
            return false;
        }
        if (amount > this.balance) {
            console.log("Недостаточно средств");
            return false; // Фигурные скобки исправлены
        }
        this.balance -= amount; // Теперь находится ВНУТРИ функции withdraw
        return true;
    };

    this.getBalance = function () {
        return this.balance;
    };
}

// 2. Отдельная функция перевода (вынесена за пределы Account)
function transfer(account1, account2, amount) {
    // Создаем объект транзакции
    const transaction = {
        account1: account1,
        account2: account2,
        amount: amount,
        
        transactionInfo: function () {
            if (this.error) {
                console.log(`[ОШИБКА] Перевод на сумму ${this.amount} не выполнен. Причина: ${this.error}`);
            } else {
                console.log(`[УСПЕХ] Перевод на сумму ${this.amount} от ${this.account1.owner} к ${this.account2.owner} прошёл успешно.`);
            }
        }
    };

    // Проверяем условия и выполняем перевод через методы счетов
    if (amount <= 0) {
        transaction.error = "Сумма перевода должна быть больше 0";
    } else if (account1.balance < amount) {
        transaction.error = "Недостаточно средств на счете списания";
    } else {
        account1.withdraw(amount);
        account2.deposit(amount);
    }

    // Возвращаем объект с информацией
    return transaction;
}

const acc1 = new Account('RS111', 'John Doe', 1000);
const acc2 = new Account('RS222', 'Alice Smith', 500);

// Пример 1: Успешный перевод
const tx1 = transfer(acc1, acc2, 300);
tx1.transactionInfo(); 
// Выведет: [УСПЕХ] Перевод на сумму 300 от John Doe к Alice Smith прошёл успешно.

// Пример 2: Ошибка (не хватает денег)
const tx2 = transfer(acc1, acc2, 5000);
tx2.transactionInfo(); 
// Выведет: [ОШИБКА] Перевод на сумму 5000 не выполнен. Причина: Недостаточно средств на счете списания