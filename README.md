# **Netflix GPT** 🎥✨

**Netflix GPT** is a feature-rich, AI-powered Netflix clone built with **React**, **Firebase**, and **TailwindCSS**, offering a GPT-3-based search for movie recommendations. The app integrates with the **TMDB API** to fetch movie data and trailers, making browsing and searching for content engaging and intuitive. The project also includes essential authentication features such as Sign In, Sign Up, and Profile management, ensuring a seamless user experience.

## 🚀 **Live Demo**
Check out the live demo: [Netflix GPT Live](https://netflixgpt-c8294.web.app) (Add link after deployment)

## **Features**

### 🔐 **Authentication**
- **Login / Sign Up**: Register and log in with Firebase authentication.
- **Form Validation**: Validate inputs for email and password using `useRef`.
- **User Profile Update**: Update display name and profile picture upon sign-up.
- **Protected Routes**: Redirect to `/login` if the user is not authenticated; vice-versa for `/browse`.
- **Sign Out**: Safely log out using Firebase's `signOut` method.

### 🎬 **Browse Page**
- **Main Movie Container**: Displays the featured movie with a background trailer that auto-plays in mute mode.
- **Movie Suggestions**: GPT-powered recommendations based on search.
- **Movie Lists**: Dynamically fetched movie lists using the **TMDB API** for genres like popular, trending, etc.
- **Movie Trailers**: Embedded YouTube trailers in the background for selected movies.
  
### 🧠 **Netflix GPT Search**
- **Search Bar**: Type in your queries, and Netflix GPT will fetch tailored movie suggestions from **TMDB**.
- **AI-Powered Movie Suggestions**: Uses **OpenAI API** to provide AI-generated movie suggestions.
- **Multi-language Support**: Bonus feature that provides search results in multiple languages!

### 📦 **Tech Stack**
- **React.js**: Modern JavaScript framework for building the user interface.
- **Firebase**: For authentication, user management, and hosting.
- **Tailwind CSS**: For styling the components and responsive design.
- **Redux Toolkit**: For state management, with slices for movies and GPT-based suggestions.
- **TMDB API**: Fetches the latest movies, trending titles, and trailers.
- **OpenAI API**: Powers GPT-based movie recommendations.

## **Project Setup**

Before starting, ensure you have the required API keys for TMDB and OpenAI.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
   ```
2. **Install dependencies:**
 ```bash
 npm install
 ```
 3. **Create an .env file in the root directory:**
 ```bash
 REACT_APP_TMDB_API_KEY=your-tmdb-api-key
REACT_APP_OPENAI_API_KEY=your-openai-api-key
```
4. **Run the development server:**
```bash
npm start
```
## **Key Features Breakdown**

### **Firebase Authentication**
- **Sign Up / Sign In**: Firebase handles authentication for both new and returning users.
- **Profile Update**: After signing up, the app updates the user's display name and profile picture.

### **Redux Store**
- **User Slice**: Stores and manages user state.
- **Movie Slice**: Manages now playing, popular, and recommended movies.
- **GPT Slice**: Manages AI-powered movie suggestions fetched using the OpenAI API.

### **TMDB Integration**
- Fetches movie lists (now playing, popular, trending) using TMDB APIs.
- Embedded trailers using YouTube.

### **TailwindCSS**
- Fully responsive design, leveraging the utility-first CSS framework for rapid UI building.
- Custom dropdown for the profile picture with a "Sign Out" button.

---

## **Upcoming Features**
- **Improved GPT Integration**: Fine-tune the movie suggestion algorithm.
- **Advanced Search Filters**: Enable filtering by genre, year, and ratings.
- **Watchlist**: Allow users to save their favorite movies.

---

## **Contributing**

Feel free to fork this repository and submit pull requests. Contributions are welcome! For any major changes, please open an issue to discuss.

---

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.




