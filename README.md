# Welcome to Flights Service

# ✈️ Flights and Search Service

This microservice is responsible for managing flight and airport data, including CRUD operations for cities, airports, and flight listings. It also exposes endpoints to search available flights.

---

## 📦 Tech Stack

- **Node.js** (Express.js)
- **Sequelize ORM**
- **MySQL / PostgreSQL / MariaDB** (configurable)
- **RESTful API**

---

## 🚀 Getting Started

Follow the instructions below to set up and run the service locally.

---

### 1. Clone the Repository

```bash
git clone https://github.com/Sandigupta/FlightsAndSearchService
cd FlightsAndSearchService
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Environment Setup

Create a `.env` file in the root directory and define the following:

```env
PORT=3000
```

> You can modify the `PORT` value based on your environment needs.

---

### 4. Initialize Sequelize

Navigate to the project folder and run:

```bash
npx sequelize init
```

This will generate:
- `config/config.json`
- `models/`
- `migrations/`
- `seeders/`

Update `config/config.json` with your local DB configuration:

```json
"development": {
  "username": "your_db_username",
  "password": "your_db_password",
  "database": "your_db_name",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```

---

### 5. Run the Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

---

## 🔁 API Endpoints

Below is a list of available REST endpoints in this microservice:

### 📍 Cities

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| POST   | `/city`            | Create a new city            |
| GET    | `/city/:id`        | Retrieve a city by ID        |
| GET    | `/city`            | Retrieve all cities          |
| PATCH  | `/city/:id`        | Update city by ID            |
| DELETE | `/city/:id`        | Delete a city by ID          |

---

### 🛫 Airports

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| POST   | `/airport`         | Create a new airport     |

---

### ✈️ Flights

| Method | Endpoint           | Description                        |
|--------|--------------------|------------------------------------|
| POST   | `/flights`         | Create a new flight *(with validation)* |
| GET    | `/flights`         | Get all available flights          |

> ✅ Flight creation uses a middleware validator: `FlightMiddleware.validateCreateFlight`

---

## 📬 Feedback & Contributions

- Found a bug? Please [open an issue](https://github.com/Sandigupta/FlightsAndSearchService/issues)
- Want to contribute? [Submit a pull request](https://github.com/Sandigupta/FlightsAndSearchService/pulls)

---

## 🧠 Author

Built and maintained by [Sandeep Gupta](https://github.com/Sandigupta) with ❤️

---

## 🔗 Related Microservices

- 🛡 [Authentication Service](https://github.com/Sandigupta/authentication_service-)
- 🌐 [API Gateway](https://github.com/Sandigupta/API_GATEWAYS-)
- ⏰ [Reminder Service](https://github.com/Sandigupta/REMINDER_SERVICE)
- 🧾 [Booking Service](https://github.com/your-booking-service-link)
  









<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>







## Project Setup
- clone the project on your local 
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and the following environment variable
   -`PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```   
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above +, got to the src folder from your terminal and execute 
`npx sequelize db:create`
and than execute 
`npx sequelize db:migrate`

```

##DB Design
 - Airplane Table
 - Flight
 - Airport
 - City

 - A flight belong to an airplane but one airplane can be used in multiple flights
 - A city has many airports but one airport belong to a city 
 - One airport can have many flight, but a flight belong to one airport

 ## Tables 
 ### City -> id, name, created_at, updated_at
 ### Airport -> id, name, address, city_id, created_at, updated_at
 Relationship -> City has many airports and Airport belongs to a city (one to many)

### How to generate a table with given attributes
```
npx seqeulize model:generate
 --name Airport 
 --attributes name:String,address:String,cityId:integer
```
### How to create seeder file
```
npx sequelize seed:generate --name add-airports

npx sequelize db:seed:all
```
