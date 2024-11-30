import React from "react";

const LudoBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-15 grid-rows-15 gap-1 p-2 w-full max-w-[500px] mx-auto">
      {/* Generate 225 squares for the board */}
      {Array.from({ length: 225 }).map((_, index) => {
        const row = Math.floor(index / 15);
        const col = index % 15;

        // Default square color
        let bgColor = "bg-gray-100";

        // Central area (5-9, 5-9) - white (where the pieces meet)
        if (row >= 5 && row <= 9 && col >= 5 && col <= 9) {
          bgColor = "bg-white";
        }

        // Player 1 (Red) - Home area (0-3, 0-3)
        else if (row >= 0 && row <= 3 && col >= 0 && col <= 3) {
          bgColor = "bg-red-500";
        }
        // Player 2 (Green) - Home area (0-3, 11-14)
        else if (row >= 0 && row <= 3 && col >= 11 && col <= 14) {
          bgColor = "bg-green-500";
        }
        // Player 3 (Blue) - Home area (11-14, 0-3)
        else if (row >= 11 && row <= 14 && col >= 0 && col <= 3) {
          bgColor = "bg-blue-500";
        }
        // Player 4 (Yellow) - Home area (11-14, 11-14)
        else if (row >= 11 && row <= 14 && col >= 11 && col <= 14) {
          bgColor = "bg-yellow-500";
        }

        // Paths for each player
        // Player 1 (Red) - Left side path (5-9, 0)
        else if (row >= 5 && row <= 9 && col === 0) {
          bgColor = "bg-red-300";
        }
        // Player 2 (Green) - Top side path (0, 5-9)
        else if (row === 0 && col >= 5 && col <= 9) {
          bgColor = "bg-green-300";
        }
        // Player 3 (Blue) - Right side path (5-9, 14)
        else if (row >= 5 && row <= 9 && col === 14) {
          bgColor = "bg-blue-300";
        }
        // Player 4 (Yellow) - Bottom side path (14, 5-9)
        else if (row === 14 && col >= 5 && col <= 9) {
          bgColor = "bg-yellow-300";
        }

        return (
          <div
            key={index}
            className={`w-full h-full ${bgColor} border border-gray-300`}
          >
            {/* Optionally, you can add player pieces here */}
          </div>
        );
      })}
    </div>
  );
};

export default LudoBoard;
