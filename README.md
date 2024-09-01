

Getting Started

Prerequisites

Before you can run this project locally, make sure you have the following installed:

	•	Node.js (recommended version: v22.4.1 or higher)
    • React (recommended version: v18 or higher)
    • Next.js  (recommended version:  14 or higher)


Installation

Follow these steps to get your development environment set up:

	1.	Clone the repository

    git clone https://github.com/StjepanH96/Market.git
    cd movie-app

    2.	Install dependencies
        
    npm install

    3.	Start the application using 

    npm run dev

    4.	Optionally you can run the development server with docker 

    docker-compose up


Architecture


	•	React: Manages the UI components and data.
	•	Next.js: Facilitates server-side rendering and static site generation.
	•	Redux & Redux Toolkit: Manages state across the application, enhancing Redux usage for easier configuration and maintenance. Favorites are saved using local storage inside FavoritesContext.tsx.
	•	Dummy APIs: Nested inside pages/api. Browser caching is also utilized to enhance performance.

Backend Setup

	•	Next.js API Routes: pages/api/search.js Handles backend operations like searching and fetching movies directly within the Next.js framework. 
    •	Next.js API Routes: pages/api/login.js Handles backend operations for authorization of user
        •	Next.js API Routes: pages/api/refresh.js Handles backend operations for  refreshing  token. 


Modern JavaScript Features (ES6+)

	•	Utilizes arrow functions, async/await, destructuring, modules, and more to keep the codebase modern and clean.

Features

	•	A search bar component has been added for searching products, with navigation using arrow keys, the Enter key, and mouse clicks. When a product is selected, the user is redirected to the individual product page.
	•	A custom module has been added to display product details, including price, rating, and stock availability.
	•	An error module with an error state has been added at the application level, along with a loading state, both managed by the reducer.
	•	Products have been added to the reducer for initialization using Redux slice. Pagination has been implemented, where an additional 20 products are fetched and stored in the product state upon scrolling to the bottom.
	•	A filter has been added to the categories page, which filters products as specified in the task. Centralized data is stored in productsByCategories due to a different API call being used.
	•	A shopping cart has been added where products are stored using CartContext, and user authorization is managed through AuthContext.

Scripts

Here are some useful commands you can use:

	•	npm run dev: Runs the app in development mode.
	•	npm run build: Builds the app for production.
	•	npm start: Starts a production server.
	•	npm run lint: Lints and fixes files.
