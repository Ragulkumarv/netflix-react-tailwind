export const netflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const userLogo =
  "https://occ-0-3252-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const baseBGImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg";

export const errorBGImage =
  "https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png";

export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWE1NTM0NDVkNTNhMGI5Zjc5NGQ4NDhiNzZlMGUwZCIsIm5iZiI6MTcyMzIxNzU5Ny4xNTM4NTMsInN1YiI6IjY2YjMyZDQ4YjJkMWM1NWM3OTZmMGE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tl0SAru2gLLzC8nRM13p0eb0RYp00Ua-J4wQAK-x7R4",
  },
};

export const Region_US = "US";

export const Region_IN = "IN";

export const NowPlaying_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" +
  "&region=" +
  Region_IN;

export const Popular_API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=9" +
  "&region=" +
  Region_IN;

export const TOP_Rated_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=9" +
  "&region=" +
  Region_IN;

export const Upcoming_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" +
  "&region=" +
  Region_IN;

export const TMDB_IMG_Path = "https://image.tmdb.org/t/p/w500/";

export const Youtube_Embed_BasePath = "https://www.youtube.com/embed/";

export const Youtube_Embed_Controls =
  "?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1";

export const Search_Movies_API_BaseURL =
  "https://api.themoviedb.org/3/search/movie?query=";

export const Search_Movies_API_Params =
  "&include_adult=false&language=en-US&page=1&region=IN";
