# 📚 Library Management System

 ------
 
## 📝 Project Overview

***The Library Management System is a full-stack web application designed to streamline the process of managing students, faculty, and library resources. It provides a user-friendly interface for registration, role management, and tracking statistics, while the backend ensures secure data handling and efficient storage.***

***This project demonstrates the integration of Angular 19 (Frontend) with a Spring Boot REST API (Backend) and a relational database (PostgreSQL).***

-------

### 🚀 Features

- ✅ User Registration – Add new Students and Faculty with details like name, email, password, and role.

- ✅ Role Management – Differentiate between Students and Faculty.

- ✅ Statistics Dashboard – View total Students and Faculty counts.

- ✅ Edit & Delete Users – Update or remove user records in real time.

- ✅ Responsive UI – Built with Angular standalone components.

- ✅ REST API – CRUD operations exposed for user management.

  ---------

## 🛠️ Tech Stack

### Frontend

- Angular 19

- TypeScript

- HTML, CSS

- Angular Router & Forms
------
### Backend

- Spring Boot (REST API)

- Java

- JPA/Hibernate
------
### Database

***PostgreSQL (production)***

-----

## 📂 Project Structure

Library-Management/

│── backend/                  

│  ├── src/main/java/com/example/Library_Management/

│  ├── LibraryManagementApplication.java

│  ├── controller/

│       ├── BookController.java

│       ├── UserController.java

│  ├── model/

│       ├── Book.java

│       ├── User.java

│  ├── repository/

│       ├── BookRepository.java

│       ├── UserRepository.java

│  ├── Services/

│       ├── BookService.java

│       ├──UserService.java

│  ├── src/main/resources/  

│       ├── static/

│       ├── tamplates/

│       ├── application.propertities

│  │── frontend/               

│  ├── src/app/

│       ├── components/ 

│             ├── about

│             ├── about

│             ├── addbooks

│             ├── forgotpassword

│             ├── home

│             ├── login

│             ├── register

│             ├── stats

│       ├── services/ 

│             ├── usre.service.spec.ts

│             ├──user.service.ts

│        ├── assets/

│          ├── app.js

│          └── index.html

│        ├── package.json

├── pom.xml

└── README.md            

------

## ⚙️ How to Run

**Backend**

```bash
cd backend
mvn spring-boot:run
`````
***Backend runs on: http://localhost:8080***

**Frontend**

```bash
cd frontend
ng serve
`````
***Frontend runs on: http://localhost:4200***

## 🛢️ Database Configuration

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/librarydb 
spring.datasource.username=postgres  
spring.datasource.password=sakshi  
spring.datasource.driver-class-name=org.postgresql.Driver
``````
***Using PostgreSQL as the database.***

-------

## 🔮 Future Enhancements

- 📖 Add book catalog and borrowing/return system.

- 🔑 Implement JWT-based authentication & role-based access control.

- 📊 Advanced dashboard with charts and analytics.

- ☁️ Deploy on cloud (AWS / Render / Vercel).

--------

## ✨ Conclusion

***This project provides a strong foundation for a Library Management Platform where administrators can manage students and faculty, track library usage, and later extend the system for book inventory and transactions.***

 ------
 
## 📞Contact

***If you have any questions or feedback, feel free to reach out:***

**Sakshi Shipkule**

📧 Email: shipkulesakshi682@gmail.com

🌐 GitHub: (https://github.com/Shipkule-Sakshi).

----------

## 🖼️ Screenshots
-------
## 1)🏠 Home Page:-

<img width="1880" height="932" alt="Screenshot 2025-08-19 225209" src="https://github.com/user-attachments/assets/a4d3f5fa-2797-4b86-805f-3bf0d9a4fbbf" />

## 2)ℹ️ About Page:-

<img width="1865" height="915" alt="Screenshot 2025-08-19 225921" src="https://github.com/user-attachments/assets/f9d968fd-4b73-45ac-975d-95f8fa04768c" />

## 3)📝 Register Page:-

<img width="1869" height="912" alt="Screenshot 2025-08-20 144342" src="https://github.com/user-attachments/assets/5a44ed75-1395-44a6-a533-8735a1856ab1" />

## 4)🎓 Student-Login:-

<img width="1862" height="901" alt="Screenshot 2025-08-20 144741" src="https://github.com/user-attachments/assets/5190046d-8ee7-4f7e-8ed8-0d80029681ba" />

## 5)👨‍🏫 Faculty-Login:-

<img width="1842" height="880" alt="Screenshot 2025-08-20 144816" src="https://github.com/user-attachments/assets/0b9659e0-ae91-4040-893a-0dad48c020c5" />

## 6)➕ Add Books:-

<img width="1896" height="914" alt="Screenshot 2025-08-20 144929" src="https://github.com/user-attachments/assets/b7d2f41e-cd32-49e7-8576-852728aab610" />

## 7)📊  Registered Users Statistics OR Registered Users List :-

<img width="1869" height="920" alt="Screenshot 2025-08-20 145140" src="https://github.com/user-attachments/assets/ab5c9c2e-c1b5-42f3-b9d3-c33a01a9597e" />

# ⭐ Thank You for Visiting!

## 🙏 Thank you for taking the time to explore this project! 💻 Your interest, feedback, and support are greatly appreciated. 🌟 I hope this project serves as a helpful reference, and I welcome any suggestions or constructive feedback. ✨
