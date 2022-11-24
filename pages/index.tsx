import { useState, useEffect } from "react";
import { client, recommendProfiles } from "../api";

export default function Home() {
  // const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendProfiles).toPromise();
      console.log({ response });
    } catch (err) {
      console.log("error fetching recommended profiles: ", err);
    }
  }

  return <div>Something goes here.</div>;
}
