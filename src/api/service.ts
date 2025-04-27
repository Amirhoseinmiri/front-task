/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fixture, FixtureDetails, FixtureResponse, League } from "../types";
import axiosInstance from "./config";

// 1. Fetch List of Leagues
export const getLeagues = async (): Promise<League[]> => {
  try {
    const response = await axiosInstance.get("/leagues", {
      params: {
        season: 2023, // Fetching leagues for the current season
        country: "England", // Fetching leagues for England
      },
    });
    return response.data.response; // Returning the leagues data
  } catch (error) {
    console.error("Error fetching leagues:", error);
    throw new Error("Error fetching leagues");
  }
};

// 2. Fetch Fixtures for a Specific League
export const getFixtures = async (
  leagueId: number,
  season = 2023
): Promise<Fixture[]> => {
  try {
    const response = await axiosInstance.get("/fixtures", {
      params: {
        league: leagueId,
        season: season,
      },
    });
    return response.data.response; // Returning the list of fixtures
  } catch (error) {
    console.error("Error fetching fixtures:", error);
    throw new Error("Error fetching fixtures");
  }
};

// 3. Fetch Fixture Details
export const getFixtureDetails = async (
  fixtureId: number
): Promise<FixtureDetails[]> => {
  try {
    const response = await axiosInstance.get(`/fixtures?id=${fixtureId}`);
    return response.data.response; // Returning the fixture details
  } catch (error) {
    console.error("Error fetching fixture details:", error);
    throw new Error("Error fetching fixture details");
  }
};

// 4. Fetch Odds for a Specific Fixture
export const getOdds = async (fixtureId: number): Promise<any> => {
  try {
    const response = await axiosInstance.get("/odds", {
      params: { fixture: fixtureId },
    });
    return response.data.response; // Returning the odds data
  } catch (error) {
    console.error("Error fetching odds:", error);
    throw new Error("Error fetching odds");
  }
};

// 5. Fetch Last 10 Games for a Team
export const getLast10Games = async (
  teamId: number,
  season = 2023
): Promise<FixtureResponse> => {
  try {
    const response = await axiosInstance.get(`/fixtures`, {
      params: {
        team: teamId,
        season,
      },
    });
    return response.data; // Returning the last 10 games data
  } catch (error) {
    console.error("Error fetching last 10 games:", error);
    throw new Error("Error fetching last 10 games");
  }
};
