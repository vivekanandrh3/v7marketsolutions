import config from './promotions.json';
export type Campaign = (typeof config.campaigns)[number];
export const indiaDay = (time: Date) => new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'Asia/Kolkata', year:'numeric', month:'2-digit', day:'2-digit'
}).format(time);
function validDay(day: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return false;
  const date = new Date(day + 'T00:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().startsWith(day);
}
export function activeOffers(day: string, settings = config) {
  if (!settings.enabled || !validDay(day)) return [];
  return settings.campaigns.filter(c => c.enabled && validDay(c.start) && validDay(c.end) &&
    c.start <= day && day <= c.end && /^[A-Z0-9-]{2,24}$/.test(c.code) &&
    Number.isInteger(c.percent) && ((c.group === 'first-time learners' && c.percent === 20) ||
    (c.group === 'referred learners' && c.percent >= 20 && c.percent <= 30)));
}
export const conditionalFee = (rupees: number, percent: number) => Math.round(rupees * (100 - percent)) / 100;
