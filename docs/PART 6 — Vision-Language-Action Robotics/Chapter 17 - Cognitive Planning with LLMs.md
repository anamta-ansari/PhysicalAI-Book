# Chapter 17: Cognitive Planning with LLMs

## Using LLMs for Instruction Following
Large Language Models (LLMs) can interpret high-level instructions, breaking them down into actionable steps for robots. They bridge the gap between human commands and robotic capabilities.

## Turning "Clean the room" into Robot Actions
LLMs can decompose complex tasks, such as "clean the room," into sequential steps: pick up objects, move to trash, vacuum floor, etc., and send these instructions to the robot control system.

## Task Decomposition
Task decomposition involves dividing a complex instruction into smaller, manageable actions. Each sub-task is mapped to specific robot functions like grasping, navigation, or manipulation.

## Integrating GPT with ROS 2
GPT models can be integrated with ROS 2 to generate task sequences in real time. ROS nodes execute the actions, while the LLM provides contextual reasoning and adaptive decision-making.
