<img width="528" height="264" alt="image" src="https://github.com/user-attachments/assets/9f0cb610-16a3-4b6a-8498-7a3dfe421658" />

Travlr Getaways Website Build-out 
CS 465 Project Software Design Document
Version 3.0
 
Table of Contents

CS 465 Project Software Design Document	1
Table of Contents	2
Document Revision History	2
Instructions	2
Executive Summary	3
Design Constraints	3
System Architecture View	3
Component Diagram	3
Sequence Diagram	4
Class Diagram	4
API Endpoints	4
The User Interface	4

Document Revision History

Version	Date	Author	Comments
1.0	07/20/2025	Casey Farmer	The MEAN stack is utilized for the development of a web-based application.
 2.0	08/04/2025	Casey Famer	I have completed the sequence diagram, class diagram for JavaScript classes, and API Endpoints table for the web application, which I will deliver to the Travlr Getaways client.

3.0
	08/14/2025
	Casey Farmer
	SPA User Interface



Fill in all bracketed information on page one (the cover page), in the Document Revision History table, and below each header. Under each header, remove the bracketed prompt and write your own paragraph response covering the indicated information.  
Executive Summary

       The Travlr Getaways web application will utilize the MEAN stack (MongoDB, Express.js, Angular, Node.js) for both customer and administrator interfaces. The user interface will be created using HTML, CSS, and JavaScript, while Angular will provide dynamic user experience. Data will be stored and accessed from the MongoDB database, with Express.js on the back end for reliable access.

The customer-facing portion of the application will be runtime using Node.js, with Express.js developing RESTful APIs for interactions between the MongoDB database and the front end. Express.js will handle tasks such as user authentication, data management, trip booking, and retrieval of trip/itinerary information.

The front-end will be Angular, with its modular design and built-in routing capabilities for efficient and maintainable navigation. MongoDB will store all the application's data, including trips, itinerary, and vacation information, and maintain simplicity and structure by logically organizing data into collections.

The administrator single-page application (SPA) will be used as a separate interface for the  Travlr Getaways staff to oversee and manage various aspects of the web application. The SPA will be developed using the Angular stack, with proper authentication and authorization protocols for system security. It will seamlessly interface with the Node.js and Express.js backend, streamlining communication and data flow for administrative functions.



Design Constraints

        

        The design constraints for Travlr Getaways include budget, time, security, and other factors. The budget will influence decisions like technology choices, scalability, and features. It is crucial to consider the cost of everything being developed and ensure transparency throughout the process. Time is another significant constraint, as the client has a deadline for the application's launch. Adhering to this schedule may limit the number of features or complexity. 

        Proper planning with a realistic timeframe is essential to stay on track. Security is a crucial concern, as the application will handle sensitive personal data. Ensuring utmost security adds to development time and requires strict adherence to regulatory standards like HIPAA or GDPR. The development team must prioritize security measures to safeguard user information effectively. Other design constraints may not have as significant an impact as the constraints previously discussed.




System Architecture View

Component Diagram
 

A text version of the component diagram is available: CS 465 Full Stack Component Diagram Text Version. 

The diagram depicts the main components of an application: client side, database, and server side. The server and client-side use ports for connection, while the database stores data. The customer can view and use the web application through these components, with an interface using identifications for server users.
 
Sequence Diagram




 
The diagram illustrates the three key components: client, database, and server. The user logs in, accesses the view, and the server connects to the Travlr website using MongoDB. A scope is assigned, and a view is displayed. The data is then delivered to the user via HTTP.

        The browser displays a client-side view/template, displaying webpage information. When a user clicks on an anchor tag, the controller invokes an HTTP Client to act as a mediator between client-side and server-side. The HTTP Client requests API information for each page, which is processed and sent to a MongoDB Database. The database displays the requested information to the user, waiting for a new request to display it. This process ensures efficient and user-friendly web experiences.











Class Diagram

 
The class diagram illustrates the relationships between classes, starting with a standard account for travel agents. These agents can progress to higher positions and roles within the system. The data for Flight Info, Cruise Info, and Hotel Info is stored in Travelers Info, which interacts with the website to display the site's information to the user. This system allows travel agents to view and interact with various items within the system.

Class Description of 12 Classes

• Membership_Admin: An aggregation of MemberAccount with one or more itineraries.
• Creditpoints: A public boolean function that returns an itinerary.
• Getpoints: An int, membernum, and a string, frequent_airline.
• Validate: A public boolean function that returns an int, membernum, and a string, frequent_airline.
• Travel_Agent: An inherited member account realized by Itinerary, HotelBooking, FlightBooking, and CruiseBooking.
• BookPackage: An itinerary returned by BookPackage().
• BookFlight: An itinerary returned by BookFlight().
• BookHotel: An itinerary returned by BookHotel().
• CruiseInfo: An inherited TravellerInfo, inheriting TripInfo, and realized by Itinerary and CruiseBooking.
• Other: An inherited TravellerInfo, inherited TripInfo, and realized by Itinerary and FlightBooking.
• TripInfo: An inherited TravellerInfo, inherited by CruiseInfo, FlightInfo, and HotelInfo.



API Endpoints


