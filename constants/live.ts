// Dummy data for demonstration
export const matches: MatchType[] = [
  {
    id: 1,
    sport: "football",
    leagueType: "Premier League",
    isLive: true,
    matchStatus: "live",
    team1: {
      name: "Chelsea",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
      former: "CHE",
    },
    team2: {
      name: "Leicester C",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
      former: "LEI",
    },
    score: "0 - 1",
    duration: "49:30",
    winProbability: [
      { id: 1, team: "CHE", probability: "40%", percentage: 40 },
      { id: 2, team: "Draw", probability: "30%", percentage: 30 },
      { id: 3, team: "LEI", probability: "30%", percentage: 30 },
    ],
  },
  {
    id: 2,
    sport: "football",
    leagueType: "UEFA Europa League",
    isLive: false,
    matchStatus: "finished",
    team1: {
      name: "Arsenal",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      former: "ARS",
    },
    team2: {
      name: "Roma",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg",
      former: "ROM",
    },
    score: "0 - 1",
    duration: "88:42",
    winProbability: [
      { id: 1, team: "ARS", probability: "20%", percentage: 20 },
      { id: 2, team: "Draw", probability: "30%", percentage: 30 },
      { id: 3, team: "ROM", probability: "50%", percentage: 50 },
    ],
  },
];
