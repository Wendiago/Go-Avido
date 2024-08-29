import "./SkillChart.scss";
type SkillChartProp = {
  skillName: string;
  skillPercentage: number;
  radius?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressBarColor?: string;
};

export const SkillChart = ({
  skillName,
  skillPercentage,
  radius = 40,
  strokeWidth = 5,
  circleColor = "var(--text-regular)",
  progressBarColor = "var(--text-bold)",
}: SkillChartProp) => {
  const circumference: number = radius * 2 * Math.PI;
  const strokeDashoffset: number =
    circumference - (skillPercentage / 100) * circumference;

  return (
    <div className="skillchart">
      <svg
        height={(radius + strokeWidth) * 2}
        width={(radius + strokeWidth) * 2}
        viewBox={`0 0 ${(radius + strokeWidth) * 2} ${
          (radius + strokeWidth) * 2
        }`}
        className="skillchart__svg"
      >
        <circle
          stroke={circleColor}
          fill="transparent"
          strokeWidth={1}
          r={radius}
          cx="50%"
          cy="50%"
        />
        <circle
          stroke={progressBarColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
          r={radius}
          cx="50%"
          cy="50%"
          className="skillchart__progress"
        />
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="skillchart__text"
        >
          {`${skillPercentage}%`}
        </text>
      </svg>
      <div className="skillchart__label">{skillName}</div>
    </div>
  );
};
