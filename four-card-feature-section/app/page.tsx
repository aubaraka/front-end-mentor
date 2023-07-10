import Card from "@/Components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-custom flex flex-col items-center justify-center p-64">
      <h1>Reliable, efficient delivery</h1>
      <h2>Powered by Technology</h2>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <Card
        text="Monitors activity to identify project roadblocks"
        color="blue"
        image="icon-supervisor.svg"
        title="Supervisor"
      />
      <Card
        text="Scans our talent network to create the optimal team for your project"
        color="blue"
        image="icon-team-builder.svg"
        title="Team Builder"
      />
      <Card
        text="Regularly evaluates our talent to ensure quality"
        color="blue"
        image="icon-karma.svg"
        title="Karma"
      />
      <Card
        text="Uses data from past projects to provide better delivery estimates"
        color="blue"
        image="icon-calculator.svg"
        title="Calculator"
      />
    </div>
  );
}
