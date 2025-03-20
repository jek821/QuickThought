
# Project Setup

## Project Overview
This project is a full-stack web application built using **React**, **Next.js**, and **Knex** for database interaction, with **pnpm** used for package management. The backend and frontend are served within a single server.

---

## 1. How the Project Was Built from Scratch

### 1.1 Project Setup (React, Next.js, Knex with pnpm)
To create this project from scratch, follow these steps:

1. **Create a project directory:**
   - Create a new directory for your project and navigate into it.

   ```bash
   mkdir my-project
   cd my-project
   ```

2. **Initialize the project:**
   - Run `pnpm init` to initialize the project and create the `package.json` file.

   ```bash
   pnpm init
   ```

3. **Install dependencies:**
   - Install the required dependencies for Next.js, React, Knex, dotenv, and MySQL2 using pnpm.

   ```bash
   pnpm add next react react-dom knex dotenv mysql2
   ```

4. **Create the file structure:**
   - Set up the directory structure for your project.

   ```bash
   mkdir pages public models src
   touch knexfile.js
   mkdir pages/api
   mkdir src/hooks
   ```

   The structure should look like this:

   ```
   /my-project
     ├── /pages                # Next.js pages (including API routes)
     │   ├── /api              # Backend API routes
     ├── /public               # Static files like images, fonts, etc.
     ├── /models               # Database models (using Knex)
     ├── /knexfile.js          # Knex configuration file
     ├── /src                  # React frontend code
     │   ├── /hooks            # Custom React hooks (for making API calls)
     ├── package.json          # Single package.json for the entire project
     └── pnpm-lock.yaml        # pnpm lockfile
   ```

5. **Set up Knex and MySQL:**
   - The `knexfile.js` should contain the MySQL configuration for Knex.

   ```javascript
   // knexfile.js
   module.exports = {
       client: 'mysql',
       connection: {
           host: 'localhost',
           user: 'youruser',
           password: 'yourpassword',
           database: 'your_database',
       },
   };
   ```

6. **Create API routes and models:**
   - Set up the API routes and Knex models to interact with the database.

---

## 2. Getting the Project Running After Pulling the Git Repo

Once you’ve pulled the repository, follow these steps to get the project up and running.

### 2.1 Setting Up Environment Variables

1. **Create the `.env` file:**
   - In the root of the project, create a `.env` file and add the necessary environment variables for database connectivity.

   ```bash
   touch .env
   ```

   Add the following to `.env`:

   ```
   DB_HOST=localhost
   DB_USER=youruser
   DB_PASSWORD=yourpassword
   DB_NAME=your_database
   ```

### 2.2 Installing Dependencies

1. **Install the project dependencies:**
   - Run the following command to install all the dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

### 2.3 Setting Up the Database

1. **Install MySQL (if not already installed):**
   - Update your package list and install MySQL server.

   ```bash
   sudo apt update
   sudo apt install mysql-server
   ```

2. **Start MySQL service:**
   - Start MySQL and enable it to run on startup.

   ```bash
   sudo systemctl start mysql
   sudo systemctl enable mysql
   ```

3. **Access MySQL console:**
   - Log into the MySQL console by running the following command:

   ```bash
   sudo mysql -u root -p
   ```

   - You will be prompted to enter the MySQL root password.

4. **Configure MySQL user and database:**
   - Once inside the MySQL console, run the following commands to set up the MySQL root user and create a new database:

   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
   CREATE DATABASE my_database;
   FLUSH PRIVILEGES;
   EXIT;
   ```

   This creates the database and sets up the MySQL user credentials.

### 2.4 Running Migrations and Seeds

1. **Create the migrations and seeds:**
   - If you haven't already created migrations or seeds, you can generate them using Knex.

   - To create a new migration:

     ```bash
     pnpm knex migrate:make create_count_table
     ```

   - To create a new seed:

     ```bash
     pnpm knex seed:make seed_count
     ```

2. **Run migrations:**
   - To run the migrations and set up the tables in the database:

   ```bash
   pnpm knex migrate:latest
   ```

3. **Run seeds:**
   - Run the seed to insert initial data into the database:

   ```bash
   pnpm knex seed:run
   ```

### 2.5 Running the Project

1. **Start the development server:**
   - Run the following command to start the Next.js development server:

   ```bash
   pnpm dev
   ```

   This will start the project on `http://localhost:3000`, and you can access the app in your browser.
