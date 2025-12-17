# Chapter 12: Kinematics & Dynamics

## Forward Kinematics
Forward kinematics involves calculating the position and orientation of a robot’s end effector based on the joint parameters (angles or displacements). For humanoid robots, forward kinematics helps determine where the hands, feet, or head will be based on joint motions, enabling tasks like reaching and walking.

## Inverse Kinematics
Inverse kinematics (IK) is the process of determining the joint parameters needed to achieve a desired position of the end effector. IK is critical for humanoid robots to perform precise movements, such as grasping objects or stepping on specific locations.

## Dynamic Balance
Dynamic balance ensures the robot can maintain stability while moving. It involves controlling the center of mass (CoM) and adapting to external forces. Maintaining dynamic balance is essential for walking, running, and interacting with dynamic environments.

## ZMP (Zero Moment Point) Theory
The Zero Moment Point (ZMP) is a key concept in humanoid robot stability. It represents the point where the sum of all moments due to gravity and inertia equals zero. Keeping the ZMP within the support polygon prevents the robot from falling.

## Torque and Joint Control
Torque control allows precise manipulation of robot joints by specifying the force to apply. Combined with joint sensors and controllers, it ensures smooth and accurate motion, essential for safe and efficient humanoid movements.
