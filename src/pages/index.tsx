// src/app/pages/index.tsx

import { GetStaticProps } from 'next';
import prisma from '@/lib/prisma';

// Define the User type based on your Prisma schema
type User = {
  id: string;
  name: string;
  email: string;
};

interface HomeProps {
  users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: {
      users,
    },
  };
};

const Homes: React.FC<HomeProps> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homes;
