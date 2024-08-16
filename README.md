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
 
   ### Technologies Used:
   - **Frontend:** Built using HTML, CSS, and JavaScript, with React.js for a dynamic user interface.  
   - **Backend:** Powered by Express.js, handling API requests and server-side logic.  
   - **Database:** MongoDB for storing and managing book, member, and borrowing data.
   - **Firebase**: Used for user authentication.  
   - **State Management:** Managed using React’s state and context APIs, along with TanStack Query for efficient server state management.   
   - **Data Fetching:**  Used Tanstack Query(React Query) and Axios.  
  
  ### How to Use:
   #### Client
    **1. Clone the Repository :**    
    ```git clone https://github.com/sour0v1/sg-client.git```  

    **2. Navigate to the Project Directory :**     
    ```cd sg-client```  

    **3. Install Dependencies :**     
    ```npm install```  

    **4. Set Up Firebase :**  
    Create a Firebase project and configure your environment with Firebase credentials:     
    ```api_key : your api key  ```
