import { useParams } from '@tanstack/react-router'

export default function StaffId() {

  const params = useParams({ from: '/staff/$staffId' });

  return (
    <div>
      <h2>StaffId</h2>
      <p>StaffId page</p>
      <p>StaffId page</p>
    </div>
  );
}