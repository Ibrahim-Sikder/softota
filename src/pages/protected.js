import { useSession } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <p>Protected content here</p>
      </>
    );
  }

  return <p>Please sign in to view this page</p>;
}
