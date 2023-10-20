const tickets = [
  "Paris-Skopje",
  "Zurich-Amsterdam",
  "Prague-Zurich",
  "Barcelona-Berlin",
  "Kiev-Prague",
  "Skopje-Paris",
  "Amsterdam-Barcelona",
  "Berlin-Kiev",
  "Berlin-Amsterdam",
];

const startCity = "Kiev";
const route = [startCity];

while (route.length < tickets.length + 1) {
  // Get the current city, which is the last element in the route array.
  const currentCity = route[route.length - 1];

  // Find the next ticket based on the current city.
  const nextTicket = tickets.find((ticket) =>
    ticket.startsWith(currentCity + "-")
  );

  if (!nextTicket) {
    break;
  }

  const [, destination] = nextTicket.split("-");

  route.push(destination);
}

if (route.length === tickets.length + 1) {
  console.log("The route  traveled is: " + route.join(" -> "));
} else {
  console.log("No valid route found.");
}
