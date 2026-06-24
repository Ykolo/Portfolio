/* Replays the page-enter transition on every navigation (a fresh
   instance is mounted per route change — including project slug changes). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="pt-enter">{children}</div>;
}
