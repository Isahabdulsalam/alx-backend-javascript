export default function taskBlock(isTrue) {
  const task = false;
  let task2 = true;

  if (isTrue) {
    const task = true;
    let task2 = false;
  }

  return [task, task2];
}
