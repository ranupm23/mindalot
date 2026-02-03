
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function MicroHabitsBlogPage() {
  return (
    <main className="bg-white text-[#5B4B3E]">
      {/* Blog Header */}
      <Header navTextColor="#755840" />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-sm uppercase tracking-wider text-[#5B4B3E]/70 mb-3">
          Mind A Lot · Mental Wellness
        </p>

        {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Mental Wellness Without Overthinking: <br />
          7 Micro-Habits That Actually Stick
        </h1> */}
        
<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
  <span className="whitespace-nowrap">
    Mental Wellness Without Overthinking:
  </span>
  <br />
  <span className="text-2xl md:text-4xl">
    7 Micro-Habits That Actually Stick
  </span>
</h1>

        <p className="text-lg text-[#5B4B3E]/80 leading-relaxed max-w-3xl mx-auto">
          Seven small, realistic habits that reduce mental load, improve focus,
          and help you feel more in control—without dramatic routines.
        </p>
      </section>

      {/* Blog Content */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        {/* Intro */}
        <p className="text-[17px] leading-[30px] text-[#5B4B3E]/85 mb-10">
          Most people quit “self-care” because it’s designed like a new personality.
          You don’t need an hour-long morning routine, a perfect diet, or a total
          screen detox to feel better.
          <br /><br />
          What you actually need are small, repeatable actions that reduce mental
          load and increase your sense of control.
        </p>

        {/* Habit Cards */}
        <div className="space-y-10">
          {/* Habit 1 */}
          <div className="border border-[#5B4B3E]/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              1) The 90-Second Reset (When Emotions Spike)
            </h2>
            <p className="text-[#5B4B3E]/80 leading-relaxed">
              When anxiety, anger, or panic rises, your brain wants instant relief
              (scrolling, arguing, escaping). Instead:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-[#5B4B3E]/80">
              <li>Sit still for 90 seconds</li>
              <li>Inhale normally, exhale a little longer</li>
            </ul>
            <p className="mt-4 text-[#5B4B3E]/75">
              This allows the emotional surge to pass without reacting impulsively.
            </p>
          </div>

          {/* Habit 2 */}
          <div className="border border-[#5B4B3E]/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              2) The “One-Tab Rule” (For Focus)
            </h2>
            <p className="text-[#5B4B3E]/80 leading-relaxed">
              Keep only one browser tab open while working. Every extra tab
              quietly drains attention and increases mental switching.
            </p>
          </div>

          {/* Habit 3 */}
          <div className="border border-[#5B4B3E]/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              3) Two-Line Journaling (Not Diary Writing)
            </h2>
            <p className="text-[#5B4B3E]/80 leading-relaxed">
              Forget long journaling. Do this once a day:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-[#5B4B3E]/80">
              <li>Line 1: “Today, my mind is stuck on ___.”</li>
              <li>Line 2: “One small step I can take is ___.”</li>
            </ul>
            <p className="mt-4 text-[#5B4B3E]/75">
              This converts vague stress into a next action—without overanalyzing.
            </p>
          </div>

          {/* Habit 4 */}
          <div className="border border-[#5B4B3E]/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              4) A 10-Minute “Mess Cleanup” Block
            </h2>
            <p className="text-[#5B4B3E]/80 leading-relaxed">
              Set a timer for 10 minutes and clean one small area—desk, inbox,
              notes, or room. Mental clutter reduces when physical clutter does.
            </p>
          </div>

          {/* Habit 5 */}
          <div className="border border-[#5B4B3E]/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              5) The “3-2-1” Screen Landing (After Scrolling)
            </h2>
            <p className="text-[#5B4B3E]/80 leading-relaxed">
              Scrolling isn’t the enemy. Mindless exits are. After you put the phone down:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-[#5B4B3E]/80">
              <li>3 deep breaths</li>
              <li>2 sentences: “What am I doing next?”</li>
              <li>1 physical action (drink water, stand up, open a book)</li>
            </ul>
          </div>

          {/* Habit 6 */}
          <div className="border border-[#5B4B3E]/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              6) The “First 5 Minutes Only” Rule
            </h2>
            <p className="text-[#5B4B3E]/80 leading-relaxed">
              Motivation is unreliable. Start for just five minutes.
              If you stop after five, that’s okay—most times, you won’t.
            </p>
          </div>

          {/* Habit 7 */}
          <div className="border border-[#5B4B3E]/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3">
              7) One Honest Conversation a Day
            </h2>
            <p className="text-[#5B4B3E]/80 leading-relaxed">
              Not a deep talk. Just one honest sentence with someone safe:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-[#5B4B3E]/80">
              <li>“I’m overloaded today.”</li>
              <li>“I’m avoiding something.”</li>
              <li>“I need 10 minutes.”</li>
            </ul>
          </div>
        </div>

        {/* Practical Note */}
        <div className="mt-16 bg-[#F6F1EB] border border-[#5B4B3E]/20 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-3">A Practical Note</h3>
          <p className="text-[#5B4B3E]/80 leading-relaxed">
            If your sleep, appetite, panic symptoms, or daily functioning are
            severely affected for weeks, don’t rely on tips alone—professional
            support matters.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
