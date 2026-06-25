const clients = [
  {
    name: "The Unity Rock Podcast",
    description:
      "This is the podcast where visionaries and integrators come together to share real stories, practical strategies, and hard-earned insights. Hosted by Clayton Stenson, The Unity Guide, the show dives into meaningful conversations with builders and innovators in the EOS community. Each episode explores how vision turns into action, how people bring ideas to life, and what it truly takes to create lasting impact in business and leadership. If you're interested in authentic conversations with people who are making things happen, follow, subscribe, and join us as we get into the conversation.",
    embedUrl: "https://open.spotify.com/embed/episode/0paPREkRCyNzmje7w8vN6o",
    platform: "spotify" as const,
  },
  {
    name: "Million Dollar Relationship Podcast",
    description:
      "Have you ever been introduced to a person that completely changed the course of your business or your life... so much so, that much of what you have today wouldn't be possible, if not for this person? Each week on The Million Dollar Relationships Podcast, your host, Kevin Thompson, interviews successful entrepreneurs, founders, and CEOs as they share their personal stories and experiences around this very question.",
    embedUrl: "https://open.spotify.com/embed/episode/6cmodHb84EuCqM6lFcTCsx",
    platform: "spotify" as const,
  },
  {
    name: "The Me I'm Becoming Podcast",
    description:
      "The Me I'm Becoming Podcast is a safe space for survivors of trauma and abuse, especially fellow 'bitter survivors', to feel seen, heard, and supported. After escaping over 20 years of domestic violence in 2022, I now share real stories from my journey — the pain, the healing, and everything in between. Hosted by Linh Lee, this podcast is about hope, honesty, and reminding you that you're not alone. Whether you're still in it or healing, The Me I'm Becoming offers connection, strength, and solidarity, one episode at a time.",
    embedUrl: "https://open.spotify.com/embed/episode/42GEcm1AIM3mBjDdcFHn88",
    platform: "spotify" as const,
  },
  {
    name: "Ain't That Good Podcast",
    description:
      "The Ain't That Good podcast is an honest and gritty podcast that reframes this life through the lens of Christ and his teachings. Tonya, Brandy, Kiesha, and Chelsey are all sinners, saved by grace through Jesus, being transformed by God's goodness and love.",
    embedUrl: "https://open.spotify.com/embed/episode/28c2mKmjfrQBlx03wT5rtM",
    platform: "spotify" as const,
  },
  {
    name: "The Unserious Podcast",
    description:
      "This is a light-hearted show where Mannie shares allegedly funny stories and talks about random topics in the most exaggerated and unserious way possible!",
    embedUrl: "https://open.spotify.com/embed/episode/7x5Vf2qdy7wSBRApaMPJbu",
    platform: "spotify" as const,
  },
  {
    name: "Grieve with Christ After Loss",
    description:
      "Grieve with Christ After Loss is a podcast for Christian women navigating the pain of losing a loved one. Hosted by Kaitlyn, a Certified Christian Life Coach specializing in grief, each episode offers biblical grief support, spiritual encouragement, and practical tools to help listeners process emotions without guilt, rebuild their faith, and rediscover their God-given purpose. Whether you're struggling with loneliness, emotional triggers, or simply wondering if you're grieving the right way, this podcast reminds you that you don't have to walk the road of loss alone. Listeners are also invited to join the private Facebook community, Faith-Based Grief Support for Women, for continued connection and healing.",
    embedUrl: "https://embed.podcasts.apple.com/eg/podcast/41-how-do-you-trust-god-after-losing-your-husband-mary/id1790301490",
    platform: "apple" as const,
  },
  {
    name: "On Record with Mannie",
    description:
      "This is a Music podcast series hosted by Mannie. Mannie will be taking you on a journey through the world of music. Are you a music enthusiast or just a music lover? Join him while he dives into music commentary, music-related stories, and interviews with special guests. Sit back, relax and have a good listen!",
    embedUrl: "https://open.spotify.com/embed/episode/10GxJxrg1vy2hNkFSrMFv3",
    platform: "spotify" as const,
  },
  {
    name: "The Blank Page Podcast",
    description:
      "Welcome to The Blank Page, where we celebrate the books that shaped us and the ones we're just discovering. Each episode, we explore the craft behind great writing, powerful characters, plot twists and stories that stay with us long after we've turned the final page. This podcast is co-hosted by two long time friends, Gary Chris who is a lawyer and content writer and Fortune who is a writer, author and UI/UX designer.",
    embedUrl: "https://open.spotify.com/embed/episode/4sfoABdWtdeM0YyRffAriA",
    platform: "spotify" as const,
  },
];

export default function ClientShowcase() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {clients.map((client) => (
          <div key={client.name}>
            <h2 className="font-bricolage text-2xl sm:text-3xl font-extrabold text-brand-black-dark mb-4">
              {client.name}
            </h2>
            <div className="rounded-2xl border-2 border-brand-black-dark shadow-[4px_4px_0px_0px_#060606] overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Podcast embed */}
                <div className="w-full sm:w-[340px] shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-brand-black-dark bg-white flex items-center justify-center p-6">
                  {"platform" in client && client.embedUrl ? (
                    client.platform === "apple" ? (
                      <iframe
                        src={client.embedUrl}
                        width="100%"
                        height="175"
                        style={{ borderRadius: "10px" }}
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        loading="lazy"
                      />
                    ) : (
                      <iframe
                        src={`${client.embedUrl}?utm_source=generator`}
                        width="100%"
                        height="152"
                        style={{ borderRadius: "12px" }}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    )
                  ) : null}
                </div>

                {/* Description */}
                <div className="flex-1 p-6 sm:p-8 flex items-center">
                  <p className="font-poppins text-sm sm:text-base text-brand-black-light leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
