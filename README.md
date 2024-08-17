# Swapnashray-Granthagar
This repository contains the frontend of a comprehensive library management website. The platform allows users to explore, search, and borrow books, with Firebase integration for user authentication, and Express and MongoDB handling the backend and database management.

Live link - [Swapnashray-Granthagar](https://swapnashray-granthagar.web.app/)

## Features  

  ### User Features:  
   - **Book Browsing :** Users can explore a wide variety of books, categorized by subject.  
   - **Search Functionality:** Users can search for books by title or author name to quickly find what they're looking for.  
   - **Membership Registration:** Users can sign up to become reader members by submitting a registration form.  
   - **Book Borrowing**Registered members can borrow books directly through the website, with borrowing requests tracked.  
   
  ### Admin Features:  
   - **Add Books and Members:** Administrators can add new books and members to the library's inventory, with details stored in MongoDB via Express.     
   - **Borrow Request Management:** Admins can manage book borrowing requests, approve them, and track the borrowing history of members.  
 
## Technologies Used:
   - **Frontend:** Built using HTML, CSS, and JavaScript, with React.js for a dynamic user interface.  
   - **Backend:** Powered by Express.js, handling API requests and server-side logic.  
   - **Database:** MongoDB for storing and managing book, member, and borrowing data.
   - **Firebase**: Used for user authentication.  
   - **State Management:** Managed using React’s state and context APIs, along with TanStack Query for efficient server state management.   
   - **Data Fetching:**  Used Tanstack Query(React Query) and Axios.
## How to Use
This project is set up using [Vite](https://vitejs.dev/guide/), a fast build tool and development server, to enhance performance during development.

  #### Clone the Repository:
  `git clone https://github.com/sour0v1/sg-client.git`

  #### Navigate to the Project Directory:
  `cd sg-client`

  #### Install Dependencies:
  `npm install`

  #### Set Up Firebase:
  Create a Firebase project and configure your environment with Firebase credentials:
  ```
  FIREBASE_API_KEY=your_api_key
  FIREBASE_AUTH_DOMAIN=your_auth_domain
  FIREBASE_PROJECT_ID=your_project_id
  ......
  ```
  #### Run the Backend:
  Make sure the backend server (Express.js) is running and connected to your MongoDB instance.

  #### Start the Development Server (Using Vite):
  `npm run dev`
  

