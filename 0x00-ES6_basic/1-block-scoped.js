export default function taskBlock(isTrue) {
  const task = false;
  const task2 = true;

  if (isTrue) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
