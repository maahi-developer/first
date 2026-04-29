import { useParams } from "react-router-dom";

export default function BodyPart() {
  const { name } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Exercises for: {name}</h1>
    </div>
  );
}
