import examples from '@/lib/lesson-charts.json';

export function LessonChart({slug}: {slug:string}) {
  const example = examples[slug as keyof typeof examples];
  if (!example) return null;
  const max = Math.max(...example.points.map(p=>p.value));
  return <figure className="rounded-lg border bg-card p-5 mb-6">
    <figcaption className="font-semibold mb-4">{example.caption}</figcaption>
    <ul className="space-y-2">{example.points.map(point=><li key={point.label}>
      <div className="flex justify-between gap-3 text-sm"><span>{point.label}</span><span>{point.value.toLocaleString('en-IN')}</span></div>
      <div aria-hidden="true" className="mt-1 h-2 rounded bg-muted"><div className="h-full rounded bg-primary" style={{width:(100*point.value/max)+'%'}} /></div>
    </li>)}</ul><p className="mt-3 text-xs text-muted-foreground">Hypothetical example · bars start at zero</p>
  </figure>;
}
