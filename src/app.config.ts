import { defineServer, defineRoom } from "colyseus";
import { SessionRoom } from "./rooms/SessionRoom.js";

const server = defineServer({
  rooms: {
    session: defineRoom(SessionRoom),
  },
});

export default server;
