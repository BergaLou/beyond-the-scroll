interface ActivityDisplayProps {
    activity: string | null;
}

export const ActivityDisplay = ({ activity }: ActivityDisplayProps) => {
    if (!activity) return null;

    return (
    <div className="max-w-2xl p-10 bg-white/50 rounded-lg border-2 border-[#5a2514]">
        <p className="text-xl italic text-[#461d10]">{activity}
        </p>
    </div>
    );
};