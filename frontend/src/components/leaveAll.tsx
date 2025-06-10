import axios from "axios";

const warnText = "his ation will remove all bots from all servers."

export default function LeaveAll() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!confirm("Are you sure you want to remove all bots from all servers? This action cannot be undone.")) {
      return;
    }

    axios.post("/api/bots/leaveAll")
      .then(response => {
        if (response.status === 200) {
          alert(response.data.counte + " bots have been successfully removed from all servers.");
        } else {
          alert("Failed to remove bots. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error removing bots:", error);
        alert("An error occurred while removing bots. Please check the console for details.");
      });
  }

  return (
    <div className="card bg-white shadow-md p-6 m-4 w-60">

      <h2 className="text-lg text-center pb-4" >Leave All Bots</h2>
      
      <div className="flex flex-col items-center justify-center">
        <p className="mb-3 font-mono italic text-xs font-medium text-gray-500 dark:text-gray-400">{warnText}</p>

        <form onSubmit={handleSubmit} >
          <input type="submit" className="btn btn-primary" value={"Leave All"} title={warnText}/>
        </form>
      </div>
    </div>
  )
}
