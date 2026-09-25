import type { Sponsor } from "@/types";

interface SponsorBannerProps {
  sponsor: Sponsor;
}

export default function SponsorBanner({
  sponsor,
}: SponsorBannerProps) {
  return (
    <aside className="rounded-lg border p-4">
      <p className="text-sm font-semibold">Sponsored</p>

      <h2 className="mt-1 text-lg font-semibold">
        {sponsor.name}
      </h2>

      <a
        href={sponsor.sponsorUrl}
        className="mt-2 inline-block underline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Visit {sponsor.name}
      </a>
    </aside>
  );
}