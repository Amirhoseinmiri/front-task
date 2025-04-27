/* eslint-disable @typescript-eslint/no-explicit-any */
// types/footballTypes.ts

export type League = {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  seasons: Season[];
};

export type Season = {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
  };
};

export type LeaguesResponse = {
  get: string;
  parameters: any[];
  errors: any[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: League[];
};

// types/footballTypes.ts
export type Fixture = {
  fixture: {
    id: number;
    date: string; // Match date
    status: string; // Match status (e.g., "LIVE", "FINISHED")
    venue: {
      name: string; // Venue name
      city: string; // Venue city
    };
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
    };
    away: {
      id: number;
      name: string;
      logo: string;
    };
  };
  score: {
    fulltime: {
      home: number;
      away: number;
    };
    halftime: {
      home: number;
      away: number;
    };
  };
};

// types/footballTypes.ts

export type Event = {
  time: {
    elapsed: number;
    extra: number | null;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  type: string; // Event type (e.g., "Goal", "Card")
  detail: string; // Event details (e.g., "Normal Goal", "Yellow Card")
  comments: string | null;
};

export type PlayerStats = {
  games: {
    minutes: number;
    number: number;
    position: string;
    rating: string;
    captain: boolean;
    substitute: boolean;
  };
  shots: {
    total: number | null;
    on: number | null;
  };
  goals: {
    total: number | null;
    conceded: number | null;
    assists: number | null;
  };
  passes: {
    total: number;
    key: number | null;
    accuracy: string;
  };
  tackles: {
    total: number | null;
    blocks: number | null;
    interceptions: number | null;
  };
  duels: {
    total: number;
    won: number;
  };
  dribbles: {
    attempts: number | null;
    success: number | null;
    past: number | null;
  };
  fouls: {
    drawn: number | null;
    committed: number | null;
  };
  cards: {
    yellow: number | null;
    red: number | null;
  };
  penalty: {
    won: number | null;
    committed: number | null;
    scored: number | null;
    missed: number | null;
    saved: number | null;
  };
};

export type FixtureDetails = {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
      extra: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
    standings: boolean;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
  events: Event[];
  lineups: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    formation: string;
    startXI: {
      player: {
        id: number;
        name: string;
        number: number;
        pos: string;
      };
    }[];
    substitutes: {
      player: {
        id: number;
        name: string;
        number: number;
        pos: string;
      };
    }[];
  }[];
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    statistics: {
      type: string;
      value: number | string;
    }[];
  }[];
  players: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    players: {
      player: {
        id: number;
        name: string;
        photo: string;
      };
      statistics: PlayerStats[];
    }[];
  }[];
};

interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface ApiFootballResponse {
  response: Array<{
    fixture: Fixture;
    teams: {
      home: Team;
      away: Team;
    };
  }>;
}

export interface FixtureResponse {
  get: string; // Type of request (e.g., "fixtures")
  parameters: {
    team: string; // Team ID as a string
    season: string; // Season year as a string
  };
  errors: any[]; // Any errors that might occur (empty in this case)
  results: number; // Total number of results
  paging: {
    current: number; // Current page of the results
    total: number; // Total pages available
  };
  response: FixtureLast10Game[]; // Array of fixture objects
}

// Fixture object representing each match
export interface FixtureLast10Game {
  fixture: {
    id: number; // Fixture ID
    referee: string; // Referee's name
    timezone: string; // Timezone for the match
    date: string; // Match date (ISO format)
    timestamp: number; // Match timestamp
    periods: {
      first: number; // Timestamp for the first half
      second: number; // Timestamp for the second half
    };
    venue: {
      id: number; // Venue ID
      name: string; // Venue name
      city: string; // City where the match is held
    };
    status: {
      long: string; // Full status of the match (e.g., "Match Finished")
      short: string; // Short status (e.g., "FT" for Full Time)
      elapsed: number | null; // Time elapsed in minutes (null if not started or live)
      extra: string | null; // Extra time status (null if no extra time)
    };
  };
  league: {
    id: number; // League ID
    name: string; // League name
    country: string; // Country where the league is played
    logo: string; // Logo URL for the league
    flag: string; // Country flag URL
    season: number; // Season year
    round: string; // Round description (e.g., "Regular Season - 1")
    standings: boolean; // Whether standings are available
  };
  teams: {
    home: {
      id: number; // Home team ID
      name: string; // Home team name
      logo: string; // Logo URL for the home team
      winner: boolean | null; // Whether the home team won (null if not decided yet)
    };
    away: {
      id: number; // Away team ID
      name: string; // Away team name
      logo: string; // Logo URL for the away team
      winner: boolean | null; // Whether the away team won (null if not decided yet)
    };
  };
  goals: {
    home: number; // Goals scored by the home team
    away: number; // Goals scored by the away team
  };
  score: {
    halftime: {
      home: number | null; // Home team score at halftime
      away: number | null; // Away team score at halftime
    };
    fulltime: {
      home: number | null; // Home team score at full-time
      away: number | null; // Away team score at full-time
    };
    extratime: {
      home: number | null; // Home team score during extra time (if applicable)
      away: number | null; // Away team score during extra time (if applicable)
    };
    penalty: {
      home: number | null; // Home team penalty score (if applicable)
      away: number | null; // Away team penalty score (if applicable)
    };
  };
}
