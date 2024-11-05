import React, { useState } from 'react';
import Chellenge from "./Chellenge";
import './ButtomSection.css';

const challenges = [
  {
    id: 1,
    hydrationChallenge: "30-Minute Workout Every Day for a Week",
    aimToDrinkAbout4LitersOfW: "Commit to doing at least 30 minutes of exercise each day",
  },
  {
    id: 2,
    hydrationChallenge: "Environmental Challenge",
    aimToDrinkAbout4LitersOfW: "Spend at least 20 minutes outside each day for a week",
  },
  {
    id: 3,
    hydrationChallenge: "No Caffeine for a Week",
    aimToDrinkAbout4LitersOfW: "Eliminate caffeinated beverages  from your diet for a week",
  },
  {
    id: 4,
    hydrationChallenge: "Daily Stretching Routine for a month",
    aimToDrinkAbout4LitersOfW: "Spend 15-20 minutes each day stretching ",
  },
  {
    id: 5,
    hydrationChallenge: "Healthy Breakfast for a month",
    aimToDrinkAbout4LitersOfW: "Start each day with a nutritious breakfast that includes proteins",
  },
  {
    id: 6,
    hydrationChallenge: "Recovery Challenge",
    aimToDrinkAbout4LitersOfW: "Aim to sleep for 7-8 hours every night for a week ",
  },
];

const ButtomSection = () => {
  const [displayedChallenges, setDisplayedChallenges] = useState(challenges.slice(0, 3)); // Initial 3 challenges
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [selectedChallengeId, setSelectedChallengeId] = useState(null);

  const handleClick = (challengeId, action) => {
    let newDisplayedChallenges = [...displayedChallenges]; // Copy displayedChallenges
    if (action === "completed") {
      newDisplayedChallenges = newDisplayedChallenges.filter((c) => c.id !== challengeId);
      setCompletedChallenges((prevChallenges) => [...prevChallenges, challengeId]);
    } else if (action === "skip") {
      newDisplayedChallenges = newDisplayedChallenges.filter((c) => c.id !== challengeId);
    }

    // Find available challenge after update
    const availableChallengeId = getAvailableChallenge(newDisplayedChallenges);

    // Update states and trigger re-render if available challenge found
    if (availableChallengeId) {
      setDisplayedChallenges([...newDisplayedChallenges, challenges.find(c => c.id === availableChallengeId)]);
    }
    setSelectedChallengeId(null); // Deselect after any action
  };

  const getAvailableChallenge = (currentDisplayedChallenges) => {
    const allChallengeIds = challenges.map((c) => c.id);
    const displayedChallengeIds = currentDisplayedChallenges.map((c) => c.id);
    const completedChallengeIds = completedChallenges.map((c) => c);

    // Find the first challenge ID that's not displayed or completed
    return allChallengeIds.find(
      (id) => !displayedChallengeIds.includes(id) && !completedChallengeIds.includes(id)
    );
  };

  return (
    <div className="buttom-section">
      <h1 className="challenges3">Challenges</h1>
      <div className="challenges4">
        {displayedChallenges.map((challenge) => (
          <div key={challenge.id}>
            <Chellenge
              hydrationChallenge={challenge.hydrationChallenge}
              aimToDrinkAbout4LitersOfW={challenge.aimToDrinkAbout4LitersOfW}
              isSelected={challenge.id === selectedChallengeId}
              onCompleted={() => handleClick(challenge.id, "completed")}
              onSkip={() => handleClick(challenge.id, "skip")}
            />
          </div>
        ))}
        {selectedChallengeId && (
          <button onClick={() => setSelectedChallengeId(null)}>Close Challenge</button>
        )}
      </div>
    </div>
  );
};

export default ButtomSection;
