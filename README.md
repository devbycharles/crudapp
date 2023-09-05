# HR Recruitment Software

This is a full stack application that streamlines the recruitment process for recruiters by providing them with a centralized repository to organize and manage candidate information. This innovative solution eliminates the need for scattered documentation methods, significantly enhancing efficiency and effectiveness in candidate tracking and communication.

## Technologies Used

- **Vue.js**: The frontend of the application is built using Vue.js, a popular JavaScript framework for building user interfaces.

- **Node.js**: The backend of the application is powered by Node.js, which allows for efficient server-side operations.

- **Express**: Express.js is used as the backend framework, providing a robust and scalable foundation for building RESTful APIs.

- **Sequelize/TypeScript**: Sequelize, along with TypeScript, is used for database modeling and interactions. It provides a strong typing system for enhanced code quality.

- **Tailwind CSS**: Tailwind CSS is utilized for styling and designing the user interface, making it easy to create responsive and visually appealing components.

- **MySQL**: MySQL serves as the database management system, ensuring data integrity and reliability.

## Features

- **Centralized Repository**: Recruiters can store all candidate information in one place, making it easy to access and manage.

- **Efficient Data Entry**: Streamlined forms and user-friendly interfaces make it quick and convenient to input candidate details.

- **Filter**: Recruiters can search for specific candidates or filter them based on a couple of criteria, improving searchability.

- **Scalable**: The application is designed to scale with your organization's needs, accommodating a growing list of candidates and recruiters.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies for both the frontend and backend:

   ```
   cd client
   npm install
   ```

   ```
   cd server
   npm install
   ```

3. Configure the database connection in the `server/config/config.json` file.

4. Run the migrations and seed data:

   ```
   cd server
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

5. Start the frontend and backend servers:

   ```
   cd client
   npm run serve
   ```

   ```
   cd server
   npm start
   ```

6. Access the application in your browser at `http://localhost:8080`.

## Contributing

Contributions to this project are welcome! If you find any issues or have ideas for improvement, please open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the open-source community for providing the tools and libraries that made this project possible.
- Inspired by the need to streamline and enhance the recruitment process for recruiters everywhere.
