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
export interface Odds {
  bookmaker: {
    id: number;
    name: string;
  };
  bets: {
    id: number;
    name: string;
    values: {
      value: string;
      odd: string;
    }[];
  }[];
}
