import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="hero pt-16"
        style={{
          backgroundImage: "url(/globe.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-page relative z-10 grid min-h-[74vh] items-center gap-10 py-20 sm:grid-cols-2">
          <div className="text-white">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              You Don’t Have to Say Who You Are
              <br />
              to Start Feeling Better.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              Mind A Lot is an anonymous, app-based counselling platform that connects you instantly to a real, trained professional — no bookings, no waiting, no judgment. Just real help, right when you need it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-white text-slate-900 hover:bg-white/90">
                Start Chat Now
              </Button>
              <Button variant="secondary" className="bg-transparent text-white border-white/70 hover:bg-white/10">
                Download the App
              </Button>
            </div>
          </div>
          <div className="hidden sm:block" />
        </div>
      </section>

      {/* What Makes Us Different */}
      <section id="features" className="section">
        <div className="container-page">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Instant Human Support",
                "Start chatting the moment you feel overwhelmed. No forms. No queues. A real counsellor responds in seconds.",
              ],
              [
                "100% Anonymous",
                "Choose a nickname. Your real identity stays private — even counsellors won’t know who you are.",
              ],
              [
                "Flexible Access",
                "Prefer video or voice? Want to choose your counsellor? You can book that.",
              ],
              [
                "Goal-Based Nudges",
                "Set personal growth goals; get tiny, doable nudges to stay on track.",
              ],
              [
                "Mood Tracker That Guides",
                "Tap how you're feeling and we guide you from there. No mood history.",
              ],
              [
                "Self-Discovery Tools",
                "Short assessments to understand patterns, stressors, and needs in under 5 minutes.",
              ],
              [
                "Rich Content Library",
                "Expert-curated videos, podcasts, real stories, and journaling prompts.",
              ],
            ].map(([title, desc]) => (
              <div key={title as string} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who" className="section bg-slate-50">
        <div className="container-page">
          <h2 className="section-title">Who It’s For</h2>
          <p className="section-desc">
            Mind A Lot is for everyone who wants to feel better, grow stronger, and cope smarter.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Students & Young Adults",
                "Exam stress, peer pressure, identity struggles, loneliness",
              ],
              [
                "Working Professionals",
                "Burnout, overthinking, career decisions, relationship stress",
              ],
              ["LGBTQ+ Community", "Safe, affirming space to talk about anything"],
              [
                "Older Adults",
                "Loss, loneliness, transitions, or simply needing someone to talk to",
              ],
              [
                "Neurodivergent Users",
                "ADHD, emotional regulation, social fatigue, planning struggles",
              ],
              [
                "Anyone Needing Support",
                "When friends or family aren’t enough, or too much",
              ],
            ].map(([title, desc]) => (
              <div key={title as string} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-base font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section className="section" aria-labelledby="snapshot">
        <div className="container-page">
          <h2 id="snapshot" className="section-title">
            Features Snapshot
          </h2>
          <ul className="mt-6 grid list-disc gap-2 pl-5 text-slate-700 sm:grid-cols-2">
            {[
              "24/7 Live Chat With Human Counsellors",
              "Goal Tracker With Behavioural Nudges",
              "Mood-Based Guidance (No Mood History)",
              "Bite-Sized Self Assessments",
              "Expert Videos, Podcasts, and Content Drops",
              "Works Across Countries & Languages",
              "Escalation To Partner Hospitals If Needed",
              "100% Anonymity Guaranteed",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-slate-50">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          {[
            [
              "“No one asked me for my name, and yet I’ve never felt more seen.”",
              "Student, Chennai",
            ],
            [
              "“Honestly, it’s better than every corporate EAP I’ve used. Instant, human, and kind.”",
              "Manager, Bangalore",
            ],
            [
              "“One nudge a day helped me stay afloat without pressure.”",
              "Solo Parent, Vizag",
            ],
          ].map(([quote, by]) => (
            <blockquote key={by as string} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-700">{quote as string}</p>
              <footer className="mt-3 text-xs text-slate-500">— {by as string}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="download">
        <div className="container-page flex flex-col items-start gap-4 rounded-2xl bg-brand px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Start talking. Stay anonymous. Feel lighter.</h2>
            <p className="mt-1 text-white/90">Because your mind matters — a lot.</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-white text-brand hover:bg-white/90" variant="secondary">
              Download App
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
