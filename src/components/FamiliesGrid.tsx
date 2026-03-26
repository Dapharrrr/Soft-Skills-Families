import { Family } from "../types";
import FamilyButton from "./FamilyButton";

interface Props {
  families: Family[];
  onSelect: (family: Family) => void;
}

const FamiliesGrid = ({ families, onSelect }: Props) => (
  <main
    className="grid gap-3 max-w-3xl mx-auto px-4"
    style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}
  >
    {families.map((family) => (
      <FamilyButton key={family.id} family={family} onClick={onSelect} />
    ))}
  </main>
);

export default FamiliesGrid;
