import useFetch from "./useFetch";

export default function useTeamsArticles(team) {
  return useFetch("/articles", "POST", JSON.stringify({ team }));
}

//this is for check in postman
// https://api.ui.dev/hash-history-basketball-league/articles
// {"team": "koalas"}
