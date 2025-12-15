# U-NetFlix-GPT

- Create React App
- Configured Tailwind CSS
- Header 
- Routing of App
- Login
- SignUp/Login Form (Same for both)
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our App to Production
- Creating user by firebase api
- Signing In user by firebase api
- Setting up redux store
- central OnAuth setUp kiya taaki har jgh dispatch action na karna pde
- update Profile firebase API se displayName kiya
- Signout API lgayi header me button k through
- login se profile picture bhi update ho rhi hai (photoURL)
- condtional rendering lga di hai ki jb sign-in/sign-up ho tab tb signout na dikhe
- Bugfix: central navigation system taaki user !login  to browse page nhi show hoga Nd vice-versa
- unsubcribing onauthstate change kyunki as a event listener kaam kar rha hai to memeory leak bnhi ho sakta hai
- Added constants folder for keeping long strings and photo_URLS
- Registered on TMDB and create a app. When asked for url so pasted netlify app url
- Then we'll get the API and api accesstoken
- Go to movielists > Now playing movies > copy the code and make a fetch API call in browse page
- VideoBackground me background trailer attach karna with help of Videos API from TMDB
- VideoTitle me getNowPlaying movies se data show karna movie name, overview
- Getting random movie at each refresh by random logic from Netflix
- trailerVideo adding in redux MovieSlice
- Embeded Youtube video in VideoBackground make it autoplay and Mute (Tailwind CSS : ex- aspect video)
- Planning of MainContainer and Secondary Container
- Secondary Container me MovieList and MovieCard ki design di aur scrollable bnaya
- Secondary Container ko bg-black diya aur black gradient diya
- MovieList me MovieCard ko loop kra diya
- Now playing movies, Top Rated Movies, Popular Movies, Upcoming movies ki API se data fetch karke different movie List
- sabke like differnet hooks bnaye aur redux store me store karwaya
- Made the Browse page wholesome and amazing
- Implementing GPT search for movie reccomendation
- Added browserShimmer UI for better UX.
- Conditional Rendering of pages based on API movies data we get
- If don't get movie data we just show shimmer UI

# Features

- Login/SignUp 
    - redirect to Browser Page

- Browse (After Authentication)  
   - Header
   - Main Movie
          -Trailer in Background
          - Title & Desctription
          - Movies Suggestions
            - MoviesLists * N

- Netflix GPT
          - Search Bar
          - Movie Suggestions