Method	Purpose	URL	Notes
GET	Retrieve a list of blogs	/api/blogs	Returns all active blogs
GET	Retrieve a list of ‘latest’ 	/api/latest	Returns all active ‘latest’
GET	Retrieve a list of meals	/api/meals	Returns all active meals
GET	Retrieve a list of news	/api/news	Returns all active news
GET	Retrieve a list of rooms	/api/rooms	Returns to all active rooms
GET	Retrieve a list of testimonials	/api/testimonials	Returns all active testimonials
GET	Retrieve a list of trips	/api/trips	Returns all active trips
GET	Retrieve a single blog	/api/blogs/:blogcode	Returns a single blog instance, based on the title provided in the request URL.
GET	Retrieve a single ‘latest’ post	/api/latest/:latestcode	Returns a single 'latest' post instance based on the title provided to the request URL.
GET	Retrieve single meal	/api/meals/:mealcode	Returns a single meal instance, based on the mealName provided in the request URL.
GET	Retrieve single news post	/api/news/:newscode	Returns a single poster, identified by the posterName provided in the request URL.

GET	Retrieve a single room	/api/rooms/:roomcode	returns a single room instance, based on the name provided in the request URL.

GET	Retrieve a single testimonial	/api/testimonials/:testimonialcode	returns a single testimonial instance, corresponding to the person who was referred to the request URL.
GET	Retrieve a single trip	/api/trips/:tripcode	returns a single trip instance, determined by the code provided in the request URL.
POST	Create a single blog	/api/blogs/	Creates a single blog 
POST	Create a single ‘latest’ post	/api/latest/	Creates a single ‘latest’ post
POST	Create a single meal	/api/meals/	Creates a single meal
POST	Create a single news post	/api/news/	Creates a single post
POST	Create a single room	/api/rooms/	Creates a single room 
POST	Create a single testimonial	/api/testimonials/	Creates a single testimonial instance
POST	Create a single trip	/api/trips/	Creates a single trip instance
PUT	Updates a single blog	/api/blogs/:blogcode	Updates a single blog instance, which is determined by the title provided to the request URL.
PUT	Updates a single ‘latest’ post	/api/latest/:latestcode	updates a single 'latest' post instance, based on the title provided to the request URL.
PUT	Updates a single meal	/api/meals/:mealcode	updates a single meal instance, which is determined by the mealName provided in the request URL.
PUT	Updates a single news post	/api/news/:newscode	updates a single poster, which is identified by the posterName provided to the request URL.
PUT	Updates a single room	/api/rooms/:roomcode	updates a single room instance, which is identified by the name provided in the request URL.
PUT	Updates a single testimonial	/api/testimonials/:testimonialcode	updates a single testimonial instance, which is identified by the person who accessed the request URL.
PUT	Updates a single trip	/api/trips/:tripcode	updates a single trip instance, which is determined by the code provided to the request URL.
DELETE	Deletes a single blog	/api/blogs/:blogcode	deletes a single blog instance, determined by the title provided to the request URL.
DELETE	Deletes a single ‘latest’ post	/api/latest/:latestcode	deletes a single 'latest' post instance, determined by the title provided to the request URL.
DELETE	Deletes a  single meal	/api/meals/:mealcode	deletes a single meal instance, based on the mealName provided in the request URL.
DELETE	Deletes a single news post	/api/news/:newscode	deletes a single poster, based on the posterName provided in the request URL.
DELETE	Deletes a single room	/api/rooms/:roomcode	deletes a single room instance, based on the name provided in the request URL.
DELETE	Deletes a single testimonial	/api/testimonials/:testimonialcode	deletes a single testimonial instance, based on the person who was referred to truest URL.
DELETE	Deletes a single trip	/api/trips/:tripcode	deletes a single trip instance, determined by the code provided to the request URL.





The User Interface

On opening page:

 

















Just added a new trip to the list: Manele Bay, Hawaii.

 







The edit page for each Trip.

 
On Edit page:

 





















Angular project structure is different from that of the Express HTML



        The Angular project structure differs from the Express HTML customer-facing page structure. Angular is a client-side framework, with a structure focusing on organizing client-side code. The travlr project has several essential folders, including'src', 'assets', 'app', and 'environments'. On the other hand, the Express framework is responsible for server-side logic, with an 'app_server' folder for server configuration, 'routes' for managing route handlers, 'views' for server-rendered HTML templates, and a 'public' folder for serving static assets. The main difference lies in their roles.

        Single Page Applications (SPAs) offer advantages such as faster user experiences, responsive designs, reduced server load, smooth navigation without full page reloads, and support for offline use through service worker caching. However, they face SEO challenges due to initial client-side rendering and may have longer initial load times. SPAs can be more complex to develop and maintain, especially for large applications, and their heavy client-side rendering can strain older or less capable devices. Despite these drawbacks, SPAs provide dynamic loading, real-time updates, and a consistent, single-page user experience, making them suitable for interactive and responsive applications.

        The process of testing SPA's functionality with the API to GET and PUT data in the database involves using MongoDB and Google Chrome's built-in developer tools. After making changes, cross-referencing MongoDB to ensure changes were reflected in the database documents. Monitoring client and admin web pages to ensure they were dynamically updated. One issue encountered was data formatting, where an unintentional '$' sign was included in the cost field, leading to errors as the system expected an integer value
