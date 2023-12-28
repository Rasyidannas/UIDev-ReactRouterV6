import { useParams } from "react-router-dom";

export default function TeamPage() {
  const { teamId } = useParams();

  return <div className="container">Team page for {teamId}</div>;
}
