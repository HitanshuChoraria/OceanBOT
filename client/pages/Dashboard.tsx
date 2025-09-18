import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const series = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2024, i, 1).toLocaleString("en", { month: "short" }),
  value: Math.round(50 + Math.sin(i / 2) * 25 + i * 2 + (i % 3) * 6),
}));

export default function Dashboard() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight">Insights Dashboard</h1>
      <p className="mt-2 text-muted-foreground">A glance at trends across datasets and domains.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Kpi label="Datasets" value="58,214" />
        <Kpi label="Species" value="241,098" />
        <Kpi label="Vessels" value="121,553" />
      </div>

      <Card className="mt-8 p-4">
        <ChartContainer
          config={{ series: { label: "Records", color: "hsl(200 90% 45%)" } }}
          className="h-[300px]"
        >
          <LineChart data={series} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis width={32} tickLine={false} axisLine={false} />
            <Line type="monotone" dataKey="value" stroke="var(--color-series)" strokeWidth={2} dot={false} />
            <ChartTooltip cursor={{ stroke: "hsl(0 0% 80%)" }} content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </Card>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-4 text-center">
      <div className="text-2xl font-bold text-sky-700">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </Card>
  );
}
