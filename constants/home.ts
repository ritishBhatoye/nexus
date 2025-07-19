import { Colors } from "./Colors";

export const sliderDummy = [
  {
    id: 1,
    matchType: "International T20",
    event: "India vs Australia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    color: Colors.light.tint,
  },
  {
    id: 2,
    matchType: "Champions League",
    event: "Real Madrid vs Liverpool",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Real_Madrid_CF.svg",
    color: Colors.dark.tint,
  },
  {
    id: 3,
    matchType: "NBA Finals",
    event: "Lakers vs Heat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
    color: "#FFB476",
  },
  {
    id: 4,
    matchType: "Grand Slam Final",
    event: "Nadal vs Federer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Rafael_Nadal_2011.svg",
    color: "#0a7ea4",
  },
];

export const TopEventsFilterData: EventItemType[] = [
  {
    id: 1,
    name: "Football",
    icon: "football-outline",
  },
  {
    id: 2,
    name: "Cricket",
    icon: "baseball-outline",
  },
  {
    id: 3,
    name: "Basketball",
    icon: "basketball-outline",
  },
  {
    id: 4,
    name: "Tennis",
    icon: "tennisball-outline",
  },
  {
    id: 5,
    name: "Hockey",
    icon: "sports-outline",
  },
  {
    id: 6,
    name: "Golf",
    icon: "golf-outline",
  },
  {
    id: 7,
    name: "Boxing",
    icon: "hand-right-outline",
  },
  {
    id: 8,
    name: "MMA",
    icon: "fitness-outline",
  },
  {
    id: 9,
    name: "Rugby",
    icon: "american-football-outline",
  },
  {
    id: 10,
    name: "Volleyball",
    icon: "basketball-outline",
  },
  {
    id: 11,
    name: "Badminton",
    icon: "tennisball-outline",
  },
  {
    id: 12,
    name: "Table Tennis",
    icon: "tennisball-outline",
  },
  {
    id: 13,
    name: "Formula 1",
    icon: "car-sport-outline",
  },
  {
    id: 14,
    name: "Cycling",
    icon: "bicycle-outline",
  },
  {
    id: 15,
    name: "Swimming",
    icon: "water-outline",
  },
];

