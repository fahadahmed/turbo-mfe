import { Link } from '@tanstack/react-router'

const staffData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Manager'
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Assistant Manager'
  },
  {
    id: 3,
    name: 'Alice Doe',
    role: 'Staff'
  }
];

export default function Staff() {
  return (
    <div>
      <h2>Staff</h2>
      <p>Staff page</p>
      <p>A listing of all staff for a service is displayed here.</p>
      <ul>
        {staffData.map(staff => (
          <li key={staff.id}>
            <Link to={`/staff/${staff.id}`}>{staff.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}