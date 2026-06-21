import { Room, Client, CloseCode } from "colyseus";
import { SessionState } from "./schema/SessionState.js";
import { PlayerState } from "./schema/PlayerState.js";

export class SessionRoom extends Room {
  maxClients = 7;
  state = new SessionState();

  messages = {
    yourMessageType: (client: Client, message: any) => {
      /**
       * Handle "yourMessageType" message.
       */
      console.log(client.sessionId, "sent a message:", message);
    },
  };

  onJoin(client: Client) {
    const playerState = new PlayerState();
    playerState.name = "Player " + client.sessionId;
    this.state.players.set(client.sessionId, playerState);
    console.log(client.sessionId, "joined!");
  }

  onLeave(client: Client, code: CloseCode) {
    this.state.players.delete(client.sessionId);
    console.log(client.sessionId, "left!", code);
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
