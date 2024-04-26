import { useState } from 'react';

export default function MarkAttendance() {
  const [ count, setCount ] = useState(0);
  
  return (
    <div>
      <h2>Mark Attendance</h2>
      <button onClick={() => setCount((count: number) => count +1)}>
        Count is {count}
      </button>
    </div>
  );
}