export const matchLiveDummyData: MatchType[] = [
  // Football
  {
    id: 1,
    sport: "football",
    leagueType: "Premier League",
    duration: "45' 1st Half",
    score: "2 - 1",
    team1: {
      name: "Manchester United",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
      former: "MUN",
    },
    team2: {
      name: "Chelsea FC",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
      former: "CHE",
    },
    winProbability: [
      { id: 1, team: "MUN", probability: "55%", percentage: 55 },
      { id: 2, team: "Draw", probability: "20%", percentage: 20 },
      { id: 3, team: "CHE", probability: "25%", percentage: 25 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 2,
    sport: "football",
    leagueType: "La Liga",
    duration: "60' 2nd Half",
    score: "1 - 3",
    team1: {
      name: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      former: "RMA",
    },
    team2: {
      name: "Barcelona",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
      former: "BAR",
    },
    winProbability: [
      { id: 1, team: "RMA", probability: "30%", percentage: 30 },
      { id: 2, team: "Draw", probability: "10%", percentage: 10 },
      { id: 3, team: "BAR", probability: "60%", percentage: 60 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 3,
    sport: "football",
    leagueType: "Serie A",
    duration: "HT",
    score: "0 - 0",
    team1: {
      name: "Juventus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg",
      former: "JUV",
    },
    team2: {
      name: "AC Milan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
      former: "MIL",
    },
    winProbability: [
      { id: 1, team: "JUV", probability: "40%", percentage: 40 },
      { id: 2, team: "Draw", probability: "35%", percentage: 35 },
      { id: 3, team: "MIL", probability: "25%", percentage: 25 },
    ],
    isLive: false,
    matchStatus: "upcoming",
  },
  {
    id: 4,
    sport: "football",
    leagueType: "Bundesliga",
    duration: "FT",
    score: "2 - 2",
    team1: {
      name: "Bayern Munich",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg",
      former: "BAY",
    },
    team2: {
      name: "Borussia Dortmund",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
      former: "BVB",
    },
    winProbability: [
      { id: 1, team: "BAY", probability: "50%", percentage: 50 },
      { id: 2, team: "Draw", probability: "30%", percentage: 30 },
      { id: 3, team: "BVB", probability: "20%", percentage: 20 },
    ],
    isLive: false,
    matchStatus: "finished",
  },
  // Cricket
  {
    sport: "cricket",
    id: 5,
    leagueType: "IPL",
    duration: "12.3 ov",
    score: "120/3",
    team1: {
      name: "Mumbai Indians",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/25/Mumbai_Indians_Logo.svg",
      former: "MI",
    },
    team2: {
      name: "Chennai Super Kings",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Chennai_Super_Kings_Logo.svg",
      former: "CSK",
    },
    winProbability: [
      { id: 1, team: "MI", probability: "45%", percentage: 45 },
      { id: 2, team: "Draw", probability: "10%", percentage: 10 },
      { id: 3, team: "CSK", probability: "45%", percentage: 45 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 6,
    sport: "cricket",
    leagueType: "The Ashes",
    duration: "Day 2, 1st Session",
    score: "250/6",
    team1: {
      name: "England",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/England_cricket_team_logo.svg",
      former: "ENG",
    },
    team2: {
      name: "Australia",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Australia_national_cricket_team_logo.svg",
      former: "AUS",
    },
    winProbability: [
      { id: 1, team: "ENG", probability: "35%", percentage: 35 },
      { id: 2, team: "Draw", probability: "25%", percentage: 25 },
      { id: 3, team: "AUS", probability: "40%", percentage: 40 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 7,
    leagueType: "Big Bash League",
    sport: "cricket",
    duration: "18.4 ov",
    score: "145/7",
    team1: {
      name: "Sydney Sixers",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Sydney_Sixers_logo.svg",
      former: "SIX",
    },
    team2: {
      name: "Melbourne Stars",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Melbourne_Stars_logo.svg",
      former: "STA",
    },
    winProbability: [
      { id: 1, team: "SIX", probability: "60%", percentage: 60 },
      { id: 2, team: "Draw", probability: "5%", percentage: 5 },
      { id: 3, team: "STA", probability: "35%", percentage: 35 },
    ],
    isLive: false,
    matchStatus: "upcoming",
  },
  {
    id: 8,
    sport: "cricket",
    leagueType: "PSL",
    duration: "10.0 ov",
    score: "80/2",
    team1: {
      name: "Lahore Qalandars",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/Lahore_Qalandars_logo.svg",
      former: "LHQ",
    },
    team2: {
      name: "Karachi Kings",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Karachi_Kings_logo.svg",
      former: "KRK",
    },
    winProbability: [
      { id: 1, team: "LHQ", probability: "55%", percentage: 55 },
      { id: 2, team: "Draw", probability: "15%", percentage: 15 },
      { id: 3, team: "KRK", probability: "30%", percentage: 30 },
    ],
    isLive: false,
    matchStatus: "finished",
  },
  //
  {
    id: 9,
    sport: "basketball",
    leagueType: "NBA Finals",
    duration: "Q3 08:23",
    score: "89 - 85",
    team1: {
      name: "Los Angeles Lakers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
      former: "LAL",
    },
    team2: {
      name: "Miami Heat",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
      former: "MIA",
    },
    winProbability: [
      { id: 1, team: "LAL", probability: "52%", percentage: 52 },
      { id: 2, team: "Draw", probability: "0%", percentage: 0 },
      { id: 3, team: "MIA", probability: "48%", percentage: 48 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 10,
    sport: "basketball",
    leagueType: "EuroLeague",
    duration: "Q4 02:10",
    score: "75 - 78",
    team1: {
      name: "CSKA Moscow",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/CSKA_Moscow_basketball_logo.svg",
      former: "CSK",
    },
    team2: {
      name: "Fenerbahce",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Fenerbahçe_S.K._basketball_logo.svg",
      former: "FEN",
    },
    winProbability: [
      { id: 1, team: "CSK", probability: "40%", percentage: 40 },
      { id: 2, team: "Draw", probability: "5%", percentage: 5 },
      { id: 3, team: "FEN", probability: "55%", percentage: 55 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 11,
    sport: "basketball",
    leagueType: "NCAA",
    duration: "HT",
    score: "41 - 39",
    team1: {
      name: "Duke Blue Devils",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Duke_Blue_Devils_logo.svg",
      former: "DUK",
    },
    team2: {
      name: "Kentucky Wildcats",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kentucky_Wildcats_logo.svg",
      former: "KEN",
    },
    winProbability: [
      { id: 1, team: "DUK", probability: "60%", percentage: 60 },
      { id: 2, team: "Draw", probability: "0%", percentage: 0 },
      { id: 3, team: "KEN", probability: "40%", percentage: 40 },
    ],
    isLive: false,
    matchStatus: "upcoming",
  },
  {
    id: 12,
    leagueType: "WNBA",
    sport: "basketball",
    duration: "FT",
    score: "68 - 70",
    team1: {
      name: "Seattle Storm",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/Seattle_Storm_logo.svg",
      former: "SEA",
    },
    team2: {
      name: "Phoenix Mercury",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Phoenix_Mercury_logo.svg",
      former: "PHX",
    },
    winProbability: [
      { id: 1, team: "SEA", probability: "48%", percentage: 48 },
      { id: 2, team: "Draw", probability: "2%", percentage: 2 },
      { id: 3, team: "PHX", probability: "50%", percentage: 50 },
    ],
    isLive: false,
    matchStatus: "finished",
  },
  // Tennis
  {
    id: 13,
    sport: "tennis",
    leagueType: "Wimbledon",
    duration: "Set 2",
    score: "6-4, 3-6",
    team1: {
      name: "Novak Djokovic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Novak_Djokovic_2011_in_cropped.jpg",
      former: "DJOK",
    },
    team2: {
      name: "Roger Federer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Roger_Federer_2012_in_cropped.jpg",
      former: "FED",
    },
    winProbability: [
      { id: 1, team: "DJOK", probability: "52%", percentage: 52 },
      { id: 2, team: "FED", probability: "48%", percentage: 48 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 14,
    sport: "tennis",
    leagueType: "US Open",
    duration: "Set 1",
    score: "7-5",
    team1: {
      name: "Serena Williams",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Serena_Williams_2013_US_Open.jpg",
      former: "SER",
    },
    team2: {
      name: "Naomi Osaka",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Naomi_Osaka_2016.jpg",
      former: "OSK",
    },
    winProbability: [
      { id: 1, team: "SER", probability: "60%", percentage: 60 },
      { id: 2, team: "OSK", probability: "40%", percentage: 40 },
    ],
    isLive: true,
    matchStatus: "live",
  },
  {
    id: 15,
    sport: "tennis",
    leagueType: "Australian Open",
    duration: "Set 3",
    score: "6-2, 4-6, 5-5",
    team1: {
      name: "Ashleigh Barty",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ashleigh_Barty_2018.jpg",
      former: "BAR",
    },
    team2: {
      name: "Simona Halep",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Simona_Halep_2015.jpg",
      former: "HAL",
    },
    winProbability: [
      { id: 1, team: "BAR", probability: "55%", percentage: 55 },
      { id: 2, team: "HAL", probability: "45%", percentage: 45 },
    ],
    isLive: false,
    matchStatus: "upcoming",
  },
  {
    id: 16,
    sport: "Tennis",
    leagueType: "French Open",
    duration: "FT",
    score: "6-3, 6-7, 7-5",
    team1: {
      name: "Rafael Nadal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Rafael_Nadal_2011.svg",
      former: "NAD",
    },
    team2: {
      name: "Dominic Thiem",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Dominic_Thiem_2019.jpg",
      former: "THI",
    },
    winProbability: [
      { id: 1, team: "NAD", probability: "65%", percentage: 65 },
      { id: 2, team: "THI", probability: "35%", percentage: 35 },
    ],
    isLive: false,
    matchStatus: "finished",
  },
  // ... Continue for Hockey, Golf, Boxing, MMA, Rugby, Volleyball, Badminton, Table Tennis, Formula 1, Cycling, Swimming
];
