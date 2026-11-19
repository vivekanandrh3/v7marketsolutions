import examples from '@/lib/lesson-charts.json';

export function LessonChart({slug}: {slug:string}) {
  const example = examples[slug as keyof typeof examples];
  if (!example) return null;
  const max = Math.max(...example.points.map(p=>p.value));
  return <figure className="rounded-lg border bg-card p-5 mb-6">
    <figcaption className="font-semibold mb-4">{example.caption}</figcaption>
    <dl className="space-y-2">{example.points.map(point=><div key={point.label}>
      <div className="flex justify-between gap-3 text-sm"><dt>{point.label}</dt><dd>{point.value.toLocaleString('en-IN')}</dd></div>
      <div aria-hidden="true" className="mt-1 h-2 rounded bg-muted"><div className="h-full rounded bg-primary" style={{width:(100*point.value/max)+'%'}} /></div>
    </div>)}</dl><p className="mt-3 text-xs text-muted-foreground">Hypothetical example · bars start at zero</p>
  </figure>;
}
