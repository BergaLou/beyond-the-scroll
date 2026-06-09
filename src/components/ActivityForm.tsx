import { Button } from './Button';

interface ActivityFormProps {
    budget: string;
    setBudget: (value: string) => void;
    days: number;
    setDays: (value: number) => void;
    onGenerate: () => void;
    isLoading: boolean;
}

export const ActivityForm = ({ budget, setBudget, days, setDays, onGenerate, isLoading }: ActivityFormProps) => {
    return (
        <div className="flex flex-row gap-4 mb-8 p-10">
            <select value={budget} onChange={(e) => setBudget(e.target.value)} className="p-2 rounded border">
                <option value="free">Free</option>
                <option value="low">Budget</option>
                <option value="high">Luxury</option>
            </select>

            <input
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="p-2 rounded border"
            />

        <Button onClick={onGenerate}>
          {isLoading ? "Adventure is waiting on you..." : "generate adventure!"}
        </Button>
    </div>
    )
}