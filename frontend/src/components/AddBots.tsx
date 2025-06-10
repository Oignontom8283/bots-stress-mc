import axios from "axios";
import { useState } from "react"

export default function AddBots() {

  const [IPString, setIPString] = useState<string>("");
  const [nbBots, setNbBots] = useState<number>(1);
  const [namePrefix, setNamePrefix] = useState<string>("BOT_");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedIPString = IPString.trim();
    const trimmedNamePrefix = namePrefix.trim();

    if (!trimmedIPString || nbBots < 1) {
      alert("Please fill in all fields correctly.");
      return;
    }

    let ip
    let port
    if (/:/.test(trimmedIPString)) {
      const [ipSlited, portSplited] = trimmedIPString.split(":");
      if (!ipSlited || !portSplited) {
        alert("Invalid IP format. Use <ip>:<port>.");
        return;
      }

      port = parseInt(portSplited);
      if (isNaN(port) || port < 1 || port > 65535) {
        alert("Invalid port number. Use a number between 1 and 65535.");
        return;
      }
      ip = ipSlited;

    } else {
      ip = trimmedIPString;
      port = 25565; // Default port for Minecraft servers
    }

    axios.post("/api/bots/new", {
      ip: ip,
      port: port,
      nbBots: nbBots,
      prefix: trimmedNamePrefix
    }).then(response => {
      if (response.status === 200) {
        alert("Bots added successfully!" + response.data.message);
      } else {
        alert("Failed to add bots. Please try again.");
      }
    }).catch(error => {
      console.error("Error adding bots:", error);
      alert("An error occurred while adding bots. Please check the console for details.");
    })
  }

  return (
    <div className="card bg-white shadow-md p-6 m-4">

      <h2 className="text-lg text-center pb-4">Create bots</h2>

      {/* Add a bot in to a serveur */}
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Adress (IP)</legend>
          <input type="text" className="input" placeholder="<ip>:<port?>" value={IPString} onChange={(e) => setIPString(e.target.value)} />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Number of bots</legend>
          <input type="number" className="input" value={nbBots} onChange={(e) => setNbBots(parseInt(e.target.value))} />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name prefix</legend>
          <input type="text" className="input" value={namePrefix} onChange={(e) => setNamePrefix(e.target.value)} />
        </fieldset>

        <button type="submit" className="btn btn-primary mt-4">Add Bots</button>

      </form>

    </div>
  )
}