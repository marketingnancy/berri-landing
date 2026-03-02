import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirect to the static HTML page
    window.location.replace("/berri.html");
  }, []);

  return null;
}
