export function GET() {
  return new Response(JSON.stringify({
    data: [
      {option: "standard room", value: "ROOM_STANDARD"},
      {option: "regal room", value: "ROOM_REGAL"},
      {option: "diplomat room", value: "ROOM_DIPLOMAT"},
      {option: "executive suite", value: "ROOM_EXEC_SUITE"},
    ]
  }));
}