import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface Props {
  scores: Record<string, number>; // { '资源规划': 80, '养成倾向': 60, ... }
}

export default function MinimalRadar({ scores }: Props) {
  const data = Object.keys(scores).map(key => ({
    subject: key,
    A: scores[key],
    fullMark: 100,
  }));

  return (
    <div className="w-full h-48 -ml-2">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} stroke="rgba(0,0,0,0.1)" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#4b5563', fontSize: 11, fontWeight: 500 }} 
          />
          <Radar
            name="Score"
            dataKey="A"
            stroke="#111827"
            strokeWidth={1.5}
            fill="#111827"
            fillOpacity={0.15}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
