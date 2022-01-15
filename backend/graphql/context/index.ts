// import { PrismaClient } from '@prisma/client';
// import prisma from '@/lib/prisma';
// import { getSession } from 'next-auth/react';

export type Context = {
  session: any; // TODO: set session types
};

export function createContext({}) {
  //   const session = await getSession({ req }); // TODO: credentials not working on graphql studio (/api/graphql)
  return {
    session: { isAuth: true },
  };
}
