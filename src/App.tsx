import { useState } from 'react';
import { Header } from './components/Header';
import { ActivityDisplay } from './components/ActivityDisplay';
import { ActivityForm } from './components/ActivityForm';
import { Footer } from './components/Footer';

function App() {
  const [budget, setBudget] = useState<string>('free'); 
  const [days, setDays] = useState<number>(1);
  const [activity, setActivity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetActivity = async () => {
    setIsLoading(true);
    setActivity(null);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          temperature: 0.9,
          messages: [
            {
              role: "system",
              content: `You are an Anti-Scroll Coach.

              Your only mission is to get the user off the screen and into a real-world experience.
              
              Rules:
              
              * Suggest exactly ONE activity.
              * The activity must be completely screen-free once started.
              * Prioritize novelty, challenge, curiosity, learning, movement, creativity, social connection, adventure, or personal growth.
              * Avoid repeatedly suggesting hikes, walks, nature activities, or exercise unless they are genuinely the most interesting option.
              * Rotate across wildly different categories:

              * Creative (pottery, painting, woodworking, blacksmithing, photography with a film camera)
              * Physical (boxing, climbing, dance, cold-water swimming, rowing)
              * Adventure (skydiving, paragliding, sailing, survival courses)
              * Learning (language meetup, improv theatre, cooking class, wine tasting)
              * Social (board-game café, dance socials, volunteering, community events)
              * Unusual (falconry, glassblowing, beekeeping, fencing, circus skills)
              * Reflective (silent retreat, journaling in a park, visiting a museum alone)

              Response style:

              * Very short.
              * High energy.
              * Confident.
              * Slightly provocative.
              * Make the user feel that staying on the screen is the boring option.
              * End with a direct challenge.
              * If more than 1 day, it can be more vacation then.

              Example:
              "Enough scrolling. Find a pottery studio and spend two hours trying to shape a bowl. Your first one will probably look ridiculous. Perfect. Go make something that exists outside the internet. Leave now."`,
            },
            {
              role: "user",
              content: `The user has selected:\n- Budget level: ${budget}\n- Time frame: ${days} day(s)`,
            },
          ],
          max_tokens: 120,
        }),
      });

      const data = await response.json();

    if (!response.ok) {
    console.error("API-wrong:", data);
    setActivity("Something went wrong with API-key, check console!");
    } else {
    setActivity(data.choices[0].message.content);
    }

  } catch (error) {
      console.error("Something went wrong..", error);
      setActivity("Uh, something was wrong, try again!");
    } finally {
      setIsLoading(false)
    }
  };
 
  return (
    <main className="relative min-h-screen text-[#4e2413] overflow-hidden">
    <div className="absolute inset-0 -z-1 pointer-events-none">
      <div className="custom-shape-divider-top-1781010609">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
    </div>
    <div className="custom-shape-divider-top-1781010711">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
    </div>
    <div className="custom-shape-divider-top-1781010826">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
    </div>
    <div className="custom-shape-divider-top-1781011007">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
    </div>
    <div className="custom-shape-divider-top-1781011069">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
    </div>
    <div className="custom-shape-divider-top-1781011156">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
    </div>
    </div>

    <div className="flex flex-col gap-y-1">
      <Header />

      <section id="content" className="p-0 flex flex-col items-center gap-y-4">
        <p className="mb-4 text-xl text-[#854d0e]">
          {isLoading 
          ? "Thinking..." 
          : !activity && "Here is your challenge"}
        </p>

        <ActivityForm
        budget={budget}
        setBudget={setBudget}
        days={days}
        setDays={setDays}
        onGenerate={handleGetActivity}
        isLoading={isLoading}
        />

        <ActivityDisplay activity={activity} />

            <Footer />
      </section>
      </div>
    </main>
  );
}

export default App;