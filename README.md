# 1. Title

Doctor API

# 2. Introduction

The proposed project is an appointment management application designed to facilitate seamless communication and appointment scheduling between doctors and patients. The application provides a user-friendly interface for both doctors and patients, enabling them to manage their appointments efficiently. The primary features of the application include doctor registration, appointment display for doctors, doctor search and reservation for patients, and the option to choose between video or clinic appointments.

# 3. Technologies And Tools

- Node.js
- Express.js
- JavaScript
- bcrypt library to encrypt password
- multer library to upload files and photos
- MongoDB
- MongoDBCompass
- Mongoose Atlas
- VS Code
- Postman
- Railway Deployment

# 4. Features

## 1. Doctor Registration

Doctors can register an account with the application.
Required details include name, contact information, specialization, and clinic location (if applicable).

## 2. Appointment Display for Doctors:

Doctors can log in to their accounts and access their personalized dashboard.
The dashboard displays upcoming appointments in a clear and organized manner.
Doctors can view patient details, appointment timings, and appointment types (video or clinic).
Doctors have the ability to update or cancel appointments as needed.

## 3. Patients Search and Reservation at doctor

Patients can search for doctors based on specialization, location, or name.
The application provides a database of registered doctors for easy access.
Detailed doctor profiles are available, including qualifications, experience, and clinic information.
Patients can make reservations with their chosen doctor.

## 4. Appointment Type Selection

Patients can choose between video consultations or clinic appointments during the reservation process.
Video consultations allow for virtual visits, eliminating the need for physical presence.
Clinic appointments enable in-person visits to the doctor's clinic.

## 5. Additional Features:

Appointment reminders and notifications are provided for doctors and patients.
Secure messaging functionality between doctors and patients.
A rating and review system for patients to provide feedback on the healthcare services received.

# 5. Setup
## 1. install this project

## 2. create Database using mongoose

## 3. create file named config.env and fill it using following data:

### PORT
PORT=
NODE_ENV=development

### DataBase
DB_PASSWORD=
DB_USER=
DB_NAME=

### DataBase URL
DB_URL=

### Images URL
BASE_URL=

### JWT
JWT_SECRET_KEY=
JWT_EXPIRE_TIME=


## 5. open cmd and write this command "npm i" the "npm run start:dev"

******hint payment only production mode after deployment******

