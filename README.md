# 🛒 Shopping Basket (TypeScript)

A clean and testable TypeScript project to calculate the total cost of a shopping basket with item-level offers.

---

## 📦 Features

- Calculates total basket cost
- Item-specific promotional offers:
  - 🍈 Melons: Buy One Get One Free (BOGOF)
  - 🍋 Limes: 3 for the price of 2
- Written in TypeScript with strong typing
- Fully unit tested with Jest
- Clean project structure

---

## 🗂️ Project Structure

```
shopping-basket/
├── src/
│   ├── models/                # Item definitions
│   ├── services/              # Basket calculation logic
│   ├── utils/                 # Offer logic helper
│   └── index.ts               # App entry point
├── test/                      # Unit tests
├── jest.config.js             # Jest config
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/shopping-basket-ts.git
cd shopping-basket-ts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
npm start
```

### 4. Build the project

```bash
npm run build
```

---

## 🧪 Run Tests

```bash
npm test
```

To test in watch mode:

```bash
npx jest --watch
```

---

## 💰 Example

```ts
const basketItems = ['Apple', 'Apple', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
```

Output:

```
Total cost: £1.65
```

Breakdown:
- Apple: 2 x 35p = 70p
- Melon: BOGOF → 2 for 50p = 50p
- Lime: 3-for-2 → 3 for 30p, extra one = 15p → 45p  
**Total: 70 + 50 + 45 = 165p = £1.65**

---

## 🛠️ Tech Stack

- **TypeScript**
- **Jest + ts-jest**
- **Node.js (npm)**


---

## 👨‍💻 Author

**Vidya Bhushan Sinha**  
📧 vidyabhushans009@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/vidya-bhushan-sinha-098247111/)

---

## 📄 License

Licensed under the MIT License.
