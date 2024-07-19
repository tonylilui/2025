"use client";

import { Session } from "next-auth";
import {Team} from "@prisma/client";

interface UserProfileProps {
  session: Session;
  team: Team;
}

export function UserProfile(props: UserProfileProps) {

  return (
    <div>
      <h1>Your application is just your profile.</h1>
      <h2>All you have to do is fill it in.</h2>
      {JSON.stringify(props.session, null, 2)}

      <h1>Your team</h1>
      <p>Team name: {props.team.name}</p>
      <p>Invite code: {props.team.id}</p>
    </div>
  );
}
